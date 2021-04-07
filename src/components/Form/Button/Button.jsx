import React from 'react';
import './Button.css';


const Button = (props) => {
  let handleSearch = (event) => {
    event.preventDefault();
    props.getFilms();
  }

  return <button type="button" className="search" onClick={handleSearch}>Search</button>;
};

export default Button;

//компонент не используется, оставлен для подключения