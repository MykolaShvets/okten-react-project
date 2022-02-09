import React, {FC} from 'react';

import './HomePage.css'
import {PopularMovies, TopRatedMovies, UpcomingMovies} from "../../components";

const HomePage: FC = () => {
    return (
        <div className={'home-page__wrapp'}>
            <div className={'top-rated'}>
                <h2>Top rated</h2>
                <TopRatedMovies/>
            </div>
            <div className={'popular'}>
                <h2>Popular</h2>
                <PopularMovies/>
            </div>
            <div className={'upcoming'}>
                <h2>Coming soon</h2>
                <UpcomingMovies/>
            </div>
        </div>
    );
};

export {HomePage};
