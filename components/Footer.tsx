import React from "react"
import { HiLocationMarker, HiMail } from "react-icons/hi"
import {
  BsFillTelephoneFill,
  BsFacebook,
  BsInstagram,
  BsTwitter,
  BsLinkedin,
} from "react-icons/bs"
import Link from "next/link"

const Footer = () => {
  return (
    <div className='w-full bg-inherit min-h-[20vh] flex px-6 mt-20 relative items-center overflow-hidden bg-black'>
      <div className='flex-1 flex flex-col space-y-4 mb-4 lg:p-6'>
        <div className='flex space-x-3  text-sm md:text-base'>
          <HiLocationMarker className='text-orange-300 text-xl' />
          <p>Trm drive, Nairobi, Kenya</p>
        </div>
        <div className='flex space-x-3 items-center text-sm md:text-base'>
          <BsFillTelephoneFill className='text-orange-300 text-xl' />
          <p>+254 742 492095</p>
        </div>
        <div className='flex space-x-3 items-center text-sm md:text-base'>
          <HiMail className='text-orange-300 text-xl' />
          <p>rgmcsafarisandcarrental@gmail.com</p>
        </div>
      </div>
      <div className='flex-1 flex flex-col items-center mb-4'>
        {/* Social media icons */}
        <div className='flex space-x-4 text-2xl'>
          <Link href=''>
            <a
              target='_blank'
              className='cursor-pointer transist hover:text-orange-300'>
              <BsTwitter />
            </a>
          </Link>
          <Link href='https://instagram.com/rgmc_safaris_and_car_rentals?igshid=YmMyMTA2M2Y='>
            <a
              target='_blank'
              className='cursor-pointer hover:text-orange-300 transist'>
              <BsInstagram />
            </a>
          </Link>
        </div>
        {/* Links */}
        <div className='flex  mt-4 flex-col md:flex-row md:space-x-4 text-sm md:text-base space-y-3 md:space-y-0'>
          <Link href='/'>
            <div className='flex space-x-3 items-center cursor-pointer'>
              <div className='h-4 w-1 bg-orange-300'></div>
              <h2 className='font-semibold'>HOME</h2>
            </div>
          </Link>
          <Link href='/shop/all'>
            <div className='flex space-x-3 items-center cursor-pointer'>
              <div className='h-4 w-1 bg-orange-300'></div>
              <h2 className='font-semibold'>SHOP</h2>
            </div>
          </Link>
        </div>
      </div>
      <div className='absolute bottom-0  items-center justify-center w-full px-0 hidden md:flex'>
        <p>Copyright @ 2022 RGMC</p>
      </div>
    </div>
  )
}

export default Footer
