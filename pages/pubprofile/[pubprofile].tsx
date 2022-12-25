import type { GetServerSideProps, NextPage } from "next";
import { NextRequest } from "next/server";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const PubProfile: NextPage = () => {
  const router = useRouter();
  const [searchResult, setSearchResult] = useState([] as any);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const referral: string = String(router.query.pubprofile);

    const getProfile = (referral: string) => {
      fetch("/api/public", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ referral: referral }),
      })
        .then((response) => response.json())
        .then((data) => {
          setSearchResult(data[0]);
          setLoading(false)
        });
    };
    getProfile(referral);
  }, [router.isReady]);

  const profData = searchResult;

  return (
    <div className="flex min-h-screen flex-col ">
      <a href="/dashboard/100" className="text-[40px] font-bold p-6 w-fit">
        Profile
      </a>
      <div className="flex flex-col justify-center items-center text-xl font-bold">
        {/* Add image edit as well  // First CLick shows "view full size", or "change image" buttons*/}
        <img className={"rounded-full h-[200px]"} src={profData?.picture} />
        <h1 className="mt-5">{profData?.name}</h1>
        <h2 className="opacity-50">
          {profData?.role} - {profData?.company}
        </h2>
      </div>
      
      <div
        className="divide-y flex flex-col px-8 pt-4 mobile:w-full laptop:w-[70vw] laptop:mx-auto pb-12 "
      >
        <div className="flex flex-row items-center justify-between">
          <span>
            <h1 className="my-2">Company</h1>
            <h2 className="opacity-50 pb-2">{profData?.company}</h2>
          </span>
        </div>

        <div className="flex flex-row items-center justify-between">
          <span>
            <h1 className="my-2">Industry</h1>

            <h2 className="opacity-50 pb-2">{profData?.industry}</h2>
          </span>
        </div>

        {/* Add In these 2. They are accessory but not essential to make the app function */}
        {/* <label className='mt-3'>LinkedIn</label>
        <input name="linkedin" className='rounded-md  py-2 px-2 border mt-2'
  placeholder='LinkedIn'
  ></input> */}

        <div className="flex flex-row items-center justify-between">
          <span>
            <h1 className="my-2">Email</h1>

            <h2 className="opacity-50 pb-2">{profData?.email}</h2>
          </span>
        </div>

        <div className="flex flex-row items-center justify-between">
          <span>
            <h1 className="my-2">LinkedIn</h1>
            <h2 className="opacity-50 pb-2">{profData?.linkedin}</h2>
          </span>
        </div>

        <div className="flex flex-row items-center justify-between">
          <span>
            <h1 className="my-2">Role</h1>

            <h2 className="opacity-50 pb-2">{profData?.role}</h2>
          </span>
        </div>

        <div className="flex flex-row items-center justify-between">
          <span>
            <h1 className="my-2">Telegram</h1>

            <h2 className="opacity-50 pb-2">{profData?.telegram}</h2>
          </span>
        </div>
      </div>
    </div> 
  );
};

export default PubProfile;
