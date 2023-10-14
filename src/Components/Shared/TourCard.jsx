import React from "react"; 6.9k (gzipped: 2.7k)
import {Card, CardBody } from "reactstrap"; 124.4k (gzipped:33.1k)
import { Link } from "react-router-dom"; 6.6k (gzipped: 2.8k)

import './tour-card.css';

const TourCard = ({ tour }) => {
    const { id, title, city, photo, price, featured, avgRating, reviews } = tour;

    return (
        <div className="tour__card">
            <Card>
                <div className="tour__img">
                    <img src={photo} alt="tour-img" />
                    <span>Featured</span>
                </div>


                <CardBody>
                <div className="card__top d-flex align-items-center justify-content-between">
                    <span className="tour__location d-flex align-items-center gap-1">
                        <i class="ri-map-pin-line"></i> {city}
                    </span>
                    <span className="tour__rating d-flex align-items-center gap-1">
                        <i class="ri-star-fill"></i> {avgRating}{" "}
                        <span>({reviews.lenght})</span>
                    </span>
                </div>

                <h5 className="tour__title">
                    <Link to={`/tours/${id}`}>{title}</Link>
                </h5>

                <div className="card__bottom d-flex align-items-center justify-content-between mt-3">
                    <h5>
                        ${price} <span> /per person</span>
                    </h5>

                    <button className="btn booking__btn">
                        <Link to={`/tours/${id}`}>Book Now</Link>
                    </button>
                </div>
            </CardBody>
            </Card>

            
        </div>
    );
};

export default TourCard;
