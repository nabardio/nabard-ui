import { configureStore } from '@reduxjs/toolkit';
import robots from 'slices/robots';

export default configureStore({
  reducer: {
    robots,
  },
  devTools: true,
});
