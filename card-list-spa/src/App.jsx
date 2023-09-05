import React from 'react';
import './App.css'; // Импортируем файл стилей
import CardList from '../src/components/CardList/CardList'; // Импортируем компоненту CardList

function App() {
  return (
    <div className="App">
      <h1>Мое SPA с карточками</h1>
      <CardList /> {/* Используем компоненту CardList */}
    </div>
  );
}

export default App;

