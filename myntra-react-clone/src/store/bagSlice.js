import {createSlice} from '@reduxjs/toolkit'

const bagSlice = createSlice({
  name: 'items',
  initialState: [],
  reducers: {
    addInitialItems: (state, action) => {
      return action.payload;
    }
  }
})

export const bagAction = bagSlice.actions;

export default bagSlice;

