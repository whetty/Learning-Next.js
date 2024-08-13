import React from "react";
import Link from 'next/link';

const NavBar = () => {
    return (
      <nav className=" bg-white p-4">
        <ul className="flex justify-center space-x-8">
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