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
    <div className="flex flex-col h-screen relative p-6">
    <div className="flex flex-row w-full items-center justify-between">
      <h1 className="text-[40px] font-bold">4TL Directory</h1>
<div className="flex flex-row items-center">
<a href={href}>
<img className="w-[40px] h-[40px] rounded-full" src={profData?.picture}></img>
</a>
<form method="post" action="/api/logout">
      <button type="submit" className="ml-3 bg-[black] w-[70px] h-[35px] text-white justify-center items-center flex rounded-lg"> Logout</button>
</form>
</div>
      </div>
    
      <form>
        <input
          className="rounded-md w-1/3 py-2 px-2 border"
          placeholder="Search for a name, company, or role"
        ></input>
      </form>
      <h1 className="text-[30px] font-semibold  pt-6">Discover</h1>
      <div className="grid grid-cols-3 gap-5 justify-center h-fit w-full">
  {/*  Put Images as background  */}
        <span className="bg-[black] rounded-lg h-[200px] relative flex flex-row justify-center">
          <h1 className="absolute bottom-[10%] text-white font-semibold text-lg">
          Artist/Creator
          </h1></span>
          <span className="bg-[black] rounded-lg h-[200px] relative flex flex-row justify-center">
          <h1 className="absolute bottom-[10%] text-white font-semibold text-lg">
          Developer
          </h1></span>
          <span className="bg-[black] rounded-lg h-[200px] relative flex flex-row justify-center">
          <h1 className="absolute bottom-[10%] text-white font-semibold text-lg">
          Education
          </h1></span>

          <span className="bg-[black] rounded-lg h-[200px] relative flex flex-row justify-center">
          <h1 className="absolute bottom-[10%] text-white font-semibold text-lg">
          Finance & Defi

          </h1></span>
          <span className="bg-[black] rounded-lg h-[200px] relative flex flex-row justify-center">
          <h1 className="absolute bottom-[10%] text-white font-semibold text-lg">
          Entrepreneur

          </h1></span>
          <span className="bg-[black] rounded-lg h-[200px] relative flex flex-row justify-center">
          <h1 className="absolute bottom-[10%] text-white font-semibold text-lg">
          Business Management

          </h1></span>

          <span className="bg-[black] rounded-lg h-[200px] relative flex flex-row justify-center">
          <h1 className="absolute bottom-[10%] text-white font-semibold text-lg">
          All of the above
          </h1></span>
          <span className="bg-[black] rounded-lg h-[200px] relative flex flex-row justify-center">
          <h1 className="absolute bottom-[10%] text-white font-semibold text-lg">
          Still figuring it out
          </h1></span>
          <span className="bg-[black] rounded-lg h-[200px] relative flex flex-row justify-center">
          <h1 className="absolute bottom-[10%] text-white font-semibold text-lg">
          Other
          </h1></span>
      </div>
    </div>
  );
};

export default Dashboard;
