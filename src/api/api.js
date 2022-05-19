import {useEffect, useState} from "react";
import {url} from "../constants/constants";

export const rejectApi = () => {
    const [filmsItem, setFilmsItem] = useState([]);
    const getFilms = () => fetch(`${url.domainUrl}?search=${url.inquiry}&searchBy=title`)
        .then((response) => response.json())
        .then((result) => setFilmsItem(result.data))
    useEffect(() => getFilms(), []);
    return (
        setFilmsItem(result.data)
    )
}
