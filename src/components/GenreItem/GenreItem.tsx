import React, {FC} from 'react';

import './GenreItem.css'
import {IGenre} from "../../interfaces";
import {NavLink} from "react-router-dom";

const GenreItem: FC<{ genre: IGenre }> = ({genre}) => {
    const {id, name} = genre;
    return (
        <div>
            <NavLink to={id === 0? '/movies' : `/movies/genre/${id}`}>{name}</NavLink>
        </div>
    );
}

export {GenreItem};
