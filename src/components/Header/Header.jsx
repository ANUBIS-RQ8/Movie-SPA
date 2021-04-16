import './Header.css';
import Input from './Input/Input';
import React from 'react';

const Header = (props) => (
    <div className="header">
        <h1>FIND YOUR MOVIE</h1>
        <Input getFilms={props.getFilms} />
    </div>
);

export default Header;