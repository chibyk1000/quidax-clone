import Footeer2 from 'components/Footeer2';
import Navbar2 from 'components/Navbar2';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';

const Login = () => {
    const [show, setShow] = useState(false);
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
            Sign In
          </h2>
          <div className="my-3">
            <label htmlFor="">Email Address*</label>
            <input
              type="text"
              placeholder="name@example.com"
              className="block focus:outline-none border focus:border-primary pl-2 w-full h-14 rounded mt-3"
            />
          </div>

          <div className="my-3">
            <label htmlFor="">Password</label>
            <div className="flex items-center">
              <input
                type={show ? "text" : "password"}
                placeholder="Please set your password"
                className="block focus:outline-none border focus:border-primary pl-2 w-[93%] h-14 rounded-tl rounde-bl "
              />
              <button
                type="button"
                onClick={() => setShow(!show)}
                className="text-primary/70 hover:border-primary border h-14 flex items-center px-2 rounded-tr rounded-br"
              >
                {show === true ? (
                  <AiOutlineEyeInvisible size={30} />
                ) : (
                  <AiOutlineEye size={30} />
                )}
              </button>
            </div>
          </div>
          <button
            className="block bg-success w-full py-3 mt-6 rounded  text-white text-lg 
            "
          >
            Create Accounts
          </button>
          <div className="flex justify-between mt-5 items-center">
            <Link href="/reset_password" className="text-secondary font-bold ">
              Forgot Password
            </Link>

            <p className=" text-[.8rem]">
              Not Signed Up yet?{" "}
              <Link href="/signup" className="text-secondary font-bold ">
                Create Account
              </Link>{" "}
            </p>
          </div>
        </form>

        <Footeer2/>
      </div>
    </>
  );
}

export default Login
