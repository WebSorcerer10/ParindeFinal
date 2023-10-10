import React, { useEffect } from "react";
import "./Review.css";

//Imported Icons
import { AiFillStar } from "react-icons/ai";

// Imported Images
import Image1 from '../../Assets/girl-image.jpg'
import Image2 from '../../Assets/bijliwaliladki.jpg'
import Image3 from '../../Assets/blackpicdp.jpg'
import Image4 from '../../Assets/boy-image.jpg'
import Image5 from '../../Assets/friends.png'

import Aos from "aos";
import "aos/dist/aos.css";

const Review = () => {

useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="review section container">
      <div className="secContainer grid">
        <div className="textDiv">
          <span className="redText" data-aos="fade-up">
            FROM OUR CLIENTS
          </span>
          <h3 data-aos="fade-up">
            Real Travel History From Our Beloved Clients
          </h3>
          <p data-aos="fade-up">
            By choosing us as their tour agency, customers can expect an
            enriching and enjoyable travel experience, filled with unforgettable
            memories that will last a lifetime.
          </p>
          <span className=" stars flex">
            <AiFillStar className="icon" data-aos="fade-up" />
            <AiFillStar className="icon" data-aos="fade-up" />
            <AiFillStar className="icon" data-aos="fade-up" />
            <AiFillStar className="icon" data-aos="fade-up" />
            <AiFillStar className="icon" data-aos="fade-up" />
          </span>

          <div className="clientImages flex">
            <img src={Image1} alt="Clients Images" data-aos="fade-up" />
            <img src={Image2} alt="Clients Images" data-aos="fade-up" />
            <img src={Image3} alt="Clients Images" data-aos="fade-up" />
            <img src={Image4} alt="Clients Images" data-aos="fade-up" />
          </div>
        </div>
        <div className="imgDiv">
          <img src={Image5} alt="Client Image" data-aos="fade-up" />
        </div>
      </div>
    </div>
  );
};

export default Review;
