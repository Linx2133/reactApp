import React from 'react';

function Gallery1() {
  const images = [
    "/images/cat1.jpg",
    "/images/cat2.jpg",
    "/images/cat3.jpg",
    "/images/cat4.jpg",
    "/images/cat5.jpg"
  ];

  return (
    <div>
      <h2 className="text-3xl font-bold text-orange-800 mb-8">Phoenix et Chelsea</h2>
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