'use client'
import { useEffect, useState } from 'react';
import bunner01 from '../../assets/bunner01.svg'
import bunner02 from '../../assets/bunner02.svg'
import bunner03 from '../../assets/bunner03.svg'
import Image from 'next/image';

interface Image {
  src: string;
  alt: string;
}

export function CarouselDefault () {
  const [activeImage, setActiveImage] = useState(0);
  const images: Image[] = [
    { src: bunner01, alt: 'bunner one' },
    { src: bunner02, alt: 'bunner two' },
    { src: bunner03, alt: 'bunner tree' },
  ];

  const handleNext = () => {
    setActiveImage((prevActiveImage) => {
      return prevActiveImage === images.length - 1 ? 0 : prevActiveImage + 1;
    });
  };

  const handlePrevious = () => {
    setActiveImage((prevActiveImage) => {
      return prevActiveImage === 0 ? images.length - 1 : prevActiveImage - 1;
    });
  };

    // Automatic image switching
    useEffect(() => {
      const intervalId = setInterval(() => {
        handleNext();
      }, 6000); // Change interval to 4 seconds (4000 milliseconds)
  
      return () => clearInterval(intervalId); // Cleanup function to clear interval on unmount
    }, []);

  return (
    <div className="relative w-full h-[32rem] flex items-center justify- ">
      <div className="flex overflow-hidden">
        {images.map((image, index) => (
          <div 
            key={index}
            className={`absolute h-[32rem] inset-0 transform transition-opacity duration-1000 ease-in-out ${
              index === activeImage ? 'z-10 opacity-100' : 'z-0 opacity-0'
            }`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={300}
              height={300}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      <button
        className="absolute z-40 top-1/2 -translate-y-1/2 right-4 bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleNext}
      >
        Próximo
      </button>

      <button
        className="absolute z-40 top-1/2 -translate-y-1/2 left-4 bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
        onClick={handlePrevious}
      >
        Anterior
      </button>
    </div>
  );
};

