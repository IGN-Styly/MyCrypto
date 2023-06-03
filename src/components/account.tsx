"use client"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { Icons } from "@/components/icons"
import {  NextPage } from "next"
import { signIn } from "next-auth/react"
import {BsDiscord} from "react-icons/bs"





const DemoCreateAccount:NextPage<any>=({providers})=> {
  
  return (
    <Card>
      <CardHeader className="space-y-1 w-[500px]">
        <CardTitle className="text-2xl self-center">Sign in</CardTitle>
        
        <CardDescription className=" text-subtext1 pb-2">If you don't have an account this will create one for you, and if you do have one it will log you in.</CardDescription>
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t" />
          </div>
          
        </div>
      </CardHeader>
  <CardContent className="grid gap-4">
        <div className="grid grid-cols-1 gap-6">
          <Button variant="outline" className="flex" onClick={()=>{signIn(providers.discord.id)}}>
            <BsDiscord className="mr-2 h-4 w-4" />
            {providers.discord.name}
          </Button>

        </div>
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t" />
          </div>
          
        </div>
        
      </CardContent>
      <CardFooter className="items-center justify-center">
        My Crypto 2023
      </CardFooter>
    </Card>
  )
}
export {DemoCreateAccount}
