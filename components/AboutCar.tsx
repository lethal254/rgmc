import React, {
  ReactComponentElement,
  useContext,
  useEffect,
  useState,
} from "react"
import Modal from "@mui/material/Modal"
import Header from "../components/Header"
import { BiX } from "react-icons/bi"
import { Fade } from "@mui/material"
import AliceCarousel from "react-alice-carousel"
import imageUrlBuilder from "@sanity/image-url"
import client from "../sanity"
import { Context } from "../context"
import { toast } from "react-toastify"

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "100%",
  height: "100%",
  bgcolor: "red",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
}

interface ModalStatusProps {
  open: boolean
  handleOpen: () => void
  handleClose: () => void
  navigateToCheckout: () => void
  activeCar: { [key: string]: any }
}

const AboutCarModal = ({
  open,
  handleClose,
  handleOpen,
  navigateToCheckout,
  activeCar,
}: ModalStatusProps) => {
  const builder = imageUrlBuilder(client)
  const urlFor = (source: any) => {
    return builder.image(source)
  }

  let items = []
  if (activeCar && activeCar.images?.length > 0) {
    items = activeCar.images?.map((image) => (
      <div
        className='w-full min-h-[50vh] rounded-lg h-full'
        style={{
          backgroundImage: `url("${urlFor(image).url()}")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}></div>
    ))
  }
  const {
    state: { user },
    dispatch,
  } = useContext(Context)

  if (!user) {
    return <></>
  }
  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        closeAfterTransition
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'>
        <Fade in={open}>
          <div className='w-screen h-[100vh] overflow-y-auto bg-zinc-900   p-6 md:p-0'>
            {/* Modal header */}
            <div className='flex justify-between items-center text-4xl md:w-[70%] mx-auto pt-6'>
              <h2 className=' font-semibold text-orange-300'>
                {activeCar?.brand}
              </h2>
              <button onClick={() => handleClose()}>
                <BiX className='transist hover:text-orange-300' />
              </button>
            </div>
            {/* Main content */}
            <section className='flex md:flex-row flex-col mt-10 md:space-x-5  md:w-[70%] mx-auto'>
              {/* Left */}
              <div className='md:w-[20%] '>
                <div className='mb-8  flex md:block items-center justify-between'>
                  <p className=' text-gray-200'>Series</p>
                  <p className='text-2xl text-gray-50 mt-4 font-semibold'>
                    {activeCar?.series}
                  </p>
                </div>
                <div className='mb-8 flex md:block items-center justify-between'>
                  <p className=' text-gray-200'>Engine</p>
                  <p className='text-2xl text-gray-50 mt-4 font-semibold'>
                    {activeCar?.engine}
                  </p>
                </div>
                <div className='mb-8 flex md:block items-center justify-between'>
                  <p className=' text-gray-200'>Color</p>
                  <p className='text-2xl text-gray-50 mt-4 font-semibold'>
                    {activeCar?.color}
                  </p>
                </div>
                <div className='mb-8 flex md:block items-center justify-between'>
                  <p className=' text-gray-200'>Seats</p>
                  <p className='text-2xl text-gray-50 mt-4 font-semibold'>
                    {activeCar?.seats}
                  </p>
                </div>
              </div>
              {/* Center */}
              <div className='md:w-[60%]  md:flex flex-col items-center hidden'>
                <AliceCarousel
                  mouseTracking
                  animationDuration={1000}
                  autoPlayInterval={2000}
                  disableDotsControls
                  autoPlay
                  items={items}
                />
                <button
                  className='button-solid  p-4'
                  onClick={() => navigateToCheckout()}>
                  {activeCar?.forPurchase ? "Buy" : "Rent now"}
                </button>
              </div>
              {/* Right */}
              <div className='md:w-[20%] flex flex-col md:items-end md:text-right '>
                <div className='mb-8 flex items-center justify-between w-full md:flex-col'>
                  <p className=' text-gray-200'>Transmission</p>
                  <p className='text-2xl text-gray-50 mt-4 font-semibold'>
                    {activeCar?.transmission}
                  </p>
                </div>
                <div className='mb-8 flex w-full items-center justify-between md:flex-col'>
                  <p className=' text-gray-200'>Fuel type</p>
                  <p className='text-2xl text-gray-50 mt-4 font-semibold'>
                    {activeCar?.fuelType}
                  </p>
                </div>
                <div className='mb-8 flex w-full items-center justify-between md:flex-col'>
                  <p className=' text-gray-200'>Top speed</p>
                  <p className='text-2xl text-gray-50 mt-4 font-semibold'>
                    {activeCar?.topSpeed} Km/hr
                  </p>
                </div>
                <div className='mb-8 flex w-full items-center justify-between md:flex-col'>
                  <p className=' text-gray-200'>
                    {activeCar?.forPurchase
                      ? "Selling price"
                      : "Renting price/day"}
                  </p>
                  <p className='text-2xl text-gray-50 mt-4 font-semibold'>
                    Ksh.
                    {activeCar?.forPurchase
                      ? activeCar?.buyingPrice
                      : activeCar?.rentingPrice}
                  </p>
                </div>
              </div>
              <div className='md:w-[60%]  flex flex-col items-center md:hidden'>
                <AliceCarousel
                  mouseTracking
                  animationDuration={1000}
                  autoPlayInterval={2000}
                  disableDotsControls
                  infinite
                  autoPlay
                  items={items}
                />
                <button
                  className='button-solid  p-4'
                  onClick={() => navigateToCheckout()}>
                  {activeCar?.forPurchase ? "Buy" : "Rent"}
                </button>
              </div>
            </section>
          </div>
        </Fade>
      </Modal>
    </>
  )
}

export default AboutCarModal
