import {useState} from 'react'
import Image from 'next/image'
import Link from 'next/link'
const Navbar2 = () => {
    const [collapse, setCollapse] = useState(true)
  return (
    <nav className="bg-primary z-10 fixed  top-0 w-full h-20 flex items-center justify-between px-5">
      <Link href="">
        {" "}
        <Image
          src="/images/quidax_logo_white.svg"
          width={100}
          height={100}
          alt=""
        />
      </Link>
      <ul className={`flex text-white max-lg:absolute max-lg:top-20 max-lg:bg-primary max-lg:left-0 max-lg:w-full max-lg:h-80 max-lg:flex-col max-lg:pb-10  text-[.85rem] justify-between w-4/6  nav_link ${collapse?'max-lg:collapse':''}  `}>
        <li>
          <Link href="" className="hover:bg-primary-light rounded py-4 px-2">
            QDX Token
          </Link>{" "}
        </li>
        <li>
          <Link href="" className="hover:bg-primary-light rounded py-4 px-2">
            Instant Buy/Sell
          </Link>
        </li>
        <li>
          <Link href="" className="hover:bg-primary-light rounded py-4 px-2">
            Order Book
          </Link>
        </li>
        <li>
          <Link href="/signin" className="hover:bg-primary-light  rounded py-4 px-2">
            Sign In
          </Link>
        </li>
        <li>
          <Link href="/signup" className=" rounded py-3 z-10 border px-4">
            Create Account
          </Link>
        </li>
      </ul>

      <button className="menu-container lg:hidden" onClick={() => setCollapse(!collapse)}>

      <input type="checkbox" aria-label="Toggle menu" />
      <span className='bg-white'></span>
      <span className='bg-white mid'></span>
      <span className='bg-white last'></span>
      </button>
    </nav>
  );
}

export default Navbar2
