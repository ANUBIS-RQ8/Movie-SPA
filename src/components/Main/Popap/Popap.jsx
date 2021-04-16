import React from 'react';
import './Popap.css';
import {Link} from 'react-router-dom';

const Popap = (props) => {

    return (
        <div className='backSide'>
            <div className='modal' style={{
                background: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.9)), url(${props.films.poster_path})`
            }}>
                <Link to='/close'>
                    <button className='close'>×</button>
                </Link>
                <h3 className='movie__title'>{props.films.title}</h3>
                <p className='movie__genre'>{props.films.genres.join(', ')}</p>
                <p className='movie__description'>{props.films.overview}</p>
            </div>
        </div>
    )
}

export default Popap;