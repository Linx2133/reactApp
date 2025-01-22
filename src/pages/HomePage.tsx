import React from 'react';

export default function HomePage() {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-4xl font-bold text-orange-800 dark:text-orange-400 mb-8">Bienvenue sur notre site</h1>
      <div className="max-w-3xl">
        <img
          src="https://images.unsplash.com/photo-1544005313-94ddf0286df2"
          alt="Welcome"
          className="rounded-lg shadow-xl mb-8 w-full h-[600px] object-cover transform -rotate-2 hover:rotate-0 transition-transform duration-300"
        />
        <p className="text-lg text-orange-700 dark:text-orange-300 text-center leading-relaxed">
          Découvrez notre collection de photographies uniques à travers nos différentes galeries.
          Chaque image raconte une histoire, capturant des moments précieux et des perspectives
          extraordinaires. Explorez nos galeries et laissez-vous transporter par la magie de la
          photographie.
        </p>
      </div>
    </div>
  );
}