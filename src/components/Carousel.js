import React, { useState } from "react";
import leftChevron from "../assets/left-chevron.png"; 
import rightChevron from "../assets/right-chevron.png"; 

const Carousel = ({ features, backgroundColors }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === features.length - 1 ? 0 : prevIndex + 1));
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? features.length - 1 : prevIndex - 1));
  };

  const currentFeature = features[currentIndex];
  const currentColor = backgroundColors[currentIndex % backgroundColors.length]; 

  return (
    <div className="carousel" style={{ backgroundColor: currentColor }}>
      <div className="carousel-item">
        <div className="carousel-top">
          <img src={currentFeature.logo} alt={currentFeature.title} className="caroselLogo" />
          <h2 className="line">{currentFeature.title}</h2>
          <p>{currentFeature.desc}</p>
        </div>
        <div className="carousel-bottom">
          <img src={currentFeature.image} alt={currentFeature.desc} />
        </div>
      </div>

      <button onClick={handlePrev} className="prev">
        <img src={leftChevron} alt="Previous" />
      </button>
      <button onClick={handleNext} className="next">
        <img src={rightChevron} alt="Next" />
      </button>
    </div>
  );
};

export default Carousel;
