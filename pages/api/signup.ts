import User from "../../models/User"
import { connectMongoDb } from "../../utils/connectMongoDb"
import { NextApiRequest, NextApiResponse } from "next"

export default async function signup(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await connectMongoDb()
  if (req.method === "POST") {
    try {
      let { email, firstName, lastName, password } = req.body
      let user = await User.create({ firstName, lastName, email, password })

      if (user) {
        res.status(200).send(user)
      }
    } catch (error: any) {
      console.log(error.message)
      if (error.code) {
        if (error?.code === 11000) {
          error.message = "A user with this email already exists"
        }
      }
      res.status(500).send({ message: error.message })
    }
  } else {
    res.status(500).send("Expected a POST request")
  }
}
