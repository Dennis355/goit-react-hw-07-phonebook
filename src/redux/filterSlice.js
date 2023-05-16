import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filterValue',
  initialState: '',
  filterContact: {
    change: (state, action) => {
      return action.payload;
    },
  },
});

export const { filterContact } = filterSlice.actions;
