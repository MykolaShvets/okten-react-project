import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";

import {IMovie, IMovieList} from "../../interfaces";
import {movieService} from "../../services";

interface IMovieState {
    movie: IMovie | null;
    movies: IMovieList | null;
    currentPg: number;
    upcoming: IMovie[];
    topRated: IMovie[];
    popular: IMovie[];
}

const initialState: IMovieState = {
    movie: null,
    movies: null,
    currentPg: 1,
    upcoming: [],
    topRated: [],
    popular: []
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

export const getUpcomingMovie = createAsyncThunk(
    'movieSlice/getUpcomingMovie',
    async (_, {dispatch}) => {
        const {data} = await movieService.getUpcoming()
        const {results} = data
        dispatch(SET_UPCOMING({upcoming: results}))
    }
)

export const getTopRatedMovie = createAsyncThunk(
    'movieSlice/getTopRatedMovie',
    async (_, {dispatch}) => {
        const {data} = await movieService.getTopRated()
        const {results} = data
        dispatch(SET_TOP_RATED({topRated: results}))
    }
)

export const getPopularMovie = createAsyncThunk(
    'movieSlice/getUpcomingMovie',
    async (_, {dispatch}) => {
        const {data} = await movieService.getPopular()
        const {results} = data
        dispatch(SET_POPULAR({popular: results}))
    }
)

interface IByGenre{
    genreId:string;
    page:number;
}

export const getByGenre = createAsyncThunk<void, IByGenre>(
    'movieSlice/getByGenre',
    async ({genreId, page}, {dispatch}) => {
        const {data} = await movieService.getByGenre(genreId,page)
        dispatch(SET_MOVIES({movies:data}))
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
        PG_CHANGE: (state, action: PayloadAction<number>) => {
            state.currentPg = action.payload;
        },
        SET_UPCOMING: (state, action: PayloadAction<{ upcoming: IMovie[] }>) => {
            state.upcoming = action.payload.upcoming
        },
        SET_TOP_RATED: (state, action: PayloadAction<{ topRated: IMovie[] }>) => {
            state.topRated = action.payload.topRated
        },
        SET_POPULAR: (state, action: PayloadAction<{ popular: IMovie[] }>) => {
            state.popular = action.payload.popular
        },

    }
});


const movieReducer = movieSlice.reducer;

export default movieReducer;

export const {SET_MOVIES,
    SET_TOP_RATED,
    SET_POPULAR,
    SET_MOVIE,
    PG_CHANGE,
    SET_UPCOMING} = movieSlice.actions;
