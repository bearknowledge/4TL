import type { NextPage } from "next";
import { useEffect, useState } from "react";
import { Nav } from "../components/nav";


const Swipe: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="p-7">
        <input
          className="w-full text-right border border-black rounded-full p-2"
          placeholder="Search"
        ></input>
        <div className="grid grid-cols-5 grid-rows-1 gap-3 mt-5 ">
          <span className="flex flex-col justify-center items-center">
            <img className="rounded-full" src="lady3.jpeg" />
            <h1>Judy</h1>
          </span>
          <span className="flex flex-col justify-center items-center">
            <img className="rounded-full" src="lady3.jpeg" />
            <h1>Judy</h1>
          </span>
          <span className="flex flex-col justify-center items-center">
            <img className="rounded-full" src="lady3.jpeg" />
            <h1>Judy</h1>
          </span>
          <span className="flex flex-col justify-center items-center">
            <img className="rounded-full" src="lady3.jpeg" />
            <h1>Judy</h1>
          </span>
          <span className="flex flex-col justify-center items-center">
            <img className="rounded-full" src="lady3.jpeg" />
            <h1>Judy</h1>
          </span>
        </div>
        <h1 className="text-[30px] font-bold mb-2">Results</h1>
        <div className="grid grid-rows-5 gap-y-4 divide-y content-center">
          <span className="flex flex-row items-center">
            <img className="rounded-full w-[40px]" src="lady3.jpeg" />
            <span className="pl-3">
              <h1 className="font-bold">Judy</h1>
              <h2 className="opacity-60">Project Manager @ Cox</h2>
            </span>
          </span>
          <span className="flex flex-row items-center pt-3">
            <img className="rounded-full w-[40px]" src="lady3.jpeg" />
            <span className="pl-3">
              <h1 className="font-bold">Judy</h1>
              <h2 className="opacity-60">Project Manager @ Cox</h2>
            </span>
          </span>
          <span className="flex flex-row items-center pt-3">
            <img className="rounded-full w-[40px]" src="lady3.jpeg" />
            <span className="pl-3">
              <h1 className="font-bold">Judy</h1>
              <h2 className="opacity-60">Project Manager @ Cox</h2>
            </span>
          </span>
          <span className="flex flex-row items-center pt-3">
            <img className="rounded-full w-[40px]" src="lady3.jpeg" />
            <span className="pl-3">
              <h1 className="font-bold">Judy</h1>
              <h2 className="opacity-60">Project Manager @ Cox</h2>
            </span>
          </span>
          <span className="flex flex-row items-center pt-3">
            <img className="rounded-full w-[40px]" src="lady3.jpeg" />
            <span className="pl-3">
              <h1 className="font-bold">Judy</h1>
              <h2 className="opacity-60">Project Manager @ Cox</h2>
            </span>
          </span>
        </div>
      </div>
      <Nav />
    </div>
  );
};

export default Swipe;
