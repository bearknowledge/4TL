import type { GetServerSideProps, NextPage } from "next";
import { NextRequest } from "next/server";
import { useEffect, useState } from "react";
import { applyServerSideCookie } from "next-universal-cookie";
import clientPromise from "../../lib/mongodb";

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  applyServerSideCookie(req, res);

  const { Autherized } = req.cookies;

  const client = await clientPromise;
  const db = client.db("404Direct");

  const profile = await db
    .collection("accounts")
    .find({ token: Autherized })
    .toArray();

  return {
    props: {
      profile: JSON.parse(JSON.stringify(profile)),
    },
  };
};

const Profile: NextPage = (profile: any) => {
  const [profData, setProfile] = useState(profile.profile[0]);
  const [Edit, setEdit] = useState(0);

  useEffect(() => {
    setProfile(profile.profile[0]);
  }, [profile]);

  useEffect(() => {}, [Edit]);

  //Put a back button

  return (
    <div className="flex min-h-screen flex-col">
      <a href="/dashboard/100" className="text-[40px] font-bold p-6 w-fit">
        Profile
      </a>
      <div className="flex flex-col justify-center items-center text-xl font-bold">
        <img className="rounded-full h-[200px]" src={profData?.picture} />
        <h1 className="mt-5">{profData?.name}</h1>
        <h2 className="opacity-50">
          {profData?.role} - {profData?.company}
        </h2>
      </div>

      <form
        action="/api/editProfile"
        method="post"
        className="divide-y flex flex-col px-8 pt-4 w-[70vw] mx-auto "
      >
        <div className="flex flex-row items-center justify-between">
          <span>
            <h1 className="my-2">Company</h1>
            {Edit === 1 ? (
              <>
                <input
                  name="company"
                  className="rounded-md  py-2 px-2 border mb-2"
                  placeholder="Change your company"
                ></input>
              </>
            ) : (
              <h2 className="opacity-50 pb-2">{profData?.company}</h2>
            )}
          </span>
          <span>
            {Edit === 1 ? (
              <div className="flex flex-row">
                <button
                  className="mr-3"
                  onClick={() => {
                    setEdit(0);
                  }}
                >
                  <img className="w-5" src="/x.svg" />
                </button>

                <button type="submit">
                  <img className="w-5" src="/check.svg" />
                </button>
              </div>
            ) : (
              <button
                onClick={() => {
                  setEdit(1);
                }}
              >
                <img className="w-5" src="/edit.svg" />
              </button>
            )}
          </span>
        </div>

        <div className="flex flex-row items-center justify-between">
          <span>
            <h1 className="my-2">Industry</h1>
            {Edit === 2 ? (
              <>
                <input
                  name="industry"
                  className="rounded-md  py-2 px-2 border mb-2"
                  placeholder="Change your industry"
                ></input>
              </>
            ) : (
              <h2 className="opacity-50 pb-2">{profData?.industry}</h2>
            )}
          </span>

          <span>
            {Edit === 2 ? (
              <div className="flex flex-row">
                <button
                  className="mr-3"
                  onClick={() => {
                    setEdit(0);
                  }}
                >
                  <img className="w-5" src="/x.svg" />
                </button>

                <button type="submit">
                  <img className="w-5" src="/check.svg" />
                </button>
              </div>
            ) : (
              <button
                onClick={() => {
                  setEdit(2);
                }}
              >
                <img className="w-5" src="/edit.svg" />
              </button>
            )}
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
            {Edit === 3 ? (
              <>
                <input
                  name="email"
                  className="rounded-md  py-2 px-2 border mb-2"
                  placeholder="Change your email"
                ></input>
              </>
            ) : (
              <h2 className="opacity-50 pb-2">{profData?.email}</h2>
            )}
          </span>

          <span>
            {Edit === 3 ? (
              <div className="flex flex-row">
                <button
                  className="mr-3"
                  onClick={() => {
                    setEdit(0);
                  }}
                >
                  <img className="w-5" src="/x.svg" />
                </button>

                <button type="submit">
                  <img className="w-5" src="/check.svg" />
                </button>
              </div>
            ) : (
              <button
                onClick={() => {
                  setEdit(3);
                }}
              >
                <img className="w-5" src="/edit.svg" />
              </button>
            )}
          </span>
        </div>

        <div>
          <span>
            <h1 className="my-2">Referral Code</h1>
            <h2 className="opacity-50 pb-2">{profData?.referral}</h2>
          </span>
        </div>

        <div className="flex flex-row items-center justify-between">
          <span>
            <h1 className="my-2">LinkedIn</h1>
            {Edit === 5 ? (
              <>
                <input
                  name="linkedin"
                  className="rounded-md  py-2 px-2 border mb-2"
                  placeholder="Add your Linkedin"
                ></input>
              </>
            ) : profData.linkedin == undefined ? (
              <h2 className="opacity-50 pb-2">Add your LinkedIn</h2>
            ) : (
              <h2 className="opacity-50 pb-2">{profData?.linkedin}</h2>
            )}
          </span>

          <span>
            {Edit === 5 ? (
              <div className="flex flex-row">
                <button
                  className="mr-3"
                  onClick={() => {
                    setEdit(0);
                  }}
                >
                  <img className="w-5" src="/x.svg" />
                </button>

                <button type="submit">
                  <img className="w-5" src="/check.svg" />
                </button>
              </div>
            ) : (
              <button
                onClick={() => {
                  setEdit(5);
                }}
              >
                <img className="w-5" src="/edit.svg" />
              </button>
            )}
          </span>
        </div>

        <div className="flex flex-row items-center justify-between">
          <span>
            <h1 className="my-2">Role</h1>
            {Edit === 6 ? (
              <>
                <input
                  name="role"
                  className="rounded-md  py-2 px-2 border mb-2"
                  placeholder="Add your role"
                ></input>
              </>
            ) : profData.role == undefined ? (
              <h2 className="opacity-50 pb-2">Add your role</h2>
            ) : (
              <h2 className="opacity-50 pb-2">{profData?.role}</h2>
            )}
          </span>

          <span>
            {Edit === 6 ? (
              <div className="flex flex-row">
                <button
                  className="mr-3"
                  onClick={() => {
                    setEdit(0);
                  }}
                >
                  <img className="w-5" src="/x.svg" />
                </button>

                <button type="submit">
                  <img className="w-5" src="/check.svg" />
                </button>
              </div>
            ) : (
              <button
                onClick={() => {
                  setEdit(6);
                }}
              >
                <img className="w-5" src="/edit.svg" />
              </button>
            )}
          </span>
        </div>

        <div className="flex flex-row items-center justify-between">
          <span>
            <h1 className="my-2">Telegram</h1>
            {Edit === 7 ? (
              <>
                <input
                  name="telegram"
                  className="rounded-md  py-2 px-2 border mb-2"
                  placeholder="Add your telegram"
                ></input>
              </>
            ) : profData.telegram == undefined ? (
              <h2 className="opacity-50 pb-2">Add your telegram</h2>
            ) : (
              <h2 className="opacity-50 pb-2">{profData?.telegram}</h2>
            )}
          </span>

          <span>
            {Edit === 7 ? (
              <div className="flex flex-row">
                <button
                  className="mr-3"
                  onClick={() => {
                    setEdit(0);
                  }}
                >
                  <img className="w-5" src="/x.svg" />
                </button>

                <button type="submit">
                  <img className="w-5" src="/check.svg" />
                </button>
              </div>
            ) : (
              <button
                onClick={() => {
                  setEdit(7);
                }}
              >
                <img className="w-5" src="/edit.svg" />
              </button>
            )}
          </span>
        </div>
      </form>
    </div>
  );
};

export default Profile;
