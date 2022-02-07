import React, {FC, useEffect} from 'react';

import './MovieList.css'
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {getMovies, PG_CHANGE} from "../../store/slices/movie.slice";
import {MovieListCard} from "../MovieListCard/MovieListCard";

const MovieList: FC = () => {

    const {movies, currentPg} = useAppSelector(state => state.movieReducer);

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getMovies(currentPg))
    }, [currentPg])


    return (
        <div className={'movie-list__wrapp'}>
            <div className={'movie-list__content'}>
                {movies?.results.map(movie => <MovieListCard movie={movie} key={movie.id}/>)}
            </div>
            <div className={'movie-list__btns'}>
                <button onClick={() => {
                    dispatch(PG_CHANGE(1))
                }}>1...
                </button>

                <button onClick={() => dispatch(PG_CHANGE(currentPg - 1))}
                        disabled={currentPg === 1}>{'<< ' + (currentPg - 1)}</button>

                {currentPg > 1 ? <p>{`<<  ${currentPg}  >>`}</p> : '<< 1 >>'}

                <button onClick={() => {
                    dispatch(PG_CHANGE(currentPg + 1))
                }}>{(currentPg + 1) + ' >>'}</button>

                <button onClick={() => {
                    dispatch(PG_CHANGE(500))
                }}>...500
                </button>
            </div>
        </div>
    );
};

export {MovieList};
