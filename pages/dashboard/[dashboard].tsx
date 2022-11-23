import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Nav } from "../../components/nav";
import clientPromise from "../../lib/mongodb";
import { useState, useEffect } from "react";



export const getServerSideProps: GetServerSideProps = async ({req}) => {

  const {Autherized} = req.cookies

  const client = await clientPromise;
  const db = client.db("404Direct");

  const profile = await db
    .collection("accounts")
    .find({ token: Autherized })
    .toArray();

  return {
    props: {
      profile: JSON.parse(JSON.stringify(profile))
    },
  };
};




const Dashboard: NextPage = (profile: any) => {

  function randomString(length: number, chars: any) {
    var result = '';
    for (var i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
    return result;
  }
  
  const rString: String = randomString(16, '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ');
  
  const href: string = "/profile/" + rString
  
  const [profData, setProfile] = useState(profile.profile[0])

useEffect(() => {
  setProfile(profile.profile[0])
}, [profile])

  return (
    <div className="flex flex-col mobile:h-screen laptop:h-fit relative ">
   
    
      <span className="bg-[url('/man1.jpeg')] bg-center bg-contain  mobile:h-[300px] laptop:h-[375px] laptop:full relative flex flex-col justify-around">
   
      <div className="flex flex-row mobile:w-[90vw] mobile:mx-auto items-center justify-between">
      <h1 className="font-bold laptop:text-[40px] text-white">4TL Directory</h1>
<div className="flex flex-row items-center">
<a href={href}>
<img className="w-[40px] h-[40px] rounded-full" src={profData?.picture}></img>
</a>
<form  method="post" action="/api/logout">
      <button type="submit" className="ml-3 bg-[black] w-[70px] h-[35px] text-white justify-center items-center flex rounded-lg"> Logout</button>
</form>
</div>
      </div>
      <form className="flex flex-row justify-center">
        <input
          className="rounded-md mobile:w-[90vw] laptop:w-[500px] py-2 px-2 border"
          placeholder="Search for a name, company, or role"
        ></input>
      </form>
          <span></span>
          <h1 className="absolute left-[6%] bottom-[10%] text-white font-semibold mobile:text-[10px] laptop:text-lg">
          Event 1
          </h1>
         
          </span>

       
     <div className="p-7">
      <h1 className="text-[30px] font-semibold  mt-3">Discover</h1>
      <div className="grid grid-cols-3 gap-y-7 gap-x-3 justify-center h-fit w-full mt-3">
  {/*  Put Images as background  */}
        <span className="bg-[black] rounded-lg mobile:h-[100px] mobile:w-[100px] tablet:h-[150px] tablet:w-full laptop:h-[200px] relative flex flex-row justify-center">
          <h1 className="absolute bottom-[10%] text-white font-semibold mobile:text-[10px] laptop:text-lg">
          Artist/Creator
          </h1></span>
          <span className="bg-[black] rounded-lg mobile:h-[100px] mobile:w-[100px] tablet:h-[150px] tablet:w-full laptop:h-[200px]  relative flex flex-row justify-center">
          <h1 className="absolute bottom-[10%] text-white font-semibold mobile:text-[10px] laptop:text-lg">
          Developer
          </h1></span>
          <span className="bg-[black] rounded-lg mobile:h-[100px] mobile:w-[100px] tablet:h-[150px] tablet:w-full laptop:h-[200px]  relative flex flex-row justify-center">
        
          <h1 className="absolute bottom-[10%] text-white font-semibold mobile:text-[10px]  laptop:text-lg">
          Education
          </h1></span>

          <span className="bg-[black] rounded-lg mobile:h-[100px] mobile:w-[100px] tablet:h-[150px] tablet:w-full laptop:h-[200px]  relative flex flex-row justify-center">
        
          <h1 className="absolute bottom-[10%] text-white font-semibold mobile:text-[10px] laptop:text-lg">
          Finance & Defi

          </h1></span>
          <span className="bg-[black] rounded-lg mobile:h-[100px] mobile:w-[100px] tablet:h-[150px] tablet:w-full laptop:h-[200px]  relative flex flex-row justify-center">
        
          <h1 className="absolute bottom-[10%] text-white font-semibold mobile:text-[10px] laptop:text-lg">
          Entrepreneur

          </h1></span>
          <span className="bg-[black] rounded-lg mobile:h-[100px] mobile:w-[100px] tablet:h-[150px] tablet:w-full laptop:h-[200px]  relative flex flex-row justify-center">
        
          <h1 className="absolute bottom-[10%] text-center text-white font-semibold mobile:text-[10px] laptop:text-lg">
          Business Management

          </h1></span>

          <span className="bg-[black] rounded-lg mobile:h-[100px] mobile:w-[100px] tablet:h-[150px] tablet:w-full laptop:h-[200px]  relative flex flex-row justify-center">
        
          <h1 className="absolute bottom-[10%] text-white font-semibold mobile:text-[10px] laptop:text-lg">
          All of the above
          </h1></span>
          <span className="bg-[black] rounded-lg mobile:h-[100px] mobile:w-[100px] tablet:h-[150px] tablet:w-full laptop:h-[200px]  relative flex flex-row justify-center">
        
          <h1 className="absolute bottom-[10%] text-white font-semibold mobile:text-[10px] laptop:text-lg">
          Still figuring it out
          </h1></span>
          <span className="bg-[black] rounded-lg mobile:h-[100px] mobile:w-[100px] tablet:h-[150px] tablet:w-full laptop:h-[200px]  relative flex flex-row justify-center">
        
          <h1 className="absolute bottom-[10%] text-white font-semibold mobile:text-[10px] laptop:text-lg">
          Other
          </h1></span>
      </div>
    </div>
    </div>
  );
};

export default Dashboard;
