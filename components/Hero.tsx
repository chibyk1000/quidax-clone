import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const Hero = () => {
  return (
    <section className="min-h-screen grid pt-40 pb-5">
      <div className="lg:grid grid-cols-2 w-[90%] mx-auto  gap-20">
        <div className="">
          <h2 className="max-lg:text-center text-6xl font-bold text-primary leading-[5rem]">
            Buy and sell <br /> crypto with ease
          </h2>
          <p className="text-primary my-10 leading-[2rem] font-semibold">
            Quidax makes it simple to buy and sell cryptocurrency. <br /> Join
            the squad and get started today.
          </p>
          <Link
            href="/"
            className="bg-primary text-white py-3 px-10 rounded-lg hover:bg-green-600"
          >
            Join the Squad
          </Link>
          <p className='text-primary my-8 font-semibold'>DOWNLOAD ON</p>
          <div className="text-secondary flex items-center gap-5">
             
            <div  className='flex items-center gap-3 font-semibold'>
              <svg
                width="1em"
                height="1em"
                viewBox="0 0 16 17"
                fill="#EC5DA0"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path d="M14.129 6.847l-1.91-1.035-2.302 2.65 2.346 2.703 1.865-1.01c.779-.42 1.206-1.01 1.206-1.655s-.426-1.231-1.205-1.653zM1.753 16.5l6.986-8.039L1.842.511C1.82.508 1.797.5 1.775.5.713.5 0 1.308 0 2.513V14.49c.002 1.194.706 1.998 1.753 2.01zM11.416 5.38l-7.86-4.253L9.33 7.782l2.087-2.401zM9.328 9.139l-5.925 6.819 8.058-4.36-2.133-2.46z"></path>
              </svg>
              PlayStore
            </div>
            <div className='flex items-center gap-3 font-semibold'>
              <svg
                width="1em"
                height="1em"
                viewBox="0 0 12 14"
                fill="#EC5DA0"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path d="M7.919 2.277c.395-.483.685-1.133.685-1.801 0-.088-.008-.185-.026-.255-.65.026-1.432.43-1.898.975-.36.422-.703 1.081-.703 1.75 0 .096.017.193.026.228a.907.907 0 00.176.017c.58 0 1.31-.386 1.74-.914zm.457 1.055c-.967 0-1.758.589-2.268.589-.536 0-1.239-.554-2.091-.554C2.417 3.367.79 4.694.79 7.19c0 1.565.598 3.208 1.345 4.272.633.896 1.195 1.635 1.995 1.635s1.151-.528 2.136-.528c1.002 0 1.23.51 2.109.51.87 0 1.45-.8 2.004-1.582a6.79 6.79 0 00.879-1.828c-.053-.018-1.723-.694-1.723-2.61 0-1.653 1.319-2.391 1.389-2.444-.862-1.248-2.18-1.283-2.549-1.283z"></path>
              </svg>
              App Store
            </div>
          </div>
        </div>
        <div className="">
          <Image
            src="/images/hero_img.png"
            alt="hero image"
            width={500}
            height={100}
          />
        </div>
      </div>
    </section>
  );
}

export default Hero
