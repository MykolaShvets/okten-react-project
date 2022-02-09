import React, {FC} from 'react';
import {Route, Routes} from "react-router-dom";

import {Layout} from "./components";
import {HomePage, MovieDetailPage, MoviesPage} from "./pages";
import {MovieListPage} from "./pages/MovieListPage/MovieListPage";


const App: FC = () => {
    return (
        <Routes>
            <Route path={'/'} element={<Layout/>}>
                <Route index element={<HomePage/>}/>
                <Route path={'movies'} element={<MoviesPage/>}>
                    <Route index element={<MovieListPage/>}/>
                    <Route path={'genre/:genreId'} element={<MovieListPage/>}/>
                    <Route path={':movieId'} element={<MovieDetailPage/>}/>
                </Route>
            </Route>
        </Routes>
    );
}

export default App;
