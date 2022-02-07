import React, {FC} from 'react';

import './GenreItem.css'
import {IGenre} from "../../interfaces";

const GenreItem: FC<{ genre: IGenre }> = ({genre}) => {
    const {id, name} = genre;
    return (
        <div>
            <p>{name}</p>
        </div>
    );
}

export {GenreItem};
