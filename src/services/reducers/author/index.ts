import { createSlice } from '@reduxjs/toolkit';
import { TUser } from './type';

const initialState: TUser = {
  username: 'huyen',
  password: '123456'
}
export const authorSlice = createSlice({
  name: 'author',
  initialState,
  reducers: {
    user: (state, action) => { // action: type action
      return state;
    }
  }
});
export const { user } = authorSlice.actions;
export default authorSlice.reducer;
