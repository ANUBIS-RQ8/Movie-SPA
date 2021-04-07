import React, {useEffect, useState} from 'react';
import './App.css';
import Films from '../Body/Films/Films';
import Form from '../Form/Form';
import Footer from '../Footer/Footer';

const App = (props) => {
    const [filmsItem, setFilmsItem] = useState([]);
    const getFilms = () => fetch(`${props.url.domainUrl}?search=${props.url.inquiry}&searchBy=title`)
           .then((response) => response.json())
               .then((result) => setFilmsItem(result.data))
    useEffect(() => getFilms(), []);

    return (
            <div>
                <div className="app">
                    <div>
                        <h4>FIND YOUR MOVIE</h4>
                    </div>
                    <div>
                        <Form urlBuilder={props.urlBuilder} getFilms={getFilms}/>
                    </div>
                </div>
                <Films films={filmsItem}/>
                <Footer/>
            </div>
    );
};

export default App;
