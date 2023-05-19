import { NextApiResponse, NextApiRequest } from 'next'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse


) {
    if(!req.query.wallet){return res.status(400).json({"status":"No wallet was provided"})}
    
    let wallet= await prisma.wallet.findFirst({where:{
        wallet:req.query.wallet as string
    }})
    
    if(wallet===null){
        let newWallet= await prisma.wallet.create({data:{
            wallet:req.query.wallet as string
        }})    
        return res.status(200).json({"status":`The wallet ${req.query.wallet} has been Created.`})
    }
  return res.status(200).json({"status":`Wallet: ${req.query.wallet} Already exists`})
}