import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import api from 'api';

export const fetchRobots = createAsyncThunk('robots/fetchRobots',
  async () => {
    try {
      const result = await api.get('/robot/', { validateStatus: (status) => status === 200 });
      return result.data;
    } catch (error) {
      // TODO: Handle this error
      console.error('ERROR: ', error);
    }
    return { next: null, previous: null, results: [] };
  });

const robotsSlice = createSlice({
  name: 'robots',
  initialState: {
    next: null,
    previous: null,
    robots: [],
  },
  reducers: {
  },
  extraReducers: {
    [fetchRobots.fulfilled]: (state, action) => {
      state.next = action.payload.next;
      state.previous = action.payload.previous;
      state.robots = action.payload.results;
    },
  },
});

export const selectRobots = (state) => state.robots.robots;

export default robotsSlice.reducer;
