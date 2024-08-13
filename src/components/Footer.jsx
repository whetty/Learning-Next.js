import React from 'react'
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center py-7">
        <div className="mb-4 md:mb-0 px-5">
          <p className="text-sm">© 2024 Whetvin. All rights reserved.</p>
        </div>
        <div className="flex space-x-6 px-5">
          <Link href="/privacy-policy">
            <span className="text-gray-400 hover:text-white">Privacy Policy</span>
          </Link>
          <Link href="/terms-of-service">
            <span className="text-gray-400 hover:text-white">Terms of Service</span>
          </Link>
          <Link href="/contact">
            <span className="text-gray-400 hover:text-white">Contact</span>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
