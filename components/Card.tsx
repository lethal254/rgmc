import React from "react"
import Image from "next/image"
import client from "../sanity"
import imageUrlBuilder from "@sanity/image-url"

interface Props {
  handleOpen: () => void
  car: { [key: string]: any }
  setActiveCar: (car: { [key: string]: any }) => void
}

const Card = ({ handleOpen, car, setActiveCar }: Props) => {
  const builder = imageUrlBuilder(client)
  function urlFor(source: any) {
    return builder.image(source)
  }
  return (
    <div className='bg-gray-50 rounded-lg '>
      <Image
        src={urlFor(car.images[0]).url()}
        width='100%'
        height='70%'
        layout='responsive'
        objectFit='cover'
        className='rounded-t-lg'
      />
      <div className='p-4'>
        <h3 className='text-zinc-900 mt-4 text-xl font-semibold'>
          {car.brand} {car.series}
        </h3>
        <p className='text-orange-300 mt-4'>{`${
          car.forPurchase
            ? "KSH" + car.buyingPrice
            : "KSH" + car.rentingPrice + "/day"
        }`}</p>
        <button
          className='button-solid mt-4'
          onClick={() => {
            handleOpen()
            setActiveCar(car)
          }}>
          {`${car.forPurchase ? "Buy" : "Rent"}`}
        </button>
      </div>
    </div>
  )
}

export default Card
