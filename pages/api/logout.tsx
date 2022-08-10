import { connectMongoDb } from "../../utils/connectMongoDb"
import cookie from "cookie"
import { NextApiRequest, NextApiResponse } from "next"

export default async function login(req: NextApiRequest, res: NextApiResponse) {
  await connectMongoDb()
  if (req.method === "GET") {
    try {
      res.setHeader(
        "Set-Cookie",
        cookie.serialize("token", "", {
          httpOnly: true,
          secure: process.env.NODE_ENV !== "development",
          sameSite: "strict",
          path: "/",
        })
      )
      res.status(200).send("Logout successful")
    } catch (error: any) {
      console.log(error)
      res.status(500).send({ message: error.message })
    }
  } else {
    res.status(500).send("Expected a GET request")
  }
}
