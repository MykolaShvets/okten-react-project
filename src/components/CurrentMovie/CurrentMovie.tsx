import React, {FC, useEffect} from 'react';
import {useParams} from "react-router-dom";

import './CurrentMovie.css'
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {getCurrentMovie} from "../../store/slices/movie.slice";
import {imageUrl} from "../../constants/urls";

const CurrentMovie: FC = () => {

    const {movie} = useAppSelector(state => state.movieReducer);

    const {movieId} = useParams();

    console.log(movie);

    const dispatch = useAppDispatch();

    useEffect(() => {
        if (movieId) {
            dispatch(getCurrentMovie(movieId))
        }
    }, [])


    return (
        <div className={'current-movie__wrapp'}>
            <div className={'current-movie__poster'}>
                <img src={imageUrl + movie?.poster_path} alt=""/>
            </div>
            <div className={'current-movie__info'}>
                <h2>{movie?.title}</h2>
                <h3>{movie?.tagline}</h3>
                <div className={'current-movie__genres'}>
                    <h3>Genres:</h3>
                    {movie?.genres?.map(genre => <p key={genre.id} className={'current-movie__genre'}>{genre.name}</p>)}
                </div>
                <div className={'current-movie__creators'}>
                    <h3>Creators:</h3>
                    {movie?.production_companies?.map(creator => <p key={creator.id}>{creator.name}</p>)}
                </div>
                <p className={'current-movie__description'}>{movie?.overview}</p>

            </div>
        </div>
    );
};

export {CurrentMovie};
