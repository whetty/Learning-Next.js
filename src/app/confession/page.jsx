import React from 'react'
import Link from 'next/link';

const page = () => {
  return (
    <div className='flex justify-center items-center flex-col h-screen'>
    <h2 className="text-center p-5 font-cave text-9xl">Confession.</h2>
        <p className="text-center p-5 font-cave text-3xl">I'm really sorry you had to go through all this.</p>
        <Link href="/revelation" passHref>
            <button
              type="submit"
              className="bg-green-400 rounded text-white hover:scale-110
    px-5 py-2"
            >
              Click here!
            </button>
        </Link>
    </div>
  )
}

export default page

