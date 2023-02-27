import React from 'react'
import Image from 'next/image'
import { RiFacebookFill, RiTwitterFill, RiInstagramLine } from "react-icons/ri";
import List from './List';
const Footer = () => {
    return (
      <section className="bg-primary text-white  min-h-screen p-20  ">
        <div className="flex max-lg:flex-wrap justify-between w-90 mx-auto">
          <div className="max-lg:w-full max-lg:mb-10">
            <Image
              src="/images/quidax_logo_white.svg"
              width={100}
              height={100}
              className="mb-10"
              alt="quidax logo"
            />
            <li className="list-none mb-3 font-semibold">
              Invest in the Future Today <br /> - CeFi, DeFi.
            </li>
            <ul className="flex  gap-4">
              <li className="text-primary bg-white  rounded-full w-fit p-2">
                <RiFacebookFill size={23} />
              </li>
              <li className="text-primary bg-white  rounded-full w-fit p-2">
                {" "}
                <RiTwitterFill size={23} />
              </li>
              <li className="text-primary bg-white  rounded-full w-fit p-2">
                {" "}
                <RiInstagramLine size={23} />
              </li>
            </ul>
          </div>
          <div className="max-lg:my-20 max-md:w-[50%]">
            <header className="text-xl font-bold mb-10">Products</header>
            <List
              list={[
                "USD Savings",
                "QDX Token",
                "QDX Vault",
                "Instant Swap",
                "Order Book",
                "Self-Service Listing",
                "OTC Desk",
                "API",
              ]}
            />
          </div>
          <div className="max-lg:my-20 max-md:w-[50%]">
            <header className="text-xl font-bold mb-10">Learn</header>
            <List
              list={[" Buy Crypto", "Buy Bitcoin in Nigeria", "Buy USDT"]}
            />
          </div>
          <div className="max-lg:my-20 max-md:w-[50%]">
            <header className="text-xl font-bold mb-10">Resources</header>
            <List
              list={["FAQs", "Quidax Support", "Quidax Blog", "Quidax Academy"]}
            />
          </div>
          <div className="max-lg:w-[40%] max-lg:my-20 max-md:w-[50%]">
            <header className="text-xl font-bold mb-10">Company</header>
            <List list={["About Us", "Careers"]} />
          </div>
          <div className="max-lg:w-[40%] max-lg:my-20 max-md:w-[50%]">
            <header className="text-xl font-bold mb-10">Legal</header>
            <List list={["Privacy Policy", "Terms of Use"]} />
          </div>
        </div>
      </section>
    );
}

export default Footer
