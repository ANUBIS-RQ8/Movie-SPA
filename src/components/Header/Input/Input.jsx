import React from 'react';
import './Input.css';
import {urlBuilder} from '../../../constants/constants';

const Input = (props) => {
    const handleInputChange = React.createRef();
    const addInput = () => {
        let text = handleInputChange.current.value;
        urlBuilder(text);
        props.getFilms();
    }
    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            addInput()
        }
    }

    return (
        <div>
            <input className="text" type="text" placeholder="Search in the movies..."onKeyPress={handleKeyPress} ref={handleInputChange} />
            <button type="button" className="search" onClick={addInput}>Search</button>
        </div>
    );
};

export default Input;
