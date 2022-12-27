import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { setEnvironmentData } from "worker_threads";

const Create: NextPage = () => {
  const [file, setFile] = useState("/lady2.jpeg");
  // const [data, setData] = useState("" as any);

  async function handleChange(e: any) {
    const file = URL.createObjectURL(e.target.files[0]);
    const picture = e.target.files[0];
    setFile(file);
    const imgStr: string = String(await converter(picture));
    (document.getElementById("picture") as HTMLInputElement).value = imgStr;
  }

  const converter = (file: any) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  return (
    <div className="p-3">
      <Link href="/login" className="laptop:text-[40px] font-bold">
        4TL Directory
      </Link>
      <div className="flex flex-col h-fit justify-center items-center">
        <img src={file} className="rounded-full h-[75px] w-[75px] mt-6" />
        <form
          id="create"
          action="/api/create"
          method="post"
          className="flex mt-3 flex-col mobile:w-[80%] tablet:w-[60%] laptop:w-[30%]"
        >
          <input
            name="input"
            type="file"
            onChange={handleChange}
            className="w-fit mt-2 ml-4"
          ></input>

          <input
            id="picture"
            name="picture"
            type="text"
            className="hidden"
            required
          ></input>

          <label className="mt-6">Name</label>
          <input
            name="name"
            className="rounded-md  py-2 px-2 border mt-2"
            placeholder="Name"
            required
          ></input>

          <label className="mt-3">Email</label>
          <input
            name="email"
            className="rounded-md  py-2 px-2 border mt-2"
            placeholder="Email"
            required
          ></input>

          <label className="mt-3">Password</label>
          <input
            name="password"
            className="rounded-md py-2 px-2 border mt-2"
            placeholder="Password"
            type="password"
            required
          ></input>

          <label className="mt-3">Company</label>
          <input
            name="company"
            className="rounded-md  py-2 px-2 border mt-2"
            placeholder="Company"
            required
          ></input>

          <label className="mt-3">Industry</label>
          <select
            name="industry"
            className="rounded-md  py-2 px-2 border mt-2"
            placeholder="Drop Down"
            required
          >
          <option value="Artist/Creator">Artist/Creator</option>
          <option value="Finance & Defi">Finance & Defi</option>
          <option value="Developer">Developer</option>
          <option value="Education">Education</option>
          <option value="Entreprenuer">Entreprenuer</option>
          <option value="Business Management">Business Management</option>
          <option value="All of the above">All of the above</option>
          <option value="Still Figuring it out">Still Figuring it out</option>
          <option>Other</option>

          </select>

          <label className="mt-3">Referral</label>
          <input
            name="referral"
            className="rounded-md py-2 px-2 border mt-2"
            placeholder="Referral"
            required
          ></input>
          <button
            type="submit"
            className="bg-[black] w-fit text-white rounded-md py-2 px-2 mx-auto mt-5"
          >
            Create Profile
          </button>
        </form>

        <a className="underline pt-6" href="/">
          Login
        </a>
      </div>
    </div>
  );
};

export default Create;
