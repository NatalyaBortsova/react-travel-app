import React from "react";
import BoraBora from "../../assets/borabora.jpg";
import BoraBora2 from "../../assets/borabora2.jpg";
import Maldives from "../../assets/maldives.jpg";
import Maldives2 from "../../assets/maldives2.jpg";
import KeyWest from "../../assets/keywest.jpg";

import './DestinationsStyles.css';

const Destinations = () => {
  return (
    <div name='destinations' className="destinations">
      <div className="container">
          <h1>All-Inclusive Resorts</h1>
          <p>On the Caribean's Best Beaches</p>
          <div className="image-container">
              <img className='span-3 image-grid-row-2' src={BoraBora} alt="BoraBora" />
              <img src={BoraBora2} alt="BoraBora" />
              <img src={Maldives} alt="Maldives" />
              <img src={Maldives2} alt="Maldives" />
              <img src={KeyWest} alt="KeyWest" />
          </div>
      </div>
    </div>
  );
};

export default Destinations;
