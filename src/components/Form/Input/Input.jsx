import React from 'react';

const Input = (props) => {
  let handleInputChange = React.createRef();
  let addInput = () => {
    let text = handleInputChange.current.value;
    props.urlBuilder(text);
    props.getFilms();
  }

  return (
      <div>
    <input className="text" type="text" placeholder="Search in the movies..." ref={handleInputChange} />
    <button type="button" className="search" onClick={addInput}>Search</button>
      </div>
  );
};

export default Input;
