import React from 'react';
import Card from '@/components/Card';

const Page = () => {
  const products = [
    { id: 1, name: 'G-Fuel Hot Dog Water Energy Formula', imageSrc: '/p1.jpg' },
    { id: 2, name: 'iPhone 10 Ultra Pro Limited Edition', imageSrc: '/p2.jpg' },
    { id: 3, name: 'Listerine KFC Anitiseptic Mouthwash', imageSrc: '/p3.jpg' },
    { id: 4, name: 'Peppa Pig 800g', imageSrc: '/p4.jpg' },
    { id: 5, name: 'Sigma Syrup', imageSrc: '/p5.jpg' },
  ];

  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <h2 className="text-center p-5 font-cave text-9xl">Products.</h2>
      <p className="text-center p-5 font-cave text-3xl">This page contains all the products. Currently, our last-minute low-budget store has no products.</p>
      
      <div className="flex justify-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-6">
        {products.map((product) => (
          <Card key={product.id} imageSrc={product.imageSrc} name={product.name} />
        ))}
      </div>
    </div>
  );
};

export default Page;