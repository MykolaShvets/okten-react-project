import React, {FC, useEffect} from 'react';

import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {getTopRatedMovie} from "../../store/slices/movie.slice";
import {Slider} from "../Slider/Slider";

const TopRatedMovies: FC = () => {

    const {topRated} = useAppSelector(state => state.movieReducer);

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getTopRatedMovie())
    }, [])



    return (
        <div>
            <Slider movies={topRated}/>
        </div>
    );
};

export {TopRatedMovies};
