'use client'
import CustomNavbar from "@/components/navbar";
import {Button,Input} from "@nextui-org/react";
import Link from "next/link";
Link

const Register = () => {
  return (
    <div>
      <CustomNavbar/>
      <div className="flex justify-center ">
      <div className='border border-black m-7 w-72 p-4 '>
          <Input type="email" label="Email" /> <br/>
          <Input label="Username" /> <br/>
          <Input  label="Address" /> <br/>
          <Input type="password" label="Password" /> <br/>
          <Button radius="full" className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg">
        Sign Up
      </Button>
      <br/>
      <br/>
      <div class="decoration-solid text-sm">Already have an Account? <Link href="/login">Sign In here</Link></div>
      </div>
      </div>
    </div>
 
  )
}

export default Register