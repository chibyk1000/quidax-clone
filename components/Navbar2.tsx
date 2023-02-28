import {useState} from 'react'
import Image from 'next/image'
import Link from 'next/link'
const Navbar2 = () => {
    const [collapse, setCollapse] = useState(false)
  return (
    <nav className="bg-primary z-10 fixed top-0 w-full h-20 flex items-center justify-between px-5">
      <Link href="">
        {" "}
        <Image
          src="/images/quidax_logo_white.svg"
          width={100}
          height={100}
          alt=""
        />
      </Link>
      <ul className="flex text-white max-lg:hidden text-[.85rem] justify-between w-4/6 ">
        <li>
          <Link href="" className="hover:bg-primary-light rounded py-4 px-2">QDX Token</Link>{" "}
              </li>
              <li>
                  
        <Link href="" className="hover:bg-primary-light rounded py-4 px-2">Instant Buy/Sell</Link>
              </li>
              <li>
                  
        <Link href="" className="hover:bg-primary-light rounded py-4 px-2">Order Book</Link>
              </li>
              <li>
                  
        <Link href="" className="hover:bg-primary-light  rounded py-4 px-2">Sign In</Link>
              </li>
              <li>
                  
        <Link href="" className=" rounded py-3  border px-4">Create Account</Link>
              </li>
          </ul>
          
          <div className='flex flex-col items-end'>
              <span className={`bg-white w-10 h-[.15rem] block ${collapse?'collape': '' }`}></span>
              <span className={`bg-white w-5 h-[.15rem] block my-2 ${collapse?'collape': '' }`}></span>
              <span className={`bg-white w-10 h-[.15rem] block ${collapse?'collape': '' }`}></span>
          </div>
    </nav>
  );
}

export default Navbar2
