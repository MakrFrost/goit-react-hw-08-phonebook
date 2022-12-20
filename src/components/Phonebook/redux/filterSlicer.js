import { createSlice } from '@reduxjs/toolkit';

export const filterSlicer = createSlice({
  name: 'filter',
  initialState: { query: '' },
  reducers: {
    changeFilter: (state, action) => {
      state.query = action.payload;
    },
  },
});

export default filterSlicer.reducer;

export const { changeFilter } = filterSlicer.actions;
