import Link from "next/link"
import { Icons } from "../components/icons"
import React from "react"


const Features = () => {

    return (<section className="container flex flex-col  gap-6 py-8 md:max-w-[64rem] md:py-12 lg:py-24">

        <div className="mx-auto flex w-full flex-col gap-4 md:max-w-[52rem]">

            <h2 className="text-3xl font-bold leading-[1.1] tracking-tighter sm:text-3xl md:text-6xl text-lavender">

                My Crypto Miner
            </h2>
            <p className="max-w-[85%] leading-normal text-subtext0 sm:text-lg sm:leading-7">
                Unlock My crypto Mining!
            </p>
        </div>
        <div className="grid w-full items-start gap-10 rounded-lg border border-slate-200 p-10 md:grid-cols-[1fr_200px]">
            <div className="grid gap-6">
                <h3 className="text-xl font-bold sm:text-2xl text-text">
                    What&apos;s included in My Crypto Mining Software
                </h3>
                <ul className="grid gap-3 text-sm text-subtext1 sm:grid-cols-2">
                    <li className="flex items-center">
                        <Icons.check className="mr-2 h-4 w-4" /> Fast And 100% safety
                    </li><li className="flex items-center">
                        <Icons.check className="mr-2 h-4 w-4" /> Made in Rust lang
                    </li><li className="flex items-center">
                        <Icons.check className="mr-2 h-4 w-4" /> Can Use GPU and CPU
                    </li><li className="flex items-center">
                        <Icons.check className="mr-2 h-4 w-4" /> Helps the network out
                    </li>
                    <li className="flex items-center">
                        <Icons.check className="mr-2 h-4 w-4" /> Easy to Use
                    </li>
                    <li className="flex items-center">
                        <Icons.check className="mr-2 h-4 w-4" /> Unmatched Mining Speeds
                    </li>
                    <li className="flex items-center">
                        <Icons.check className="mr-2 h-4 w-4" /> Beautiful Visuals
                    </li>
                    <li className="flex items-center">
                        <Icons.check className="mr-2 h-4 w-4" /> In the arch-repo by IGN-Styly
                    </li>

                </ul>
            </div>
            <div className="flex flex-col gap-4 text-center">
                <div>
                    <h4 className="text-5xl font-bold text-text">8 UsC</h4>
                    <p className="text-sm font-medium text-subtext1">One time Payement</p>
                </div>
                <Link className="text-text rounded-lg bg-overlay0 p-2 hover:bg-overlay1 hover:border-lavender border-base border-[2px]" href={"/pay"}>
                    Purchase With Universal Secure Curency
                </Link>
            </div>
        </div>
    </section>
    
    )
}

export {Features}