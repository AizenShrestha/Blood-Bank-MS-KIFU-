'use client'
import React, { useState } from "react";
import {Tabs, Tab, Input, Link, Button, Card, CardBody, CardHeader} from "@nextui-org/react";
import { useFormik } from 'formik';
import Image from "next/image";
import './styling.css';


export default function Main() {
  const [selected, setSelected] = React.useState("login");
  const formik = useFormik({
    initialValues: {
      email: '',
      name: '',
      password: '',
      address: '',
    },
    onSubmit: values => {
      registerUser(values)
    },
  });


  const registerUser = async(values)=>{
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(values)
  };
  const response = await fetch('http://localhost:5000/Register', requestOptions);

  }
  const [action,setAction] = useState("Welcome.");
  return (
    <div class="center">
      <Card className=" flex self-center max-w-full w-[390px] position: absolute; ">
    <div className='text'>{action}</div>
    <div className='underline'></div>
        <CardBody className='container'>
          <Tabs
            fullWidth
            size="md"
            aria-label="Tabs form"
            selectedKey={selected}
            onSelectionChange={setSelected}
          >
            <Tab onClick={()=>{setAction('Login')}} key="login" title="Login">
              <form className="flex flex-col gap-4">
                <Input isRequired label="Email" placeholder="Enter your email" type="email" />
                <Input
                  isRequired
                  label="Password"
                  placeholder="Enter your password"
                  type="password"
                />
                <p className="text-center text-small">
                  Need to create an account?{" "}
                  <Link className='forgot-password' size="sm" onPress={() => setSelected("sign-up")}>
                    Sign up
                  </Link>
                </p>
                <div className="flex gap-2 justify-end">
                  <Button fullWidth className="submit">
                    Login
                  </Button>
                </div>
              </form>
            </Tab>
 
            <Tab onClick={()=>{setAction('Sign Up')}} key="sign-up" title="Sign up">
              <form onSubmit={formik.handleSubmit} className="flex flex-col gap-4 ">
              <Input
               name="name"
               onChange={formik.handleChange}
               value={formik.values.name}
              isRequired label="Full Name" placeholder="Enter your name"  />
              <Input
                 name="address"
                 onChange={formik.handleChange}
                 value={formik.values.address}
               isRequired label="Address" placeholder="Enter your address" />
                <Input
                  name="email"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                isRequired label="Email" placeholder="Enter your email" type="email" />
                <Input
                   name="password"
                   onChange={formik.handleChange}
                   value={formik.values.password}
                  isRequired
                  label="Password"
                  placeholder="Enter your password"
                  type="password"
                />
                <p className="text-center text-small">
                  Already have an account?{" "}
                  <a className='forgot-password' size="sm" onPress={() => setSelected("login")}>
                    Login
                  </a>
                </p>
                <div className="flex gap-2 justify-end">
                  <Button type="submit" className="submit">
                    Sign up
                  </Button>
                </div>
              </form>
            </Tab>
          </Tabs>
        </CardBody>
      </Card>
    </div>
  );
}