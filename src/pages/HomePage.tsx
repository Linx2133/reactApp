import React from 'react';

export default function HomePage() {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-4xl font-bold text-orange-800 dark:text-orange-400 mb-8">Marion la plus belle</h1>
      <div className="max-w-3xl">
        <img
          src="./images/marion.jpg"
          alt="Welcome"
          className="rounded-lg shadow-xl mb-8 w-full h-[600px] object-cover transform -rotate-2 hover:rotate-0 transition-transform duration-300"
        />
        <p className="text-lg text-orange-700 dark:text-orange-300 text-center leading-relaxed">
          Marion, c'est toujours ma photo préférée :3
        </p>
      </div>
    </div>
  );
}