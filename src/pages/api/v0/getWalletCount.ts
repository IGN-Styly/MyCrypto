import { PrismaClient } from '@prisma/client'
import { NextApiResponse, NextApiRequest } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse


) {
  const prisma=new PrismaClient
  if(req.query.wallet){
    let count = await prisma.wallet.findUnique({where:{
      wallet:req.query.wallet as string
    }})
    return res.status(400).json({"status":"Succesfully returned Count","count":count?.count})
  }
  return res.status(400).json({"status":"No wallet was provided"})
}