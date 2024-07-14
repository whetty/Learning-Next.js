import React from 'react'

const page = () => {
  return (
    <>
    <h1 class = "text-9xl font-serif hover:font-sans hover:text-blue-700 text-center m-0 p-24 ">
      Whetvin.
    </h1>

    <p class = "text-lg font-sans mx-5 mb-5 p-5 bg-gray-700 rounded-lg shadow-lg text-center">
      Brief description of myself ...
    </p>
    
    <p class = "text-lg font-serif text-black text-center mx-5 mb-5 p-5 bg-gradient-to-r from-purple-500 via-pink-900 to-red-500 rounded-xl shadow-xl hover:bg-gradient-to-l">
      This session has been very useful. So far, I've learnt about the file structure in my project, using "rafce" which is similar to "!" while using HTML in VSCode, arrow functions in JavaScript, dynamic routing, brushing up on Tailwind CSS, and using fragments in JSX.
    </p>
    </>
  )
}

export default page