import React from 'react';

function Gallery2() {
  const images = [
    "https://images.unsplash.com/photo-1682695796954-bad0d0f59ff1",
    "https://images.unsplash.com/photo-1682695797221-8164ff1fafc9",
    "https://images.unsplash.com/photo-1682695796880-c9c57f48f8f4",
    "https://images.unsplash.com/photo-1682695794947-17061dc284dd",
    "https://images.unsplash.com/photo-1682695799083-2bb5b7f58a25"
  ];

  return (
    <div>
      <h2 className="text-3xl font-bold text-orange-800 mb-8">Galerie Architecture</h2>
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