import React, { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import DropDown from "components/DropDown";
import Link from "next/link";
import Navbar2 from "components/Navbar2";
import Footeer2 from "components/Footeer2";
export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch("https://restcountries.com/v3.1/all");
  const dataC = await res.json();
  const resD = await fetch("http://country.io/phone.json");
  const dataD = await resD.json();
  const data = [dataC, dataD];
  return {
    props: {
      data,
    },
  };
};
interface Country {
  name: {
    common: string;
  };
}

type PageProps = InferGetServerSidePropsType<typeof getServerSideProps>;
const Signup = ({ data }: PageProps) => {
  const [selected, setSelected] = useState(
    "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_the_Taliban.svg/320px-Flag_of_the_Taliban.svg.png"
  );
  const [show, setShow] = useState(false);

  const sortedData = [...data[0]].sort((a, b) => {
    if (a.name.common < b.name.common) {
      return -1;
    }
    if (a.name.common > b.name.common) {
      return 1;
    }
    return 0;
  });

  try {
  } catch (err) {}
  return (
    <>
      <Head>
        <title>Sign Up</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="bg-primary/5 min-h-screen pt-40">
        <Navbar2 />
        <div className="">
          <form
            action=""
            className="bg-white w-4/5  lg:w-1/2 mx-auto  text-primary p-10 "
          >
            <Image
              src="/images/avatar-neutral-add-2.png"
              width={100}
              height={100}
              alt="avatar"
              className="mx-auto"
            />
            <h2 className="text-center text-3xl  border-b border-dotted w-[80%] mx-auto pb-10 mb-10">
              Create your account
            </h2>
            <div>
              <label htmlFor="country" className="text-center text-sm">
                Country
              </label>
              <select
                name=""
                id=""
                className="block border focus:outline-none h-14 w-full  border-primary/10 focus:border-primary/50 mt-3 rounded px-5"
              >
                {sortedData.map((country) => (
                  <option
                    key={country.name.common}
                    value={country.name.common}
                    className="font-bold my-20"
                  >
                    {country.name.common}
                  </option>
                ))}
              </select>

              <div className="my-5">
                <label htmlFor="">Username</label>
                <div className="flex mt-3">
                  <div className="bg-primary/5 w-[8%]  flex justify-center items-center font-bold">
                    Q
                  </div>
                  <input
                    type="text"
                    placeholder="Username"
                    className="border-primary/10 border block w-[92%] pl-3 h-14 rounded-tr rounded-br focus:border-primary/50 focus:outline-none"
                  />
                </div>
                <p className="text-[.8rem] text-primary/90 mt-3">
                  Q will be added as the first letter of the username you have
                  provided (example: Qjohn)
                </p>
              </div>

              <section className="grid grid-cols-2 gap-10">
                <div>
                  <label htmlFor="">First Name *</label>
                  <input
                    type="text"
                    placeholder="First Name"
                    className="block focus:outline-none border focus:border-primary pl-2 w-full h-14 mt-3 rounded"
                  />
                </div>
                <div>
                  <label htmlFor="">Last Name *</label>
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="block focus:outline-none border focus:border-primary pl-2 w-full h-14 rounded mt-3"
                  />
                </div>
              </section>
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
                    {show ? (
                      <AiOutlineEyeInvisible size={30} />
                    ) : (
                      <AiOutlineEye size={30} />
                    )}
                  </button>
                </div>
              </div>
              <div className="my-3">
                <label htmlFor="">Phone Number</label>
                <div className="flex items-center gap-2 focus:border-primary border p-1 relative">
                  <DropDown
                    list={sortedData}
                    selected={selected}
                    onSelect={setSelected}
                    codes={data[1]}
                  />
                  <input
                    type="tel"
                    placeholder="(201) 555-0123"
                    className="block focus:outline-none ml-16 placeholder:text-primary/70  h-8 pl-2 w-full  rounded mt-3"
                  />
                </div>
              </div>
            </div>

            <p className="text-[.85rem] my-6 leading-8">
              By clicking the 'Create Account' button below, you agree to the
              Quidax{" "}
              <span className="text-secondary font-bold">Terms of Use </span>{" "}
              and{" "}
              <span className="text-secondary font-bold">Privacy Policy</span> .
            </p>

            <button
              className="block bg-success w-full py-3 rounded  text-white text-lg 
            "
            >
              Create Accounts
            </button>

            <p className="mt-5 text-[.8rem]">
              Already have an account?{" "}
              <Link href="/signin" className="text-secondary font-bold ">
                Sign In
              </Link>{" "}
            </p>
          </form>
        </div>
<Footeer2/>
        
      </div>
    </>
  );
};

export default Signup;
