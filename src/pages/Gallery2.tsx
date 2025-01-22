import React from 'react';

function Gallery2() {
  const images = [
    "/reactApp/images/kevin1.jpg",
    "/reactApp/images/kevin2.jpg",
    "/reactApp/images/kevin3.jpg"
  ];

  return (
    <div>
      <h2 className="text-3xl font-bold text-orange-800 mb-8">Kévin</h2>
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

export default Gallery2;