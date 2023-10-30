import React, { useState, useEffect } from "react";
import foto1 from "../../images/foto1.jpg";
import foto2 from "../../images/foto2.jpg";
import foto3 from "../../images/foto3.jpg";

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const carouselItems = document.querySelectorAll("[data-carousel-item]");
    carouselItems.forEach((item, index) => {
      if (index === currentSlide) {
        item.classList.remove("hidden");
      } else {
        item.classList.add("hidden");
      }
    });
  }, [currentSlide]);

  const handleSlideTo = (index) => {
    setCurrentSlide(index);
  };

  const handleNext = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 2 ? 0 : prevSlide + 1));
  };

  const handlePrev = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? 2 : prevSlide - 1));
  };

  return (
    <div className="relative w-full md:px-[150px] md:pt-[100px] md:pb-[50px] p-[10px] md:my-0 my-[20px]">
      <div className="relative overflow-hidden rounded-lg">
        <div className="hidden duration-700 ease-in-out " data-carousel-item>
          <img src={foto1} className="w-full h-[180px] object-center md:h-[300px]" alt="Slide 1" />
        </div>

        <div className="hidden duration-700 ease-in-out" data-carousel-item>
          <img src={foto2} className="w-full h-[180px] object-center md:h-[300px]" alt="Slide 2" />
        </div>

        <div className="hidden duration-700 ease-in-out" data-carousel-item>
          <img src={foto3} className="w-full h-[180px] object-center md:h-[300px]" alt="Slide 3" />
        </div>
      </div>

      <div className="absolute z-30 flex space-x-3 bottom-5 left-1/2 -translate-x-1/2">
        <button type="button" className={`w-3 h-3 rounded-full ${currentSlide === 0 ? "bg-blue-500" : "bg-gray-300"}`} aria-current={currentSlide === 0 ? "true" : "false"} aria-label="Slide 1" onClick={() => handleSlideTo(0)}></button>
        <button type="button" className={`w-3 h-3 rounded-full ${currentSlide === 1 ? "bg-blue-500" : "bg-gray-300"}`} aria-current={currentSlide === 1 ? "true" : "false"} aria-label="Slide 2" onClick={() => handleSlideTo(1)}></button>
        <button type="button" className={`w-3 h-3 rounded-full ${currentSlide === 2 ? "bg-blue-500" : "bg-gray-300"}`} aria-current={currentSlide === 2 ? "true" : "false"} aria-label="Slide 3" onClick={() => handleSlideTo(2)}></button>
      </div>

      <button type="button" className="absolute  left-0 md:left-10 z-30 top-[90px] md:top-[250px] flex items-center justify-center h-[20px] px-4 cursor-pointer group focus:outline-none" data-carousel-prev onClick={handlePrev}>
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg className="w-4 h-4 text-white dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>
      <button type="button" className="absolute top-[90px] md:top-[250px] right-0 md:right-10 z-30 flex items-center justify-center h-[20px] px-4 cursor-pointer group focus:outline-none" data-carousel-next onClick={handleNext}>
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray_800/70 group-focus:outline-none">
          <svg className="w-4 h-4 text-white dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button>
    </div>
  );
};

export default Carousel;
