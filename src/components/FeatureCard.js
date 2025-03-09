import React from "react";

const FeatureCard = ({ logo, title, desc, image, backgroundColor }) => {
  return (
    <div className="feature-card" style={{ backgroundColor }}>
      <div className="right-side ">
        <div className="p-5">
        <img src={logo} alt={title} className="feature-card-logo" />
        <span className="line">{title}</span>
        </div>
        <div className="pl-5">
        <span>{desc}</span>
        </div>

      </div>
      <div className="left-side"> 
        <img src={image} alt={desc} className="feature-card-image" />
      </div>
    </div>
  );
};

export default FeatureCard;
