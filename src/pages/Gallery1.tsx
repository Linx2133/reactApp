import React from 'react';

function Gallery1() {
  const images = [
    "https://images.unsplash.com/photo-1682687220742-aba13b6e50ba",
    "https://images.unsplash.com/photo-1682687221038-404670f09727",
    "https://images.unsplash.com/photo-1682687220063-4742bd7fd538",
    "https://images.unsplash.com/photo-1682687220199-d0124f48f95b",
    "https://images.unsplash.com/photo-1682687220067-469c0f7ec851"
  ];

  return (
    <div>
      <h2 className="text-3xl font-bold text-orange-800 mb-8">Galerie Nature</h2>
      <div className="grid grid-cols-3 gap-4 max-w-5xl mx-auto">
        {images.map((image, index) => {
          // Calculate position classes for octagonal layout
          const positionClasses = [
            "col-start-2 transform -rotate-3",
            "col-start-1 row-start-2 transform rotate-3",
            "col-start-3 row-start-2 transform -rotate-2",
            "col-start-1 row-start-3 transform rotate-2",
            "col-start-2 row-start-3 transform -rotate-1",
          ][index];

          return (
            <div
              key={index}
              className={`${positionClasses} transition-all duration-300 hover:z-10 hover:scale-105`}
            >
              <div className="aspect-square overflow-hidden rounded-lg shadow-xl">
                <img
                  src={image}
                  alt={`Gallery image ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Gallery1;