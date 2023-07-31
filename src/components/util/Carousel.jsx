import React, { useState } from "react";
import { ArrowBadgeLeft, ArrowBadgeRight } from "tabler-icons-react";

function Carousel({ images }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextSlide = () => {
    const newIndex =
      currentImageIndex >= images.length - 1 ? 0 : currentImageIndex + 1;
    setCurrentImageIndex(newIndex);
  };

  const prevSlide = () => {
    const newIndex =
      currentImageIndex <= 0 ? images.length - 1 : currentImageIndex - 1;
    setCurrentImageIndex(newIndex);
  };

  return (
    <div className="carousel-container">
      <button className="arrow arrow-left" onClick={prevSlide}>
        <ArrowBadgeLeft size={48} />
      </button>
      <img className="carousel-image" src={images[currentImageIndex]} alt="" />
      <button className="arrow arrow-right" onClick={nextSlide}>
        <ArrowBadgeRight size={48} />
      </button>
    </div>
  );
}

export default Carousel;
