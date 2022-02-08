import React, {FC, useEffect} from 'react';

import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {getPopularMovie} from "../../store/slices/movie.slice";
import {Slider} from "../Slider/Slider";

const PopularMovies: FC = () => {

    const {popular} = useAppSelector(state => state.movieReducer);

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getPopularMovie())
    }, [])



    return (
        <div>
            <Slider movies={popular}/>
        </div>
    );
};

export {PopularMovies};
