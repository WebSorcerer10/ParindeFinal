import React, { useEffect } from 'react'
import './Portifolio.css'

// Iomported Images
import image from '../../Assets/girlcalling.jpg'
import Icon1 from '../../Assets/girlcalling.jpg'
import Icon2 from '../../Assets/girlcalling.jpg'
import Icon3 from '../../Assets/girlcalling.jpg'

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
              We have extensive knowledge and experience in the travel industry.
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
                  Whether it's a domestic tour or an international adventure, we
                  cover a wide range of destinations to cater to different
                  interests and preferences.
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