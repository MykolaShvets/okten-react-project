import React, {FC, useEffect} from 'react';

import './MovieList.css'
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {getMovies} from "../../store/slices/movie.slice";
import {MovieListCard} from "../MovieListCard/MovieListCard";

const MovieList: FC = () => {

    const {movies, status} = useAppSelector(state => state.movieReducer);

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getMovies())
    }, [])

    const pgNext = () => {

    }


    return (
        <div className={'movie-list__wrapp'}>
            <div className={'movie-list__content'}>
                {movies?.results.map(movie => <MovieListCard movie={movie} key={movie.id}/>)}
            </div>
            <div className={'movie-list__btns'}>
                <button>Prev</button>
                <button>Next</button>
            </div>
        </div>
    );
};

export {MovieList};
