import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Nav } from '../components/nav'
import { useState } from "react";
import Link from 'next/link';



const Create: NextPage = () => {


  const [file, setFile] = useState("/lady2.jpeg");

  function handleChange(e: any) {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
}

  return (
    <>
    <Link href="/login" className='text-[40px] font-bold px-4'>404 Directory</Link>
    <div className="flex flex-col h-fit justify-center items-center">
      
        <form action='/api/create' method='post' className='flex flex-col mobile:w-[80%] tablet:w-[60%] laptop:w-[30%]'>
        <div className='flex flex-row justify-center items-center'>
        {/* <img src={file} className='rounded-full h-[100px] w-[100px]'/>
        
        <input type="file" onChange={handleChange} className='w-fit mt-2 ml-4'
  ></input> */}
  </div>
        <label className='mt-6'>Name</label>
        <input name="name" className='rounded-md  py-2 px-2 border mt-2'
  placeholder='Name'
  ></input>

        <label className='mt-3'>Email</label>
        <input name="email" className='rounded-md  py-2 px-2 border mt-2'
  placeholder='Email'
  ></input>
  <label className='mt-3'>LinkedIn</label>
        <input name="linkedin" className='rounded-md  py-2 px-2 border mt-2'
  placeholder='Email'
  ></input>
  <label className='mt-3'>Industry</label>
        <input name="industry" className='rounded-md  py-2 px-2 border mt-2'
  placeholder='Drop Down'
  ></input>
       <label className='mt-3'>Role</label>
        <input name="role" className='rounded-md  py-2 px-2 border mt-2'
  placeholder='Role'
  ></input>
  <label className='mt-3'>Password</label>
             <input name="password" className='rounded-md py-2 px-2 border mt-2'
  placeholder='Password'
  ></input>
  <label className='mt-3'>Referral</label>
             <input name="referral" className='rounded-md py-2 px-2 border mt-2'
  placeholder='Referral'
  ></input>
  <button type="submit" className='bg-[black] w-fit text-white rounded-md py-2 px-2 mx-auto mt-5'>
   Create Profile
  </button>
        </form>
        
        <a className="underline pt-6" href='/login'>Login</a>
    </div>
    </>
  )
}

export default Create