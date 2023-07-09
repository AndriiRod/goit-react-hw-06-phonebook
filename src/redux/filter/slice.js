import { createSlice } from '@reduxjs/toolkit';

const initialState = '';

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    search(state, action) {
      return (state = action.payload);
    },
  },
});

export const getFilter = state => state.filter;
export const { search } = filterSlice.actions;
