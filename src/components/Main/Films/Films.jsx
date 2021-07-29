import React from 'react';
import PropTypes from 'prop-types';
import Film from '../Film/Film';
import './Films.css';
import Filter from "./Filter/Filter";

const Films = (props) => {
  const {films} = props;

  return (
    <div>
      <div className="filter">
        <div className="count">
          {(films.length) > 0 ? <p><span>{films.length}</span> movies found</p> : <p>No movies found</p>}
        </div>
            <Filter />
      </div>
      <div className="films">
        {films.map((item) => <Film filmDetails={item} />)}
      </div>
    </div>
  );
};

Films.propTypes = {
  films: PropTypes.func.isRequired,
};

export default Films;
