import React, { SyntheticEvent, useContext, useEffect, useState } from "react"
import Link from "next/link"
import { Context } from "../context"
import { useRouter } from "next/router"
import axios from "axios"
import { toast } from "react-toastify"
import Header from "../components/Header"

const Login = () => {
  const [email, setEmail] = useState("benardogutu65@gmail.com")
  const [password, setPassword] = useState("lethalone")

  const {
    state: { user },
    dispatch,
  } = useContext(Context)

  const router = useRouter()

  useEffect(() => {
    if (user) {
      router.push(`/`)
    }
  }, [user])

  const handleLogin = async (e: SyntheticEvent) => {
    e.preventDefault()
    try {
      const { data } = await axios.post("/api/login", {
        email,
        password,
      })
      if (data) {
        dispatch({ type: "LOGIN", payload: data })
        window.localStorage.setItem("user", JSON.stringify(data))
        toast.success("Login successful")
      }
    } catch (error: any) {
      console.log(error)
      toast.error(error.response.data.message)
    }
  }

  return (
    <>
      <Header />
      <div
        className='w-screen min-h-screen flex  justify-center   fixed top-0 left-0'
        style={{
          background: `url("/bg.jpg")`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "right center",
        }}>
        <div className='bg-zinc-900 absolute top-0 left-0 w-[100%] h-[100%] bg-opacity-90 z-2'></div>

        <div className='flex items-center mt-10 md:mt-32 flex-col  md:w-[50%] z-10 absolute  top-[30%] left-[50%] -translate-x-[50%] -translate-y-[50%] w-full px-6'>
          <h1 className='text-2xl font-semibold mb-10 '>Login</h1>
          <form onSubmit={handleLogin}>
            <input
              type='email'
              placeholder='Enter your email'
              className='input'
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type='password'
              placeholder='Enter your passsword'
              className='input'
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Link href='/forgot-password'>
              <p className='text-right text-blue-300 cursor-pointer'>
                Forgot password ?
              </p>
            </Link>

            <button className='button-solid py-3 w-full mt-6'>Login</button>
          </form>
          <p className='mt-4'>
            Don't have an account ?
            <Link href='/login'>
              <a className='text-orange-300'> Sign up</a>
            </Link>
          </p>
        </div>
      </div>
    </>
  )
}

export default Login
