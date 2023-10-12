import { configureStore } from '@reduxjs/toolkit';
import stringReducer from '../redux/slices/stringSlice';

 

const store = configureStore ({
  reducer: {
    string: stringReducer,
  }
})

export default store;