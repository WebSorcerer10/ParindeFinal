// Card.js
import React from 'react';
import { Link } from 'react-router-dom/dist';
import './Card.css';

const App = () => {
    const cardData = [
      {
        title: 'Hotel A',
        description: 'A luxurious stay with a beautiful view.',
        imageUrl: '',
      },
      {
        title: 'Hotel B',
        description: 'Modern amenities in a central location.',
        imageUrl: '',
      },
      // Add more card data as needed
    ];}

const Card = ({ title, description, imageUrl }) => {
  return (
    <div className="card">
      <img src={imageUrl} alt={title} className="card-image" />
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
      </div>
    </div>
  );
};

export default Card;
