import React, {FC} from 'react';
import Carousel from 'react-elastic-carousel'

import './Slider.css'
import {IMovie} from "../../interfaces";
import {MovieListCard} from "../MovieListCard/MovieListCard";

const Slider: FC<{movies:IMovie[]}> = ({movies}) => {
    return (
            <Carousel itemsToShow={3}
                      itemsToScroll={3}
                      isRTL={false}
                      enableAutoPlay={false}
                      pagination={false}
            >
                {movies.map(movie => <MovieListCard movie={movie} key={movie.id}/>)}
            </Carousel>


    );
};

export {Slider};
