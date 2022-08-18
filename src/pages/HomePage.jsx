import React from "react";

import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const HomePage = () => {
  return (
    <div className="homePage">
      <div className="image">
        <img
          className="image-homepage"
          style={{ height: 655 }}
          src="https://www.mercedes-benz.co.uk/passengercars/mercedes-benz-cars/models/amg-gt/4-door-coupe-x290-fl/e-performance/performance/_jcr_content/par/hotspotsimple/image.MQ6.12.20220714142114.jpeg"
          alt=""
        />
      </div>
    </div>
  );
};

export default HomePage;
