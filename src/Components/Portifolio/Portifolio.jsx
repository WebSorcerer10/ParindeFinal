import React, { useEffect } from 'react'
import './Portifolio.css'

// Iomported Images
import image from '../../Assets/family pic.jpeg.jpg'
import Icon1 from '../../Assets/hands-together.jpg'
import Icon2 from '../../Assets/Path.jpg'
import Icon3 from '../../Assets/Phone.png'

import Aos from "aos";
import "aos/dist/aos.css";


const Portifolio = () => {

useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="portifolio section container">
      <div className="secContainer grid">
        <div className="leftContent">
          <div className="secHeading" data-aos="fade-up">
            <h3>Why Should You Choose Us</h3>
            <p>
              We are the only travel planning site which will help you in exploring the hidden gems of the places like Bhopal,Indore and Ujjain.
            </p>
          </div>

          <div className="grid">
            <div className="singlePortifolio flex" data-aos="fade-up">
              <div className="iconDiv">
                <img src={Icon1} alt="Icon Image" />
              </div>
              <div className="infor">
                <h4>Safety and Support</h4>
                <p>
                  Our top priority is the safety and well-being of our clients.
                  We maintain high safety standards and have emergency support
                  available during the trip.
                </p>
              </div>
            </div>
            <div className="singlePortifolio flex" data-aos="fade-up">
              <div className="iconDiv">
                <img src={Icon2} alt="Icon Image" />
              </div>
              <div className="infor">
                <h4>Diverse Range of Destinations</h4>
                <p>
                  You can explore the unexplored places.
                </p>
              </div>
            </div>
            <div className="singlePortifolio flex" data-aos="fade-up">
              <div className="iconDiv">
                <img src={Icon3} alt="Icon Image" />
              </div>
              <div className="infor">
                <h4>24/7 Customer Support</h4>
                <p>
                  Our dedicated customer support team is available round the
                  clock to address any queries or concerns before, during, and
                  after the trip.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="rightContent" data-aos="fade-up">
          <img src={image} alt="Image" />
        </div>
      </div>
    </div>
  );
}

export default Portifolio