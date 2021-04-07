import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import Film from '../Film/Film';
import './Films.css';

const Films = (props) => {
    const {films} = props;

    return (
        <div>
            <div className="filter">
                <div className="count">
                    {(films.length) >0 ? <p><span>{films.length}</span> movies found</p> : <p>No movies found</p>}
                </div>
                <div className="sort">
                    <div className="titleSort">Sort by</div>
                    <div className="radioButton"><input type="radio"/>release date</div>
                    <div className="radioButton"><input type="radio"/>rating</div>
                </div>
            </div>
            <div className="films">
                {films.map((item) => <Film filmDetails={item}/>)}

            </div>
        </div>
   ) ;
};

Films.propTypes = {
    films: PropTypes.func.isRequired,
};

export default Films;
