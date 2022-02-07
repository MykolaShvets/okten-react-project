import {combineReducers, configureStore} from "@reduxjs/toolkit";

import genreReducer from "./slices/genre.slice";
import movieReducer from "./slices/movie.slice";

const rootReducer = combineReducers({
    genreReducer,
    movieReducer
});

export const setupStore = () => configureStore({
    reducer: rootReducer
})


export type RootState = ReturnType<typeof rootReducer>;

export type AppStore = ReturnType<typeof setupStore>;

export type AppDispatch = AppStore['dispatch'];
