import React, {FC, useEffect} from 'react';

import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {getUpcomingMovie} from "../../store/slices/movie.slice";
import { Slider } from '../Slider/Slider';

const UpcomingMovies: FC = () => {

    const {upcoming} = useAppSelector(state => state.movieReducer);

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getUpcomingMovie())
    }, [])



    return (
        <div>
            <Slider movies={upcoming}/>
        </div>
    );
};

export {UpcomingMovies};
