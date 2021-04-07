import React from 'react';
import Input from './Input/Input';
import Button from './Button/Button';

const Form = (props) => (
    <Input urlBuilder={props.urlBuilder} getFilms={props.getFilms}/>
       // <Button />
    )

export default Form;