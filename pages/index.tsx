import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Nav } from '../components/nav'

const Dashboard: NextPage = () => {
  return (
    <div className="flex flex-col h-screen relative">

<h1 className='text-[40px] font-bold p-6 text-center'>4TL Directory</h1>
      <h1 className='text-[30px] font-semibold pl-6 pt-6'>Discover</h1>
      <div className='grid grid-cols-3 gap-5 justify-center p-5 h-fit'>

      <span className='bg-[black] rounded-lg h-[100px]'>Discover</span>
        <span className='bg-[black] rounded-lg h-[100px]'>Connect</span>
        <span className='bg-[black] rounded-lg h-[100px]' >Profile</span>

        <span className='bg-[black] rounded-lg h-[100px]'>Discover</span>
        <span className='bg-[black] rounded-lg h-[100px]'>Connect</span>
        <span className='bg-[black] rounded-lg h-[100px]' >Profile</span>
     
        <span className='bg-[black] rounded-lg h-[100px] '>Discover</span>
        <span className='bg-[black] rounded-lg h-[100px]'>Connect</span>
        <span className='bg-[black] rounded-lg h-[100px]' >Profile</span>

        <span className='bg-[black] rounded-lg h-[100px] '>Discover</span>
        <span className='bg-[black] rounded-lg h-[100px]'>Connect</span>
        <span className='bg-[black] rounded-lg h-[100px]' >Profile</span>

          
      </div>
      <button>Load More</button>
     <Nav/>
    </div>
  )
}

export default Dashboard
