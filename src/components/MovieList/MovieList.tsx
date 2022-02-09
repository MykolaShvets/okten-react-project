import React, {FC, useEffect} from 'react';

import './MovieList.css'
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {getByGenre, getMovies, PG_CHANGE} from "../../store/slices/movie.slice";
import {MovieListCard} from "..";
import {useParams} from "react-router-dom";

const MovieList: FC = () => {

    const {movies, currentPg} = useAppSelector(state => state.movieReducer);

    const dispatch = useAppDispatch();

    const {genreId} = useParams();

    useEffect(() => {
        if (genreId) {
            dispatch(getByGenre({genreId, page: currentPg}))
            return
        }
        dispatch(getMovies(currentPg))
    }, [currentPg, genreId])


    return (
        <div className={'movie-list__wrapp'}>
            <div className={'movie-list__content'}>
                {movies?.results.map(movie => <MovieListCard movie={movie} key={movie.id}/>)}
            </div>
            <div className={'movie-list__btns'}>
                <button onClick={() => dispatch(PG_CHANGE(1))}
                        className={'first-pg__btn'}>1...</button>

                <button onClick={() => dispatch(PG_CHANGE(currentPg - 1))}
                        disabled={currentPg === 1}>{'<< ' + (currentPg - 1)}</button>

                {currentPg > 1 ? <p>{`<<  ${currentPg}  >>`}</p> : '<< 1 >>'}

                <button onClick={() => dispatch(PG_CHANGE(currentPg + 1))}
                        disabled={currentPg === 500}>{(currentPg + 1) + ' >>'}</button>

                <button onClick={() => dispatch(PG_CHANGE(500))}
                        className={'last-pg__btn'}>...500
                </button>
            </div>
        </div>
    );
};

export {MovieList};
