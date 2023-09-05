// Card.js
import React from 'react';

const Card = ({ cardData, onLikeClick, onDeleteClick }) => {
  const { imageUrl, title, description, liked } = cardData;

  return (
    <div className="card">
      <img src={imageUrl} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
      <button onClick={onLikeClick}>
        {liked ? 'Unlike' : 'Like'}
      </button>
      <button onClick={onDeleteClick}>Delete</button>
    </div>
  );
};

export default Card;
