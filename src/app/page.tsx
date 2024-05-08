"use client"

import NextAuth, { getServerSession } from "next-auth"
import { options } from "./api/auth/[...nextauth]/options"






export default function Home() {
  const session = getServerSession(options)
  return (
    <>
    <div>
       
    
      {/*
      <Features /> */}
      {/* <GetApp /> */}
    </div>
 
    </>
  )
}
