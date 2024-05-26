'use client'
import CustomNavbar from "@/components/navbar";
import {Button,Input} from "@nextui-org/react";
import Link from "next/link";


const Login = () => {
  return (
    <div>
      <CustomNavbar/>
      <div className="flex justify-center ">
      <div className='border border-black m-7 w-72 p-4 '>
        <h1 className="bg-teal-600 p-2 rounded font-serif">GIZMO</h1>
         <br/>
          <Input label="Username" /> <br/>
          <Input type="password" label="Password" /> <br/>
          <Button radius="full" className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg">
        Login
      </Button>
      <br/>
      <br/>
      <div class="decoration-solid text-sm">Don't have an Account yet? <Link href="/register">Sign Up</Link></div>
      </div>
      </div>
    </div>
 
  )
}

export default Login