import React, { useState, SyntheticEvent, useContext } from "react"
import Link from "next/link"
import axios from "axios"
import { toast } from "react-toastify"
import { Context } from "../context"
import Header from "../components/Header"

const Signup = () => {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [password, setPassword] = useState("")
  const [email, setEmail] = useState("")
  const [checked, setChecked] = useState(false)

  const onSignup = async (e: SyntheticEvent): Promise<void> => {
    e.preventDefault()
    if (checked) {
      try {
        const { data } = await axios.post("/api/signup", {
          firstName,
          lastName,
          email,
          password,
        })
        if (data) {
          toast.success("Sign up successful")
        }
      } catch (error: any) {
        toast.error(error?.response.data.message)
        console.log(error)
      }
    } else {
      toast.error("You need to accept our terms and conditions first")
    }
  }

  const acceptTerms = (): void => {
    setChecked(!checked)
  }

  return (
    <>
      <Header />
      <div
        className='w-screen min-h-screen flex  justify-center   absolute top-0 left-0'
        style={{
          background: `url("/bg.jpg")`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "right center",
        }}>
        <div className='bg-zinc-900 absolute top-0 left-0 w-[100%] h-[100%] bg-opacity-90 z-2'></div>

        <div className='flex items-center  md:mt-32 flex-col  md:w-[50%] z-10 absolute top-[10%]  md:top-[5%] left-[50%] -translate-x-[50%]  w-full px-6 h-full'>
          <h1 className='text-2xl font-semibold mb-10'>Create Account</h1>
          <form onSubmit={onSignup} className='h-full'>
            <div className='space-x-0 flex flex-col md:flex-row md:space-x-5 '>
              <input
                type='text'
                placeholder='First Name'
                className='input'
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
              <input
                type='text'
                placeholder='Last Name'
                className='input'
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
            </div>
            <input
              type='email'
              placeholder='Enter your email'
              className='input'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type='password'
              placeholder='Enter your passsword'
              className='input'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <div className='space-x-3 flex items-center mt-4 mb-4'>
              <input
                type='checkbox'
                className='  w-5 h-5  accent-orange-200 rounded-md'
                checked={checked}
                onChange={() => acceptTerms()}
              />
              <p>Accepts Terms and Conditions</p>
            </div>
            <button className='button-solid py-3 w-full mt-6'>
              Create account
            </button>
          </form>
        </div>
      </div>
    </>
  )
}

export default Signup
