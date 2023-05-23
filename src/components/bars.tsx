import { type NextPage } from "next";
import Link from "next/link";
import {useSession } from "next-auth/react";

const NavBar: NextPage = () => {
    const { data: sessionData } = useSession();
  return (
    <><div className="top-0">
    <header className="p-4 border-b border-overlay flex justify-between text-sm font-semibold top-0 mb-5">
        <div className="space-x-6 flex items-center">
            <Link className="text-xl leading-none text-text hover:text-lavender" href="/">
                My Crypto
            </Link>
            <Link className="leading-none text-subtext1 hover:text-lavender" href={"/wiki"}>Wiki</Link>
            <Link className="leading-none text-subtext1 hover:text-lavender" href={"https://ign-styly.xyz"}>Blog</Link>
           
        </div>
        <span className="text-gray-400">{sessionData?.user?.name ? "Welcome, "+sessionData?.user?.name+"!":<></>}</span>
    </header>
    </div>
    </>
  );
};

export {NavBar};