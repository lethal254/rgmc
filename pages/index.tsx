import type { NextPage } from "next"
import Header from "../components/Header"
import {
  BsFillCheckSquareFill,
  BsFillEmojiSmileFill,
  BsFillPinMapFill,
} from "react-icons/bs"
import Image from "next/image"
import AliceCarousel from "react-alice-carousel"
import Footer from "../components/Footer"
import { motion } from "framer-motion"
import Link from "next/link"

const Home: NextPage = () => {
  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
  }
  const items = [
    <div>
      <img
        src='/time1.jpg'
        role='presentation'
        className='h-[80vh] object-cover relative'
        width='100%'
      />
      <div className='bg-zinc-900 absolute top-0 left-0 w-[100%] h-[100%] bg-opacity-60 z-2'></div>

      <div className='absolute top-[30%] left-[50%] -translate-x-[50%] flex items-center flex-col '>
        <div className='flex space-x-3 items-center mb-10'>
          <div className='h-12 w-2 bg-orange-300'></div>
          <h2 className='text-2xl md:text-4xl font-semibold tracking-wider'>
            GET CARS OF UPTO A MONTH OF RENTING RIGHT HERE
          </h2>
        </div>
        <Link href='/shop/all'>
          <button className='button-outlined px-3'>Try it</button>
        </Link>
      </div>
    </div>,

    <div>
      <img
        src='/slide1.jpeg'
        role='presentation'
        className='h-[80vh] object-cover relative'
        width='100%'
      />
      <div className='bg-zinc-900 absolute top-0 left-0 w-[100%] h-[100%] bg-opacity-60 z-2'></div>

      <div className='absolute top-[30%] left-[50%] -translate-x-[50%] flex items-center flex-col '>
        <div className='flex space-x-3 items-center mb-10'>
          <div className='h-12 w-2 bg-orange-300'></div>
          <h2 className='text-2xl md:text-4xl font-semibold tracking-wider'>
            EXPERIENCE QUALITY CARS FROM US
          </h2>
        </div>
        <Link href='/shop/all'>
          <button className='button-outlined px-3'>Try it</button>
        </Link>{" "}
      </div>
    </div>,

    <div>
      <img
        src='/getcars.jpg'
        role='presentation'
        className='h-[80vh] object-cover relative'
        width='100%'
      />
      <div className='bg-zinc-900 absolute top-0 left-0 w-[100%] h-[100%] bg-opacity-60 z-2'></div>

      <div className='absolute top-[30%] left-[50%] -translate-x-[50%] flex items-center flex-col '>
        <div className='flex space-x-3 items-center mb-10'>
          <div className='h-12 w-2 bg-orange-300'></div>
          <h2 className='text-2xl md:text-4xl font-semibold tracking-wider'>
            DON'T DREAM IT, DRIVE IT!
          </h2>
        </div>
        <Link href='/shop/all'>
          <button className='button-outlined px-3'>Try it</button>
        </Link>{" "}
      </div>
    </div>,

    <div>
      <img
        src='/sell.jpg'
        role='presentation'
        className='h-[80vh] object-cover relative'
        width='100%'
      />
      <div className='bg-zinc-900 absolute top-0 left-0 w-[100%] h-[100%] bg-opacity-60 z-2'></div>

      <div className='absolute top-[30%] left-[50%] -translate-x-[50%] flex items-center flex-col '>
        <div className='flex space-x-3 items-center mb-10'>
          <div className='h-12 w-2 bg-orange-300'></div>
          <h2 className='text-2xl md:text-4xl font-semibold tracking-wider'>
            BUY YOUR DREAM CAR TODAY
          </h2>
        </div>
        <button className='button-outlined px-3'> Buy</button>
      </div>
    </div>,
  ]
  const items2 = [
    <div className='md:mr-4'>
      <img
        src='/wedding.jpg'
        role='presentation'
        className='h-[60vh] object-cover relative'
        width='100%'
      />
      <div className='bg-zinc-900 absolute top-0 left-0 w-[100%] h-[100%] bg-opacity-50 z-2'></div>

      <div className='h-16 w-[100%] bg-orange-300 z-10 relative flex items-center justify-center '>
        <h3 className='text-xl font-semibold'>Wedding car rental</h3>
      </div>
    </div>,

    <div className='md:mr-4'>
      <img
        src='/near.jpg'
        role='presentation'
        className='h-[60vh] object-cover relative'
        width='100%'
      />
      <div className='bg-zinc-900 absolute top-0 left-0 w-[100%] h-[100%] bg-opacity-60 z-2'></div>

      <div className='  h-16 w-[100%] bg-orange-300 z-10 relative flex items-center justify-center'>
        <h3 className='text-xl font-semibold'>Cars near you</h3>
      </div>
    </div>,

    <div className='md:mr-4'>
      <img
        src='/airport.jpg'
        role='presentation'
        className='h-[60vh] object-cover relative'
        width='100%'
      />
      <div className='bg-zinc-900 absolute top-0 left-0 w-[100%] h-[100%] bg-opacity-60 z-2'></div>

      <div className='h-16 w-[100%] bg-orange-300 z-10 relative flex items-center justify-center'>
        <h3 className='text-xl font-semibold'>Airport car</h3>
      </div>
    </div>,
    <div className='md:mr-4'>
      <img
        src='/cab.jpg'
        role='presentation'
        className='h-[60vh] object-cover relative'
        width='100%'
      />
      <div className='bg-zinc-900 absolute top-0 left-0 w-[100%] h-[100%] bg-opacity-60 z-2'></div>

      <div className='h-16 w-[100%] bg-orange-300 z-10 relative flex items-center justify-center '>
        <h3 className='text-xl font-semibold'>Cabs</h3>
      </div>
    </div>,
  ]
  return (
    <>
      <Header />
      <div className='text-gray-50 bg-zinc-900 min-h-screen '>
        {/* Hero */}
        <section
          className='h-[100vh] px-6 md:px-12 bg-no-repeat'
          style={{
            background: `url("all.jpg")`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "right center",
          }}>
          <div className='bg-zinc-900 absolute top-0 left-0 w-[100%] h-[100%] bg-opacity-80 z-2'></div>
          {/* Hero content */}
          <div className='h-full flex items-center z-10 relative'>
            <div>
              <motion.h2
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className='text-6xl lg:text-9xl font-bold text-orange-200'>
                RGMC
              </motion.h2>
              <motion.h3
                className='text-3xl mt-4 mb-4 font-medium'
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.7 }}>
                Safaris and Car <br /> Renting
              </motion.h3>
              <motion.div
                className='flex md:items-center md:space-x-4 space-x-0 flex-col md:flex-row space-y-4 md:space-y-0'
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.9 }}>
                <p>The easiest and fastest way to rent a car.</p>
                <div className='h-1 bg-orange-300 w-20'></div>
                <button className='button-outlined'>Book a car</button>
              </motion.div>
            </div>
          </div>
        </section>
        {/* Why choose RGMC */}

        <section className=' min-h-[70vh]  flex flex-col items-center mt-10 px-6 md:px-0 '>
          <h2 className='text-2xl md:text-3xl font-semibold   text-orange-300 '>
            Why choose RGMC
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[100%] md:w-[80%] lg:w-[80%] mt-10 lg:mt-20  md:space-x-6 space-y-6 md:space-y-4 lg:space-y-0  h-full '>
            <motion.div
              className='flex items-center py-6 flex-col p-4 h-full  justify-center hoveranim'
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5 }}>
              <BsFillCheckSquareFill className='text-center text-3xl text-orange-300' />
              <h3 className='text-xl font-semibold mb-6 mt-6'>
                Fast and Easy Booking
              </h3>
              <p className='leading-loose tracking-wider  text-center text-sm md:text-base'>
                It's fast and easy to hire a car from us with our booking system
                which is user-friendly and equipped with the latest generation
                features to ensure secure and convenient access to the required
                information.
              </p>
            </motion.div>
            <motion.div
              className='flex items-center py-6 flex-col bg-gray-200 p-4 rounded-lg text-zinc-800 justify-center'
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.7 }}>
              <BsFillPinMapFill className='text-center text-3xl text-orange-300' />
              <h3 className='text-xl font-semibold mb-6 mt-6'>
                Many Pickup Locations
              </h3>
              <p className='leading-loose tracking-wider text-center text-sm md:text-base'>
                Pick the car from any location through our friendly staff who
                can drop off the car at the terminal of your choice. Once you
                are ready to hand back the keys, simply meet our team at a
                prearranged time andd place.
              </p>
            </motion.div>
            <motion.div
              className='flex items-center py-6 flex-col justify-center hoveranim'
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.9 }}>
              <BsFillEmojiSmileFill className='text-center text-3xl text-orange-300 ' />
              <h3 className='text-xl font-semibold mb-6 mt-6'>
                Satisfied Customers
              </h3>
              <p className='leading-loose tracking-wider  text-center text-sm md:text-base'>
                Excellent service from start to finish. From friendly staff who
                really want to help you, to excellent low mileage vehicles, one
                could not ask for more.
                <br /> - James Kirui(Customer)
              </p>
            </motion.div>
          </div>
        </section>

        {/* Browse by category */}
        <section className='bg-zinc-900 min-h-[70vh] flex flex-col  mt-10 px-6 lg:px-12'>
          <div className='flex space-x-3 items-center'>
            <div className='h-12 w-2 bg-orange-300'></div>
            <h2 className='text-2xl md:text-3xl font-semibold'>
              Browse by category
            </h2>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-6'>
            <Link href='/shop/all'>
              <div className='h-full w-[100%] cursor-pointer'>
                <Image
                  src={"/bg2.jpg"}
                  alt='Blog image'
                  width='100%'
                  height='80%'
                  objectFit='cover'
                  layout='responsive'
                  priority
                />
                <div className=' bg-orange-300 p-2 text-center'>
                  <h2 className=' font-semibold text-xl'>All</h2>
                </div>
              </div>
            </Link>
            <Link href='/shop/Sedan'>
              <div className='h-full w-[100%] cursor-pointer'>
                <Image
                  src={"/sedan.jpg"}
                  alt='Blog image'
                  width='100%'
                  height='80%'
                  objectFit='cover'
                  layout='responsive'
                  priority
                />
                <div className=' bg-orange-300 p-2 text-center'>
                  <h2 className=' font-semibold text-xl'>Sedan</h2>
                </div>
              </div>
            </Link>
            <Link href='/shop/SUV'>
              <div className='h-full w-[100%] cursor-pointer'>
                <Image
                  src={"/suv2.jpg"}
                  alt='Blog image'
                  width='100%'
                  height='80%'
                  objectFit='cover'
                  layout='responsive'
                  priority
                />
                <div className=' bg-orange-300 p-2 text-center'>
                  <h2 className=' font-semibold text-xl'>SUV</h2>
                </div>
              </div>
            </Link>

            <Link href='/shop/Pickup'>
              <div className='h-full w-[100%] cursor-pointer'>
                <Image
                  src={"/pickup2.jpg"}
                  alt='Blog image'
                  width='100%'
                  height='80%'
                  objectFit='cover'
                  layout='responsive'
                  priority
                />
                <div className=' bg-orange-300 p-2 text-center'>
                  <h2 className=' font-semibold text-xl'>Pickup</h2>
                </div>
              </div>
            </Link>
          </div>
        </section>

        {/* Carousel */}
        <section className='max-w-[100vw]  bg-zinc-900  flex flex-col  mt-10  '>
          <AliceCarousel
            mouseTracking
            autoPlay
            infinite
            animationDuration={4000}
            disableButtonsControls
            autoPlayInterval={2000}
            items={items}
          />
        </section>
        {/* Best services */}
        <section className='max-w-[100vw] min-h-[50vh]  bg-zinc-900  flex flex-col  mt-10 px-6 md:px-12 '>
          <div className='flex space-x-3 items-center'>
            <div className='h-12 w-2 bg-orange-300'></div>
            <h2 className='text-2xl md:text-3xl font-semibold'>
              Best services for car renters
            </h2>
          </div>
          <div className='w-[100%] lg:w-[50%] mt-6 leading-loose tracking-wide'>
            <p>
              Because we’ll make you more money with customer-focused,
              convincing copy that sells harder. Nemo enim ipsam voluptatem quia
              voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur
              magni dolores eos qui ratione voluptatem sequi nesciunt. Neque
              porro quisquam est, qui dolorem ipsum quia dolor sit amet,
              consectetur, adipisci velit, sed quia non numquam eius modi
              tempora incidunt ut labore et dolore magnam aliquam quaerat
              voluptatem.
            </p>
            <Link href='/shop/all'>
              <button className='button-solid mt-6'>Rent out</button>
            </Link>
          </div>
        </section>

        {/* More that we offer */}
        <section className='bg-zinc-900 min-h-[30vh] flex flex-col items-center mt-10 md:px-6 '>
          <h2 className='text-2xl md:text-3xl font-semibold  mb-10'>
            More that we offer
          </h2>
          <AliceCarousel
            items={items2}
            mouseTracking
            responsive={responsive}
            controlsStrategy='alternate'
            disableButtonsControls
            autoPlay
            animationDuration={1000}
            autoPlayInterval={2000}
          />
        </section>
        <Footer />
      </div>
    </>
  )
}

export default Home
