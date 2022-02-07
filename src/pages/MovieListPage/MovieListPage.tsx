import React, {FC} from 'react';

import './MovieListPage.css'
import {GenresList, MovieList} from "../../components";

const MovieListPage: FC = () => {
    return (
        <div>
            <div className={'movies-page__wrapp'}>
                <div className={'movies-page__sidebar'}>
                    <GenresList/>
                </div>
                <div className={'movie-page__content'}>
                    <MovieList/>
                </div>
            </div>
        </div>
    );
};

export {MovieListPage};
