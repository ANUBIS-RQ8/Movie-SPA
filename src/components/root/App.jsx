import React, {useEffect, useState} from 'react';
import Films from '../Main/Films/Films';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import {url} from '../../constants/constants';

const App = () => {
    const [filmsItem, setFilmsItem] = useState([]);
    const getFilms = () => fetch(`${url.domainUrl}?search=${url.inquiry}&searchBy=title`)
        .then((response) => response.json())
        .then((result) => setFilmsItem(result.data))
    useEffect(() => getFilms(), []);

    return (
        <div>
            <Header getFilms={getFilms}/>
            <Films films={filmsItem}/>
            <Footer/>
        </div>
    );
};

export default App;
