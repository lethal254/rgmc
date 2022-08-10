import { useRouter } from "next/router"
import React, { ReactNode, useContext, useEffect, useState } from "react"
import { Context } from "../context"
import Header from "./Header"

interface Props {
  children: ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <div className='min-w-full h-fit '>
      <div className='bg-zinc-900 w-full min-h-screen relative'>
        <div className='px-6 pt-4 text-gray-50 z-3 relative'>
          <Header />
          {children}
        </div>
      </div>
    </div>
  )
}

export default Layout
