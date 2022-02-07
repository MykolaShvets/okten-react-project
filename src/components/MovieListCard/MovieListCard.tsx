import React, {FC} from 'react';
import {Link} from "react-router-dom";

import './MovieListCard.css'
import {IMovie} from "../../interfaces";
import {imageUrl} from "../../constants/urls";
import {useAppDispatch} from "../../hooks/redux";

const MovieListCard: FC<{ movie: IMovie }> = ({movie}) => {

    const {id, title, poster_path, vote_average, overview} = movie;


    const dispatch = useAppDispatch();


    return (
        <div className={'movie-list-card__wrapp'}>
            <Link to={id.toString()}>
                <div className={'movie__poster'}>
                    <img src={imageUrl + poster_path} alt={title}/>
                </div>
                <div className={'movie__info'}>
                    <h4 className={'movie__title'}>{title}</h4>
                    <h6 className={'movie__rating'}>{vote_average}</h6>
                </div>
            </Link>

        </div>
    );
};

export {MovieListCard};
