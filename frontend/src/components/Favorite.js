import React from "react";
import Navbar from "./partOfComponents/Navbar";
import Carousel from "./partOfComponents/Carousel";

const Favorite = () => {
  return (
    <div>
      <Navbar />
      <Carousel />
      <div>
        <div className="ml-[10px] md:ml-[100px] md:mt-[70px] md:mb-[20px]">
          <h1 className=" font-bold text-xl md:text-[40px]">Favorite Food</h1>
        </div>
      </div>
    </div>
  );
};

export default Favorite;
