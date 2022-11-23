import type { GetServerSideProps, NextPage } from "next";
import { NextRequest } from "next/server";
import { useEffect, useState } from "react";
import { applyServerSideCookie } from "next-universal-cookie";
import clientPromise from "../../lib/mongodb";

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  applyServerSideCookie(req, res);

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

const Profile: NextPage = (profile: any) => {
const [profData, setProfile] = useState(profile.profile[0])



useEffect(() => {
  setProfile(profile.profile[0])
}, [profile])

  return (
    <div className="flex min-h-screen flex-col">
      <a href="/dashboard/100" className="text-[40px] font-bold p-6 w-fit">Profile</a>
      <div className="flex flex-col justify-center items-center text-xl font-bold">
        <img className="rounded-full h-[200px]" src={profData?.picture} />
        <h1 className="mt-5">{profData?.name}</h1>
        <h2 className="opacity-50">Founder - Xsauce</h2>
      </div>

      <div className="divide-y flex flex-col px-8 pt-4">
          <div>
            <h1 className="my-2">Role</h1>
            <h2 className="opacity-50">{profData?.role}</h2>
          </div>

          <div >
            <h1 className="my-2">Industry</h1>
            <h2 className="opacity-50">{profData?.industry}</h2>
          </div>


        <div>
          <h1 className="my-2">Email</h1>
          <h2 className="opacity-50">{profData?.email}</h2>
        </div>


        <div>
          <h1 className=" my-2">Referral Code</h1>
          <h2 className="opacity-50">{profData?.referral}</h2>
        </div>

        <div>
          <h1 className=" my-2">Telegram</h1>
          <h2 className="opacity-50">@zmill28</h2>
        </div>
      </div>
    </div>
  );
};

export default Profile;
