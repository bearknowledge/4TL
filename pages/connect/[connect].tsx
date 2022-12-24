import type { NextPage } from "next";
import { useEffect, useState } from "react";
import clientPromise from "../../lib/mongodb";
import type { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const client = await clientPromise;
  const db = client.db("404Direct");

  const profile = await db
    .collection("accounts")
    .find({ industry: "Software Engineering" })
    .toArray();
  console.log(profile);

  return {
    props: {
      profile: JSON.parse(JSON.stringify(profile)),
    },
  };
};

const Industry: NextPage = (profile: any) => {
  const [profData, setProfile] = useState(profile);
  useEffect(() => {
    setProfile(profile);
  }, [profile]);
  console.log(profData);
  return (
    <div className="flex min-h-screen flex-col">
      <div className="p-7">
        <form className="flex flex-row justify-center">
          <input
            onKeyUp={(e) => {
              searchFunction(e);
            }}
            className="rounded-md mobile:w-[90vw] laptop:w-[500px] py-2 px-2 border"
            placeholder="Search for a name, company, or role"
          ></input>
        </form>
        <div className="grid grid-cols-5 grid-rows-1 gap-3 mt-5 ">
          <span className="flex flex-col justify-center items-center">
            <img className="rounded-full" src="/lady3.jpeg" />
            <h1>Judy</h1>
          </span>

          <span className="flex flex-col justify-center items-center">
            <img className="rounded-full" src="/lady3.jpeg" />
            <h1>Judy</h1>
          </span>
          <span className="flex flex-col justify-center items-center">
            <img className="rounded-full" src="/lady3.jpeg" />
            <h1>Judy</h1>
          </span>
          <span className="flex flex-col justify-center items-center">
            <img className="rounded-full" src="/lady3.jpeg" />
            <h1>Judy</h1>
          </span>
          <span className="flex flex-col justify-center items-center">
            <img className="rounded-full" src="/lady3.jpeg" />
            <h1>Judy</h1>
          </span>
        </div>
        <h1 className="text-[30px] font-bold mb-2">Results</h1>
        <div className="grid grid-rows-5 divide-y content-center">
          {profData.profile?.map((el: any, index: any) => {
            return (
              <span className="flex flex-row items-center py-4">
                <img className="rounded-full w-[40px]" src={el?.picture} />
                <span className="pl-3">
                  <h1 className="font-bold">{el?.name}</h1>
                  <h2 className="opacity-60">
                    {el?.role} at {el?.company}
                  </h2>
                </span>
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Industry;
