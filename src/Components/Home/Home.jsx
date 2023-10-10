import React, {useEffect} from "react";
import "./Home.css";

// Import Assets
import Video from "../../Assets/bhopal video.mp4";
import image1 from '../../Assets/waterfalls.jpeg'
import image2 from '../../Assets/waterfalls.jpeg'
import image3 from '../../Assets/waterfalls.jpeg'
import image4 from '../../Assets/waterfalls.jpeg'

// Import Icons
import { AiOutlineSwapRight } from "react-icons/ai";

import Aos from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

const Home = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []); 
  return (
    <div className="Home">
      <div className="videoBg">
        <video src={Video} autoPlay loop muted></video>
      </div>

      <div className="sectionText">
        <h1 data-aos="fade-up">Unlock Your Travel Dreams With Us!</h1>
        <p data-aos="fade-up">
          Discover the world's most adventurous nature, life is so short for a
          trip.
        </p>
        <button
          className="btn flex"
          data-aos="fade-up"
          data-aos-duration="4000"
        >
          GET STARTED <AiOutlineSwapRight className="icon" />
        </button>
      </div>
      <div className="popularPlaces">
        <div className="content" data-aos="fade-up">
          <h3>Popular Places</h3>
          <div className="images flex">
            <img src={image1} alt="Destination image" />
            <img src={image2} alt="Destination image" />
            <img src={image3} alt="Destination image" />
            <img src={image4} alt="Destination image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
