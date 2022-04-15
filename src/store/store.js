import { configureStore } from '@reduxjs/toolkit';
import movieReducer from "../store/slices/moviesSlice";
import searchReducer from "../store/slices/searchSlice";

export const store = configureStore({
  reducer: {
      movies:movieReducer,
      search:searchReducer,
      
  },
})

