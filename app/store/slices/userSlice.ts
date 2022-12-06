import {createSlice} from '@reduxjs/toolkit';
import {UserListState} from '../interfaces';
const initialState: UserListState = {
  users: [],
  loading: false,
  error: true,
};

const userListSlice = createSlice({
  name: 'userList',
  initialState: initialState,
  reducers: {},
});

export default userListSlice.reducer;
