'use client'
import { useState } from 'react';
import { CourseCard } from '../card/course.card';

type DataItemsTypes = {
    img:string,
    span: string,
    title: string,
    description: string,
    tag:string[],
    href:string
}
type propsCarouselCourses = {
    items: DataItemsTypes[]
}


export function CarouselCourses ({ items }:propsCarouselCourses) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? items.length - 1 : prevIndex - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === items.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="relative w-full">
        <div className="overflow-hidden px-4">
            <div
                className="flex transition-transform duration-300"
                style={{ transform: `translateX(-${currentIndex * 26.3}%)` }}
            >
            {items.map((data:DataItemsTypes, index:number) => (
                <div key={index} className="w-auto">
                    <CourseCard 
                        stack={data.span}
                        description={data.description}
                        img={data.img}
                        tags={data.tag}
                    />
                </div>
            ))}
            </div>
        </div>
        <button
            className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full"
            onClick={prevSlide}
        >
            &#10094;
        </button>
        <button
            className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full"
            onClick={nextSlide}
        >
            &#10095;
        </button>
    </div>
  );
};
