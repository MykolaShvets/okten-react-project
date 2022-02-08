import React, {FC} from 'react';

import './GenreBadge.css'
import {IGenre} from "../../interfaces";

const GenreBadge: FC <{genre:IGenre}> = ({genre}) => {
    return (
            <p className={'genre-badge'}>
                {genre.name}
            </p>
    );
};

export {GenreBadge};
