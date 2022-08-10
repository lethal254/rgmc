import sanityClient from "@sanity/client"
import { NextApiRequest, NextApiResponse } from "next"

const client = sanityClient({
  projectId: "5hj4tw8q",
  dataset: "production",
  token: process.env.SANITY_API_TOKEN,
})

export default async function order(req: NextApiRequest, res: NextApiResponse) {
  console.log(req.body)
  const { fullName, _id, phoneNumber, email, deliveryLocation, deliveryDate } =
    JSON.parse(req.body)
  try {
    const response = await client.create({
      _type: "orders",
      car: {
        _type: "reference",
        _ref: _id,
      },
      fullName,
      phoneNumber,
      email,
      deliveryLocation,
      deliveryDate,
    })
  } catch (error) {
    console.log(error)
    res.status(500).send({ message: "Couldn't place order", error })
  }
  console.log("Order submitted")
  return res.status(200).json({ message: "Order submitted" })
}
