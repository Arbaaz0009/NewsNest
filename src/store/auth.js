import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  isauth: false,
  userName: '',
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginStart: (state) => {
      state.isauth = false;
    },
    loginSuccess: (state, action) => {
      state.isauth = true;
      state.userName = action.payload.name;
    },
    loginFailure: (state) => {
      state.isauth = false;
    },
    logout: (state) => {
      state.isauth = false;
      state.userName = null;
    },
  },
});

export const AuthAction = authSlice.actions;
export default authSlice.reducer;
