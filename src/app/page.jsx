import React from 'react'

const page = () => {
  return (
    <div class = "relative flex items-center justify-center h-screen w-screen overflow-hidden">
    <div class= " h-screen w-screen relative z-30 p-5 text-2xl text-white bg-opacity-30  rounded-xl">
      <h1 class = "text-2xl font-cave hover:text-9xl hover:text-blue-700 text-center m-0 p-24 ">
        Whetvin.
      </h1>

      <p class = "text-lg font-cave mx-5 mb-5 p-5 hover:text-2xl hover:bg-gray-700 rounded-lg shadow-lg text-center">
        Brief description of myself ...
      </p>
    
      <p class = "text-2xl font-cave text-black text-center mx-5 mb-5 p-5 bg-gradient-to-r from-purple-500 via-pink-900 to-red-500 rounded-xl shadow-xl hover:bg-gradient-to-l">
        This session has been very useful. So far, I've learnt about the file structure in my project, using "rafce" which is similar to "!" while using HTML in VSCode, arrow functions in JavaScript, dynamic routing, brushing up on Tailwind CSS, and using fragments in JSX.
      </p>
    </div>
    <video src= "/AV.mp4" autoplay="{true}" loop muted className="absolute z-10 object-fill h-screen w-screen"></video>
    </div>
  )
}

export default page