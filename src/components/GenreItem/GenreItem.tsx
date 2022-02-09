import React, {FC} from 'react';

import './GenreItem.css'
import {IGenre} from "../../interfaces";
import {Link} from "react-router-dom";

const GenreItem: FC<{ genre: IGenre }> = ({genre}) => {
    const {id, name} = genre;
    return (
        <div className={'genre-item'}>
            <Link to={id === 0? '/movies' : `/movies/genre/${id}`}>{name}</Link>
        </div>
    );
}

export {GenreItem};
