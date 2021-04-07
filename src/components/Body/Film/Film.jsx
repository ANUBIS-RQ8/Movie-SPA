import React from 'react';
import './Film.css';
import {BrowserRouter, Link, Route} from "react-router-dom";
import Popap from '../Popap/Popap';

const Film = (props) => {

    return (
        <BrowserRouter>
        <div className="film">
            <Link to='/film'>
            <img className="posters" src={props.filmDetails.poster_path} />
            </Link>
            <div className="preDescription">
            <div className="title">{props.filmDetails.title}</div>
            <div className="releaseDate">{props.filmDetails.release_date.slice(0, 4)}</div>
            </div>
            <div className="genre">
                <p>{props.filmDetails.genres.join(', ')}</p>
            </div>
            <Route path='/film' render={ () => <Popap films={props.filmDetails}/>} />
            <Route path='/close' render={ () => {}} />
        </div>
        </BrowserRouter>
    );
};

export default Film;
