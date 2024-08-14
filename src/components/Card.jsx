import React from 'react';
import Image from 'next/image';
import Button from "@/components/Button";

export default function ProductCard({ imageSrc, name }) {
  return (
    <div className="max-w-xs bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <Image
        src={imageSrc}
        alt={name}
        width={1000}
        height={900}
        className="object-cover w-full h-80"
      />
      <div className="p-4">
        <h2 className="text-center text-lg font-semibold text-gray-800">{name}</h2>
        <div className="flex justify-center p-3">
        <Button />
        </div>
      </div>
    </div>
  );
}
