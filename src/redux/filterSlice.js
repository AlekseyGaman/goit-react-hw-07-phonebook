import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    getFilterContsacts(state, action) {
      return (state = action.payload);
    },
  },
});

export const { getFilterContsacts } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
