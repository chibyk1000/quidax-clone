import Footeer2 from "components/Footeer2";
import Navbar2 from "components/Navbar2";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";


const Reset = () => {

  return (
    <>
      <Head>
        <title>Sign In</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-primary/5 min-h-screen pt-40">
        <Navbar2 />
        <form
          action=""
          className="bg-white w-4/5  lg:w-1/2 mx-auto  text-primary p-10 "
        >
          <Image
            src="/images/avatar-neutral-lock-2.png"
            width={100}
            height={100}
            alt="avatar"
            className="mx-auto"
          />
          <h2 className="text-center text-3xl  border-b border-dotted w-[80%] mx-auto pb-10 mb-10">
            Recover my password
          </h2>

          <p className="text-center text-[.8rem] my-7">
            Enter the email address for your Quidax account and we will send a
            reset link to your inbox. Follow the link to reset your password.
          </p>
          <div className="my-3">
            <label htmlFor="">Email Address*</label>
            <input
              type="text"
              placeholder="name@example.com"
              className="block focus:outline-none border focus:border-primary pl-2 w-full h-14 rounded mt-3"
            />
          </div>

          <div className="flex justify-between mt-5 items-center gap-2 ">
            <Link
              href="/reset_password"
              className="border block py-3 w-2/5 text-center font-bold "
            >
              Cancel
            </Link>

            <button
              className="block bg-success w-3/5 py-3 rounded  text-white text-lg 
            "
            >
              Recover my password
            </button>
          </div>
        </form>

        <Footeer2 />
      </div>
    </>
  );
};

export default Reset;