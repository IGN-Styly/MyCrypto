import { NextApiResponse, NextApiRequest } from 'next'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient


export default function handler(
  req: NextApiRequest,
  res: NextApiResponse


) {
    prisma.wallet.findUnique({where:{
        
    }})
  return res.status(200).json({"status":req})
}