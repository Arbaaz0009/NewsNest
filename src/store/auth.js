import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  isauth: false,
  userName: '',
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
   login(state, action) {
    state.isauth = true;
    const { email,password } = action.payload;
    },
    register(state, action) {
      const {email,password,name} = action.payload;

      try {
        const response =  axios.post('http://localhost:5000/api/auth/register',{email,password,name});
        console.log(response);
      } catch (error) {
        console.error("Error: ",error);
      }

    }
  },
});

export const AuthAction = authSlice.actions;
export default authSlice.reducer;
