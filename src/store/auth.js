import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  isauth: false,
  userName: '',
  email: '',
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
   login(state, action) {
    state.isauth = true;
    state.userName = action.payload.userName;
    state.email = action.payload.email;
    },
    logout(state) {
      state.isauth = false;
      state.userName = '';
      state.email = '';
    },
    setData(state, action) {
      state.isauth = true;
      state.userName = action.payload.userName;
      state.email = action.payload.email;
    },
  },
});

export const AuthAction = authSlice.actions;
export default authSlice.reducer;
