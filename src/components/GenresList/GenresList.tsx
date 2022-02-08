import React, {FC, useEffect} from 'react';

import './GenreList.css'
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {getAllGenres} from "../../store/slices/genre.slice";
import {GenreItem} from "../GenreItem/GenreItem";
import {NavLink} from "react-router-dom";


const GenresList: FC = () => {

 const {genres} = useAppSelector(state => state.genreReducer);

    const dispatch = useAppDispatch();

    useEffect(()=>{
        dispatch(getAllGenres())
    }, [])

    return (
        <div className={'genre__list'}>
            {genres.map( genre => <GenreItem genre={genre} key={genre.id}/>)}
        </div>
    );
};

export {GenresList};
