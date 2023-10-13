import React, { useEffect } from 'react'
import './Destination.css'

import { Link } from 'react-router-dom'

//Imported Icons
import {MdLocationPin} from 'react-icons/md'
import {BsFillCreditCardFill} from 'react-icons/bs'
import {BsFillCalendarDateFill} from 'react-icons/bs'
import { BiSearchAlt } from 'react-icons/bi'
import { TiLocation } from 'react-icons/ti'


// Imported Images
import image1 from '../../Assets/Panchmarhi.jpeg'
import image2 from '../../Assets/Bhimbetka,_Madhya_Pradesh.jpg'
import image3 from '../../Assets/R.jpeg'
import image4 from '../../Assets/pandav falls(khajurao).jpg'

import image5 from '../../Assets/ujjain mahakal.jpeg'
import image6 from '../../Assets/Tribal museum.jpg'
import image7 from '../../Assets/Udaygiri caves.jpg'
import image8 from '../../Assets/Bhojpur-temple.jpg'

import Aos from "aos";
import "aos/dist/aos.css";


//Destination data to map through
const destinations = [
  {
    id: 1,
    img: image1,
    name: 'Panchmarhi',
    location: 'Madhya Pradesh',
    rating: 4.7
  },
  {
    id:2,
    img: image2,
    name: 'Bhimbetka caves',
    location: 'Bhopal',
    rating: 4.3
  },
  {
    id: 3,
    img: image3,
    name: 'Mandu',
    location: 'Indore',
    rating: 4.9
  },
  {
    id: 4,
    img: image4,
    name: 'Pandav Falls',
    location: 'Khajurao',
    rating: 4.5
  },
  {
    id: 5,
    img: image5,
    name: 'Ujjain Mahakal',
    location: 'Ujjain',
    rating: 4.9
  },
  {
    id: 6,
    img: image6,
    name: 'Tribal museum',
    location: 'Bhopal',
    rating: 4.9
  },
  {
    id: 7,
    img: image7,
    name: 'Udaygiri caves',
    location: 'Bhopal',
    rating: 4.7
  },
  {
    id: 8,
    img: image8,
    name: 'Bhojpur-temple',
    location: 'Bhopal',
    rating: 4.4
  }
]

const Destination = () => {

useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="destination section container">
      <Link to="/login" className="destination section container">

      <div className="secContainer">
        <div className="secTitle" data-aos="fade-up">

        

          <span>
          <Link to="/Card" className="redText">
           
        EXPLORE NOW
        </Link>
        </span>
          <h3>Find Your Dream Destination </h3>
          <p>
            Fill in the fields below to find the best spot for your next tour.
          </p>
        </div>

        <div className="searchField grid">
          <div className="inputField flex" data-aos="fade-up">
            <MdLocationPin className="icon" />
            <input type="text" placeholder="Location" />
          </div>

          <div className="inputField flex" data-aos="fade-up">
            <BsFillCreditCardFill className="icon" />
            <input type="text" placeholder="Budget" />
          </div>

          <div className="inputField flex" data-aos="fade-up">
            <BsFillCalendarDateFill className="icon" />
            <input type="text" placeholder="Location" />
          </div>

          <button className="btn flex" data-aos="fade-up">
            <BiSearchAlt className="icon" />
            Search
          </button>
        </div>

        <div className="secMenu">
          <ul className="flex" data-aos="fade-up">
            <li className="active">All</li>
            <li>Recommended</li>
            <li>Beach</li>
            <li>Park</li>
            <li>Nature</li>
            <li>Mountain</li>
          </ul>
        </div>

        <div className="destinationContainer grid">
          {destinations.map((destination) => {
            return (
              <div className="singleDestination" key={destination.id}>
                <div className="imgDiv" data-aos="fade-up">
                  <img src={destination.img} alt="Destination Image" />
                  <div className="desInfo flex">
                    <span className="text">
                      <span className="name">{destination.name}</span>
                      <p className="flex">
                        <TiLocation className="icon" />
                        {destination.location}
                      </p>
                    </span>
                    <span className="rating">{destination.rating}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      </Link>
    </div>
  );
}

export default Destination