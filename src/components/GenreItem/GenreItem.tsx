import React, {FC} from 'react';
import {Link} from "react-router-dom";

import './GenreItem.css'
import {IGenre} from "../../interfaces";

const GenreItem: FC<{ genre: IGenre }> = ({genre}) => {
    const {id, name} = genre;
    return (
        <div className={'genre-item'}>
            <Link to={id === 0 ? '/movies' : `/movies/genre/${id}`}>{name}</Link>
        </div>
    );
}

export {GenreItem};
