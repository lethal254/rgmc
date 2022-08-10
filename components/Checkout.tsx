import Modal from "@mui/material/Modal"
import { BiX } from "react-icons/bi"
import Image from "next/image"
import { FormEventHandler, useState } from "react"
import imageUrlBuilder from "@sanity/image-url"
import client from "../sanity"
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
  activeCar: { [key: string]: any }
}

const CheckoutModal = ({
  open,
  handleClose,
  handleOpen,
  activeCar,
}: ModalStatusProps) => {
  const [fullName, setFullName] = useState("")
  const [phoneNumber, setPhone] = useState("")
  const [email, setEmail] = useState("")
  const [deliveryLocation, setDeliveryLocation] = useState("")
  const [datetime, setDatetime] = useState("")
  const [checked, setChecked] = useState(false)

  const acceptTerms = (): void => {
    setChecked(!checked)
  }

  const builder = imageUrlBuilder(client)
  const urlFor = (source: any) => {
    return builder.image(source)
  }
  const handleSubmit: FormEventHandler = async (e) => {
    e.preventDefault()
    if (!checked) {
      toast.error("You need to accept our terms first")
      return
    }
    if (fullName && phoneNumber && email && deliveryLocation && datetime) {
      try {
        const data = await fetch("/api/order", {
          method: "POST",
          body: JSON.stringify({
            fullName,
            phoneNumber,
            email,
            _id: activeCar._id,
            deliveryLocation,
            deliveryDate: datetime,
          }),
        })
        if (data) {
          toast.success(
            "You order has been placed, we will get back to you in a moment"
          )
          handleClose()
        }
      } catch (error) {
        console.log(error)
        toast.error("Error")
      }
    }
  }
  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        closeAfterTransition
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'>
        <div className='w-screen h-[100vh] overflow-y-scroll bg-zinc-900  p-6 md:p-0'>
          {/* Modal header */}
          <div className='flex justify-between items-center text-4xl md:w-[70%] mx-auto pt-6'>
            <h2 className=' font-semibold text-orange-300'>Checkout</h2>
            <button onClick={() => handleClose()}>
              <BiX className='transist hover:text-orange-300' />
            </button>
          </div>
          {/* Main content */}
          <section className='flex mt-10 md:space-x-8  md:w-[70%] mx-auto  md:flex-row flex-col-reverse  space-y-4'>
            {/* Left */}
            <div className='flex-1'>
              <p>Kindly provide this information</p>
              <form onSubmit={handleSubmit}>
                <input
                  type='text'
                  className='input'
                  placeholder='Full Names'
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                />
                <input
                  type='text'
                  className='input'
                  placeholder='Phone'
                  value={phoneNumber}
                  onChange={(e) => setPhone(e.target.value)}
                />
                <input
                  type='text'
                  className='input'
                  placeholder='Email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  type='text'
                  className='input'
                  placeholder='Delivery Location'
                  value={deliveryLocation}
                  onChange={(e) => setDeliveryLocation(e.target.value)}
                />
                <div>
                  <input
                    type='datetime-local'
                    className='input text-gray-50'
                    value={datetime}
                    onChange={(e) => setDatetime(e.target.value)}
                  />
                </div>
                <button className='button-solid'>Buy now</button>
              </form>
            </div>
            {/* Right */}
            <div className='flex-1'>
              <Image
                src={urlFor(activeCar.images[0]).url()}
                width='100%'
                height='70%'
                layout='responsive'
                objectFit='cover'
                className='rounded-lg'
              />
              <div className='flex justify-between items-center mt-4 mb-4'>
                <div>
                  <h3 className='text-xl font-semibold'>{activeCar?.brand}</h3>
                  <p>
                    {activeCar?.forPurchase
                      ? "Selling price"
                      : "Renting price/day"}
                  </p>
                </div>
                <div>
                  Ksh.
                  {activeCar?.forPurchase
                    ? activeCar?.buyingPrice
                    : activeCar?.rentingPrice}
                </div>
              </div>

              <div className='flex justify-between items-center mb-4'>
                <p className='text-sm text-gray-200 font-light '>Sub total</p>
                <p>
                  Ksh.
                  {activeCar?.forPurchase
                    ? activeCar?.buyingPrice
                    : activeCar?.rentingPrice}
                </p>
              </div>

              <div className='space-x-3 flex items-center mt-4 mb-4'>
                <input
                  type='checkbox'
                  checked={checked}
                  onChange={() => acceptTerms()}
                  className='  w-5 h-5  accent-orange-200 rounded-md'
                />
                <p>Accepts Terms and Conditions</p>
              </div>
            </div>
          </section>
        </div>
      </Modal>
    </>
  )
}

export default CheckoutModal
