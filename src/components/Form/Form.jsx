import React from 'react';
import Input from './Input/Input';

const Form = (props) => (
    <Input urlBuilder={props.urlBuilder} getFilms={props.getFilms}/>
    )

export default Form;