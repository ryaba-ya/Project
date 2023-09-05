// CardList.js
import React, { useEffect, useState } from 'react';

import Card from '../Card/Card';
import axios from 'axios';

const CardList = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    // Функция для запроса данных из API
    const fetchData = async () => {
      try {
        const response = await axios.get('https://example-api.com/cards'); // Замените URL на реальный API
        setCards(response.data); // Сохраняем полученные данные в состоянии
      } catch (error) {
        console.error('Ошибка при получении данных из API:', error);
      }
    };

    fetchData(); // Вызываем функцию при монтировании компонента
  }, []);

  // Обработчик для лайка карточки
  const handleLikeClick = (cardId) => {
    // Реализуйте логику лайка
  };

  // Обработчик для удаления карточки
  const handleDeleteClick = (cardId) => {
    // Реализуйте логику удаления
  };

  return (
    <div>
      {cards.map((card) => (
        <Card
          key={card.id}
          cardData={card}
          onLikeClick={() => handleLikeClick(card.id)}
          onDeleteClick={() => handleDeleteClick(card.id)}
        />
      ))}
    </div>
  );
};

export default CardList;

