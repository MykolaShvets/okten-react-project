import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";

import {IMovie, IMovieList} from "../../interfaces";
import {movieService} from "../../services";

interface IMovieState {
    movie: IMovie | null;
    movies: IMovieList | null;
    page: number;
}

const initialState: IMovieState = {
    movie: null,
    movies: null,
    page: 1
};

export const getMovies = createAsyncThunk(
    'movieSlice/getMovies',
    async (_, {dispatch}) => {
        const {data} = await movieService.getAll();
        dispatch(SET_MOVIES({movies: data}));
    }
);

export const getCurrentMovie = createAsyncThunk<void, string>(
    'movieSlice/getCurrentMovie',
    async (movieId, {dispatch}) => {
        const {data} = await movieService.getById(movieId);
        dispatch(SET_MOVIE({movie: data}));
    }
)


const movieSlice = createSlice({
    name: 'movieSlice',
    initialState,
    reducers: {
        SET_MOVIES: (state, action: PayloadAction<{ movies: IMovieList }>) => {
            state.movies = action.payload.movies
        },
        SET_MOVIE: (state, action: PayloadAction<{ movie: IMovie }>) => {
            state.movie = action.payload.movie
        }

    }
});


const movieReducer = movieSlice.reducer;

export default movieReducer;

export const {SET_MOVIES, SET_MOVIE} = movieSlice.actions;
