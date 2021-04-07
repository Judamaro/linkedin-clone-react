import { configureStore } from '@reduxjs/toolkit';
import useReducer from '../features/useSlice';

export default configureStore({
  reducer: {
    user: useReducer,
  },
});
