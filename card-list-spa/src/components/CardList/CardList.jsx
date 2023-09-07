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
          const response = await axios.get('https://anime-facts-rest-api.herokuapp.com/api/v1'); // Замените на корректный URL
          setCards(response.data.data); // Обновляем состояние cards с данными из API
        } catch (error) {
          console.error('Ошибка при получении данных из API:', error);
        }
      };
  
      fetchData(); // Вызываем функцию при монтировании компонента
    }, []);
  
    // ... (Ваши обработчики лайков и удаления)
  
    return (
      <div>
        {cards.map((card) => (
          <Card
            key={card.anime_id} // Используйте уникальный ключ
            cardData={card}
            onLikeClick={() => handleLikeClick(card.anime_id)}
            onDeleteClick={() => handleDeleteClick(card.anime_id)}
          />
        ))}
      </div>
    );
  };
  
  export default CardList;