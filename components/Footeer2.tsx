import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { BsFacebook, BsTwitter, BsInstagram, BsYoutube } from "react-icons/bs";
import { FaTelegramPlane } from "react-icons/fa";
const Footeer2 = () => {
  return (
    <footer className="bg-white mt-40 h-40 grid place-items-center max-sm:flex-col py-5">
      <section className=" flex justify-between w-[95%] max-lg:flex-wrap max-lg:gap-3 max-sm:flex-col ">
        <div className="text-[.8rem] flex gap-3 text-primary max-lg:w-full max-sm:flex-col max-sm:items-center ">
          <Image src="/images/quidax_logo.svg" width={80} height={100} alt="" />
          <p>©2023 Quidax. All Rights Reserved.</p>
        </div>

        <ul className="flex gap-3 text-[.8rem] max-lg:w-full max-sm:flex-col max-sm:items-center">
          <li>
            <Link href="">Blog</Link>
          </li>
          <li>
            <Link href="">Api</Link>
          </li>
          <li>
            <Link href="">System Status</Link>
          </li>
          <li>
            <Link href="">Privacy Policy</Link>
          </li>
          <li>
            <Link href="">Terms of Use</Link>
          </li>
          <li>
            <Link href="">FAQ</Link>
          </li>
          <li>
            <Link href="">Support</Link>
          </li>
        </ul>
        <ul className="flex text-primary items-center gap-5 max-sm:flex-col">
          <li>
            <BsFacebook size={24} />
          </li>
          <li>
            <BsTwitter size={24} />
          </li>
          <li>
            <BsInstagram size={24} />
          </li>
          <li>
            <FaTelegramPlane size={24} />
          </li>
          <li>
            <BsYoutube size={24} />
          </li>
        </ul>
      </section>
    </footer>
  );
}

export default Footeer2
