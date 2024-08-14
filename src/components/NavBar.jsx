import React from "react";
import Link from 'next/link';
import Image from 'next/image';
import code_picture from "/public/img1.png";

const NavBar = () => {
    return (
      <nav className=" bg-white p-4">
        <Image src={code_picture} alt="code" width={60} height={10} className=" opacity-80"/>
        <ul className="flex justify-center space-x-5">
          <li>
            <Link href="/" passHref>
              <span className="text-gray-600 font-bold hover:text-lg">
                Home
              </span>
            </Link>
          </li>
          <li>
            <Link href="/about" passHref>
              <span className="text-gray-600 font-bold hover:text-lg">
                About
              </span>
            </Link>
          </li>
          <li>
            <Link href="/products" passHref>
              <span className="text-gray-600 font-bold hover:text-lg">
                Products
              </span>
            </Link>
          </li>
          <li>
            <Link href="/cart" passHref>
              <span className="text-gray-600 font-bold hover:text-lg">
                Cart
              </span>
            </Link>
          </li>
        </ul>
    </nav>
    );
  };
  
  export default NavBar;