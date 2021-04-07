import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './components/root/App';
import url, { urlBuilder } from './state/state';

ReactDOM.render(
  <React.StrictMode>
    <>
      <App urlBuilder={urlBuilder} url={url}/>
    </>
  </React.StrictMode>,
  document.getElementById('root'),
);
