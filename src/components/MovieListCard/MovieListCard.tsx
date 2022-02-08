import React, {FC} from 'react';
import {Link} from "react-router-dom";
import {Rating} from "@mui/material";
import {StarBorder} from "@mui/icons-material";

import './MovieListCard.css'
import {IGenre, IMovie} from "../../interfaces";
import {imageUrl} from "../../constants/urls";
import {useAppSelector} from "../../hooks/redux";
import {GenreBadge} from "../GenresBadge/GenreBadge";

const MovieListCard: FC<{ movie: IMovie }> = ({movie}) => {

    const {id, title, poster_path, vote_average, genre_ids} = movie;

    const {genres} = useAppSelector(state => state.genreReducer)

    let currentGenres: IGenre[] = [];

    {
        genre_ids && genre_ids.map(genre_id => genres.filter(genre => genre.id === genre_id).map(genre => currentGenres.push(genre)))
    }


    return (
        <div className={'movie-list-card__wrapp'}>
            <Link to={`/movies/${id.toString()}`}>
                <div className={'movie__poster'}>
                    <img src={imageUrl + poster_path} alt={title}/>
                </div>
                <div className={'movie__info'}>
                    <h4 className={'movie__title'}>{title}</h4>
                    <div className={"movie-list-card__genres"}>
                        {currentGenres.map(genre => <GenreBadge key={genre.id} genre={genre}/>)}
                    </div>
                    <Rating value={vote_average}
                            readOnly max={10}
                            size={'small'}
                            emptyIcon={<StarBorder sx={{color: '#ffffff'}} fontSize="inherit"/>}
                    />
                </div>
            </Link>

        </div>
    );
};

export {MovieListCard};
