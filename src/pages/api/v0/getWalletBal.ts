import { NextApiResponse, NextApiRequest } from 'next'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  return res.status(200).json({"status":req.query})
}