import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface UserState {
  username?: string,
  password?: string | number,
}

const initialState: UserState = {
  username: 'huyen',
  password: '123456'
}
export const authorSlice = createSlice({
  name: 'author',
  initialState,
  reducers: {
    info: (state) => {
      console.log('state', state)
    }
  }
});
export const { info } = authorSlice.actions;
export default authorSlice.reducer;
