import React, { useContext, useEffect, useState } from "react"
import Link from "next/link"
import { HiOutlineMenuAlt1, HiX } from "react-icons/hi"
import { Context } from "../context/index"
import { useRouter } from "next/router"
import axios from "axios"
import { toast } from "react-toastify"

const Header = () => {
  const [showMobileNav, setShowMobileNav] = useState(false)

  const {
    state: { user },
    dispatch,
  } = useContext(Context)
  const router = useRouter()
  const handleLogout = async () => {
    try {
      dispatch({ type: "LOGOUT" })
      window.localStorage.removeItem("user")
      const { data } = await axios.get(`/api/logout`)
      if (data) {
        toast.success(data)
        router.push("/login")
      }
    } catch (error: any) {
      toast.error(error.message)
    }
  }

  return (
    <header className='min-h-[8vh] px-6 md:px-12    top-0 text-gray-50 flex justify-between fixed z-50  items-center w-full  bg-zinc-900 bg-opacity-70 backdrop-blur-md'>
      {/* Nav */}
      <ul
        className={`uppercase  font-medium absolute top-16 left-0 w-[100%]  flex-col space-x-0 lg:relative lg:space-x-5 lg:top-0 lg:flex-row lg:w-fit lg:h-full bg-zinc-900 text-center space-y-5 py-4 lg:bg-transparent lg:text-left lg:space-y-0 lg:py-0 rounded-md lg:rounded-none items-center transition-all text-base ${
          showMobileNav ? " w-full transist" : "hidden w-0"
        } lg:flex`}>
        <li>
          <Link href='/'>
            <a className='hover:text-orange-200 transist'>Home</a>
          </Link>
        </li>

        <li>
          <Link href='/shop'>
            <a className='hover:text-orange-200 transist '>Shop</a>
          </Link>
        </li>
        <li className='lg:hidden flex flex-col  items-center space-y-3'>
          {!user ? (
            <>
              <Link href='/login'>
                <button className='hover:text-orange-200 transist uppercase  font-medium'>
                  Sign In
                </button>
              </Link>
              <Link href='/signup'>
                <button className='button-solid '>Sign Up</button>
              </Link>
            </>
          ) : (
            <button className='button-solid' onClick={(e) => handleLogout()}>
              Logout
            </button>
          )}
        </li>
      </ul>
      {/* Logo */}
      <div>
        <Link href='/'>
          <h1 className='font-bold text-xl text-orange-300'>RGMC</h1>
        </Link>
      </div>
      {/* CTA */}
      <div className='space-x-5 hidden lg:block '>
        {!user ? (
          <>
            <Link href='/login'>
              <button className='hover:text-orange-200 transist uppercase  font-medium'>
                Sign In
              </button>
            </Link>
            <Link href='/signup'>
              <button className='button-solid'>Sign Up</button>
            </Link>
          </>
        ) : (
          <button className='button-solid' onClick={(e) => handleLogout()}>
            Logout
          </button>
        )}
      </div>
      <div
        className='space-x-5 lg:hidden'
        onClick={(e) => setShowMobileNav(!showMobileNav)}>
        {showMobileNav ? (
          <HiX className='text-3xl text-gray-50 hover:text-orange-300 cursor-pointer transist' />
        ) : (
          <HiOutlineMenuAlt1 className='text-3xl text-gray-50 hover:text-orange-300 cursor-pointer transist' />
        )}
      </div>
    </header>
  )
}

export default Header
