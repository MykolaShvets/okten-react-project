import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";

import {IGenre} from "../../interfaces";
import {genreService} from "../../services";

interface IGenreState{
    genres: IGenre[]
}


const initialState: IGenreState = {
        genres: []
}

export const getAllGenres = createAsyncThunk(
    'genreSlice/getAllGenres',
    async (_, {dispatch}) => {
        try {

            const {data} = await genreService.getAll();
            const {genres} = data
            dispatch(SET_GENRES({genres}))
            return
        } catch (e: any){
            console.log(e.message)
        }
    }
)

const genreSlice = createSlice({
    name: 'genreSlice',
    initialState,
    reducers:{
        SET_GENRES: (state, action: PayloadAction<{genres: IGenre[]}>) => {
            state.genres = [{id:0, name: 'All'}, ...action.payload.genres]

        }
    }
})

const genreReducer = genreSlice.reducer

export default genreReducer

export const {SET_GENRES} = genreSlice.actions
