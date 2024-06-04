'use client'
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import {Button,DatePicker,Input, link} from "@nextui-org/react";
import CustomNavbar from '@/components/navbar';
import Link from 'next/link';

const RegisterForm = () => {
  const initialValues = {
    name: '',
    phonenumber: '',
    address: '',
    dob: '',
  };

  const validationSchema = Yup.object({
    name: Yup.string().required('Required'),
    phonenumber: Yup.string().required('Required'),
    address: Yup.string().min(6, 'Password must be at least 6 characters').required('Required'),
    dob: Yup.string().required('Required'),
  });

  const onSubmit = (values) => {
    console.log('Form data', values);
  };

  return (
    <div>
      <CustomNavbar/>
    <div className="flex justify-center ">
      <h1>Register Here</h1>
        <div className='border border-black m-7 w-72 p-4 '>
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
        <Form onSubmit={formik.handleSubmit}>
          <div>
            <label htmlFor="name">Name</label>
            <Input type="text" id="name" name="name" />
            {formik.errors.name}
          </div>

          <div>
            <label htmlFor="number">Phone Number</label>
            <Input type="number" id="email" name="number" />
          </div>

          <div>
            <label htmlFor="address">Address</label>
            <Input type="address" id="address" name="address" />
          </div>

          <div>
            <label htmlFor="dob">Date of Birth</label>
            <Input type="date" id="dob" name="dob" />
          </div>

          <div className="margin-bottom: 15px;">
            <label htmlFor="Bloodtype">Blood Group</label>
            <br/>
            <Field as="select" id="Bloodtype" name="Bloodtype">
              <option value="O+">O+</option>
              <option value="O-">O-</option>
              <option value="A+">A+</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B-">B-</option>
            </Field>
          </div>
           <br/>
          <Button radius="full" className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg flex justify-start">
        Register
      </Button>
      <br/>
      <br/>
        </Form>
      </Formik>
      <div class="decoration-solid text-sm">Already have an Account? <Link href="/login">Sign In here</Link></div>
    </div>
    </div>
    </div>
  );
};

export default RegisterForm;