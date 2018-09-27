import React from 'react';
import CardBanner from './CardBanner';
import CardContent from './CardContent';
import './Card.css';

const CardContainer = props => {
  return (
    <div className="card-container-wrapper">
      <div className="card-wrapper">
        <a href="https://www.reactjs.org/">
          <CardBanner />
          <CardContent />
        </a>
      </div>
    </div>
  );
};

export default CardContainer;