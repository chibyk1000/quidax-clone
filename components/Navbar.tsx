import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {useState}  from 'react'
import { FaBars } from 'react-icons/fa'
import { HiXMark } from "react-icons/hi2";
const Navbar = () => {
  const [collapse, setCollapse] = useState(true)
  const handleCollapse = () => setCollapse(!collapse)
  return (
    <nav className="flex justify-between z-10 bg-white fixed top-0 w-full h-20 text-primary py-5 items-center px-[4rem] ">
      <Link href="">
        {" "}
        <Image
          src="/images/quidax_logo.svg"
          alt="logo"
          width={100}
          height={100}
        />{" "}
      </Link>

      <div
        className={`lg:w-[75%] max-lg:absolute top-20 max-lg:w-full  lg:items-center flex  max-lg:flex-col lg:justify-between gap-3 bg-white pb-6 max-lg:left-0 max-lg:pl-16 ${
          collapse ? "max-lg:hidden" : "lg:flex"
        } `}
      >
        <ul className=" flex max-lg:flex-col  w-1/3 justify-between font-semibold max-lg:gap-5">
          <li>
            <Link href="">Product</Link>
          </li>
          <li>
            <Link href="">Resources</Link>
          </li>
          <li>
            <Link href="">Company</Link>
          </li>
        </ul>

        <div className="flex max-lg:flex-col font-semibold lg:w-[35%] gap-5 max-lg:justify-between lg:items-center">
          <Link href="" className="   ">
            Sign In
          </Link>
          <Link
            href=""
            className={`bg-primary text-white py-3 max-lg:w-60 px-10 rounded-lg hover:bg-green-600`}
          >
            Get started
          </Link>
        </div>
      </div>
      <div className="max-lg:flex hidden font-semibold lg:w-[35%] gap-5 justify-between items-center ">
        <Link
          href=""
          className={`bg-primary text-white py-3 px-10 rounded-lg hover:bg-green-600 ${
            collapse ? "" : "hidden"
          }`}
        >
          Get started
        </Link>
        <button className="max-lg:block hidden " onClick={handleCollapse}>
          <FaBars size={24} className={collapse ? `block` : "hidden"} />
          <HiXMark size={34} className={collapse ? `hidden ` : "block"} />
        </button>
      </div>
    </nav>
  );
}

export default Navbar
