import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface CounterState {
  value: number
}

const initialState: CounterState = {
  value: 0,
}
export const authorSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    info: (state) => {}
  }
});
export const { info } = authorSlice.actions;
export default authorSlice.reducer;
