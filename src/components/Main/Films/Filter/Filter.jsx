import React from "react";
import './Filter.css';

const Filter = (props) => {
    const {films} = props;

    return (
    <div className="sort">
        <div className="titleSort">Sort by</div>
        <div className="radioButton"><input type="radio"/>release date</div>
        <div className="radioButton"><input type="radio"/>rating</div>
    </div>
    )
}

export default Filter;