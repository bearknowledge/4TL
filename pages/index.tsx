import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import  Nav from "./api/search";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import clientPromise from "../lib/mongodb";

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const { Autherized } = req.cookies;

  if (Autherized != undefined) {
    const client = await clientPromise;
    const db = client.db("404Direct");

    const profile = await db
      .collection("accounts")
      .find({ token: Autherized })
      .toArray();

    return {
      props: {
        token: JSON.parse(JSON.stringify(profile)),
      },
    };
  } else {
    return {
      props: {
        token: "none",
      },
    };
  }
};

const Login: NextPage = (token: any) => {
  // const router = useRouter()

  // useEffect(() => {
  //   if (token.token == "none" ) {
  //     return;
  //   } else {
  //   console.log(token)
  //   router.push("/dashboard/" + token.token[0].referral)
  //   }
  // }, [token, router.isReady])

  return (
    <div className="flex flex-col h-screen w-screen justify-center items-center">
      <form
        action="/api/login"
        method="post"
        className="flex flex-col mobile:w-[80%] tablet:w-[60%] laptop:w-[30%]"
      >
        <h1 className="text-2xl font-bold">4TL Directory</h1>
        <label className="mt-6">Email</label>
        <input
          name="email"
          className="rounded-md  py-2 px-2 border mt-2"
          placeholder="Email"
        ></input>
        <label className="mt-3">Password</label>
        <input
          name="password"
          className="rounded-md py-2 px-2 border mt-2"
          placeholder="Password"
        ></input>
        <button
          type="submit"
          className="bg-[black] w-fit text-white rounded-md py-2 px-2 mx-auto mt-5"
        >
          Sign In
        </button>
      </form>

      <a className="underline pt-6" href="/create">
        Create Profile
      </a>
    </div>
  );
};

export default Login;
