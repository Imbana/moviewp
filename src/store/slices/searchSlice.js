import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    movies: [],
}

export const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        moviesSearch:(state,action) =>{
            state.movies = action.payload
        }
    },
})

// Action creators are generated for each case reducer function
export const { moviesSearch } = searchSlice.actions

export const selectsearch = (state) => state.search;

export default searchSlice.reducer