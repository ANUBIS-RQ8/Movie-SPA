import React from 'react';

let url = {
   domainUrl: 'https://reactjs-cdp.herokuapp.com/movies',
   inquiry: '',
}
export const urlBuilder = (text) => {
    url.inquiry = text
    console.log(url)
};

export default url;



