import type { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import { getProviders, signIn } from "next-auth/react"
import { getServerSession } from "next-auth/next"
import { authOptions } from "~/server/auth";
import { DemoCreateAccount } from "~/components/account";

export default function SignIn({ providers }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const provider=providers
  return (
    <>
      <div className="flex flex-col items-center justify-center pt-32"><div className="max-w-[500px]"><DemoCreateAccount providers={provider}/></div></div>
      
    </>
  )
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await getServerSession(context.req, context.res, authOptions);
  
  // If the user is already logged in, redirect.
  // Note: Make sure not to redirect to the same page
  // To avoid an infinite loop!
  if (session) {
    return { redirect: { destination: "/" } };
  }

  const providers = await getProviders();
  
  return {
    props: { providers: providers ?? [] },
  }
}