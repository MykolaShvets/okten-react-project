import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";

import {IMovie, IMovieList} from "../../interfaces";
import {movieService} from "../../services";

interface IMovieState {
    movie: IMovie | null;
    movies: IMovieList | null;
    currentPg: number;
}

const initialState: IMovieState = {
    movie: null,
    movies: null,
    currentPg: 1
};

export const getMovies = createAsyncThunk(
    'movieSlice/getMovies',
    async (page: number, {dispatch}) => {
        const {data} = await movieService.getAll(page);
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
        },
        PG_CHANGE: (state, action:PayloadAction<number>) => {
            state.currentPg = action.payload;
        },

    }
});


const movieReducer = movieSlice.reducer;

export default movieReducer;

export const {SET_MOVIES, SET_MOVIE, PG_CHANGE} = movieSlice.actions;
