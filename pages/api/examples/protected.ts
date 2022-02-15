// This is an example of to protect an API route
import { getSession } from "next-auth/react"
import type { NextApiRequest, NextApiResponse } from "next"

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await getSession({ req })

  if (session) {
    res.send({
      content:
        "true",
    })
  } else {
    res.send({
      error: "La page est protégée, vous ne pouvez pas y accéder sans être connecter !",
    })
  }
}
