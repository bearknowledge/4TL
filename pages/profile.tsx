import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Nav } from '../components/nav'

const Profile: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <h1 className='text-[40px] font-bold p-6'>Profile</h1>
      <div className='flex flex-col justify-center items-center text-xl font-bold'>
        <img className="rounded-full h-[200px]" src='placeholder.svg'/>
        <h1 className='mt-5'>Zach Miller</h1>
        <h2 className='opacity-50'>Founder - Xsauce</h2>
      </div>

      <div className='divide-y flex flex-col px-8 pt-4'>
        <div>
        <h1 className='opacity-50'>Name</h1>
        <h2 className='my-2'>Zach Miller</h2>
        </div>

        <div className='flex flex-row my-2 '>
          <div>
          <h1 className='my-2'>Connections</h1>
        <h2 className='opacity-50'>15</h2>
          </div>


          <div className='ml-10'>
          <h1 className='my-2'>Interest</h1>
        <h2 className='opacity-50'>NFTS, Derivatives</h2>
          </div>
        </div>

        <div>
        <h1 className='opacity-50 my-2'>Email</h1>
        <h2 className='my-2'>Xsauce Inc</h2>
        </div>

        <div>
        <h1 className='opacity-50 my-2'>Telegram</h1>
        <h2 className='my-2'>@zmill28</h2>
        </div>

        

      </div>

      

      <Nav/>
    </div>
  )
}

export default Profile
