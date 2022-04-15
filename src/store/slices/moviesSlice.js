import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { fetchSinToken } from "../../helpers/fetch"



export const fetchMoviesAsync = createAsyncThunk(
    'movies/fetchMovies',
    async (endpoint, data, method) => {
        const response = await fetchSinToken(endpoint);
        const body = await response.json()
        // The value we return becomes the `fulfilled` action payload
        return body.findMovie;
    }
);

const initialState = {
    isFetching: false,
    movie: []
}

const movieSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
        //Esto es para modificar sin el sync
        // movieLoading(state, action) {
        //     state.isFetching = true
        //     state.movie = []
        // },
        // movieReceived(state, action) {
        //     state.isFetching = false
        //     state.movie = action.payload
        // },
        // movieError(state, action) {
        //     state.isFetching = false
        //     state.movie = [...state.movie]
        // },
    },

    extraReducers: (builder) => {
        builder
            .addCase(fetchMoviesAsync.pending, (state) => {
                state.isFetching = true
            })
            .addCase(fetchMoviesAsync.fulfilled, (state, action) => {
                state.isFetching = false
                state.movie = action.payload
            });
    },
})

// Destructure and export the plain action creators
export const { movieLoading, movieReceived, movieError } = movieSlice.actions


export const selectMovie = (state) => state.movies;

export default movieSlice.reducer;
