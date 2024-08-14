import React from 'react';

const Page = () => {
  return (
    <div className="p-4 flex flex-col items-center justify-center h-screen overflow-hidden">
      <div className="text-2xl text-white bg-opacity-30 rounded-xl relative group">
        <h1 className="text-2xl hover:text-9xl hover:text-violet-700 text-center m-0 p-24">
          The Whetvin Store.
        </h1>
        <p className="text-center text-sm mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Please navigate yourself to the close button
        </p>
      </div>
    </div>
  );
};

export default Page;

 
