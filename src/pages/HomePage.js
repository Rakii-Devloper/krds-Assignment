import React, { useState, useEffect } from "react";
import FeatureCard from "../components/FeatureCard";
import Carousel from "../components/Carousel";

const HomePage = () => {
  const [data, setData] = useState([]);
  const [logo, setLogo] = useState([]);

  // Define the array of 6 colors
  const colors = [
    "#41CA6E", // 1st color
    "#FAB153", // 2nd color
    "#7277D5", // 3rd color
    "#F87D51", // 4th color
    "#ED5466", // 5th color
    "#4EC2E7", // 6th color
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://krds-assignment.github.io/aoc/api-assets/data.json"
        );
        const jsonData = await response.json();
        if (jsonData && Array.isArray(jsonData.features)) {
          setData(jsonData.features);
          setLogo(jsonData);
        } else {
          console.error("Features data is not available");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="home-page">
      {logo && logo.logo && (
        <div className="desktop-logo">
          <img src={logo.logo} alt="Logo" />
        </div>
      )}

      {data.length > 0 ? (
        <>
          <div className="desktop-layout">
            {data.map((item, index) => (
              <FeatureCard
                key={index}
                logo={item.logo}
                title={item.title}
                desc={item.desc}
                image={item.image}
                backgroundColor={colors[index % colors.length]} 
              />
            ))}
          </div>

          <div className="mobile-carousel">
            <Carousel features={data} backgroundColors={colors} />
          </div>
        </>
      ) : (
        <p>Loading...</p> 
      )}
    </div>
  );
};

export default HomePage;
