import React, { useContext, useState } from "react"
import Header from "../../components/Header"
import { BsArrowLeft, BsArrowRight } from "react-icons/bs"
import Card from "../../components/Card"
import AboutCarModal from "../../components/AboutCar"
import CheckoutModal from "../../components/Checkout"
import { GetServerSideProps } from "next"
import Client from "../../sanity"
import { Context } from "../../context"
import { toast } from "react-toastify"
import { useRouter } from "next/router"

interface Props {
  cars: []
  categories: [{ [key: string]: any }]
}

const Shop = ({ cars: garis, categories }: Props) => {
  const [open, setOpen] = useState(false)
  const [cars, setCars] = useState(garis)
  const [showCheckout, setShowCheckout] = useState(false)
  const [activeCar, setActiveCar] = useState({})
  const [activeCategory, setActiveCategory] = useState("all")
  const router = useRouter()
  const categoryFromUrl = router.query.url
  console.log(categoryFromUrl)

  const {
    state: { user },
    dispatch,
  } = useContext(Context)

  const handleOpen = () => {
    if (user) {
      setOpen(true)
    } else {
      toast.error("You need to login first")
    }
  }
  const handleClose = () => {
    setOpen(false)
    setShowCheckout(false)
  }

  const navigateToCheckout = () => {
    setShowCheckout(true)
  }

  const handleCategoryChange = async (category: string) => {
    setActiveCategory(category)
    if (category !== "all") {
      const newCars = await Client.fetch(
        `*[_type =='cars' && "${category}" in [category->category]]`
      )

      console.log(newCars)
      setCars(newCars)
    } else {
      const newCars = await Client.fetch(`*[_type =='cars']`)
      setCars(newCars)
    }
  }
  return (
    <>
      <Header />
      {showCheckout ? (
        <CheckoutModal
          open={open}
          handleOpen={handleOpen}
          handleClose={handleClose}
          activeCar={activeCar}
        />
      ) : (
        <AboutCarModal
          open={open}
          handleOpen={handleOpen}
          handleClose={handleClose}
          navigateToCheckout={navigateToCheckout}
          activeCar={activeCar}
        />
      )}

      {/* Container */}
      <div className='bg-zinc-900 min-h-[100vh] text-gray-50 flex md:flex-row flex-col pt-24 md:space-x-10 px-4 md:px-0 min-w-full '>
        <ul className='flex whitespace-nowrap max-w-full overflow-x-scroll items-center space-x-3 md:hidden p-2 hide-scroll-bar'>
          <>
            <button
              onClick={() => handleCategoryChange("all")}
              className={`${activeCategory === "all" ? "active-button" : ""}`}>
              All vehicles
            </button>
            {categories.map((category) => (
              <button
                onClick={() => handleCategoryChange(category?.category)}
                className={`${
                  activeCategory === category?.category ? "active-button" : ""
                }`}>
                {category?.category}
              </button>
            ))}
          </>
        </ul>
        {/* Sidenav */}

        <div className='w-[15%] bg-zinc-800 sticky left-0 top-20 h-[100vh] hidden md:block'>
          <ul className=' h- h-full flex items-center flex-col space-y-5 py-6'>
            <>
              <button
                onClick={() => handleCategoryChange("all")}
                className={`${
                  activeCategory === "all" ? "active-button" : ""
                }`}>
                All vehicles
              </button>
              {categories.map((category) => (
                <button
                  onClick={() => handleCategoryChange(category?.category)}
                  className={`${
                    activeCategory === category?.category ? "active-button" : ""
                  }`}>
                  {category?.category}
                </button>
              ))}
            </>
          </ul>
        </div>
        {/* Main */}
        <div className='flex-1'>
          {/* Banner */}

          <section className='mt-6 grid grid-cols-1  md:grid-cols-3 lg:grid-cols-4 gap-5 md:w-[97%] '>
            {cars.length > 0 &&
              cars.map((car) => (
                <Card
                  handleOpen={handleOpen}
                  car={car}
                  setActiveCar={setActiveCar}
                />
              ))}
          </section>
        </div>
      </div>
    </>
  )
}

export default Shop

export const getServerSideProps: GetServerSideProps = async (context: any) => {
  let cars: string[] = []

  const category = context.params.url
  if (category !== "all") {
    cars = await Client.fetch(
      `*[_type =='cars' && "${category}" in [category->category]]`
    )
  } else {
    cars = await Client.fetch(`*[_type =='cars']`)
  }
  const categories = await Client.fetch(`*[_type == "categories"]`)

  return {
    props: { cars, categories },
  }
}
