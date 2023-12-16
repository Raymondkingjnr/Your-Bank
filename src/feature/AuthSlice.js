import { createSlice } from "@reduxjs/toolkit";
import { auth } from "../firebaseConfig";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: "",
    isLoading: true,
    Error: null,
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setLoadin: (state, action) => {
      state.isLoading = action.payload;
    },
    logOutUser: (state) => {
      state.user = null;
      state.isLoading = false;
    },
  },
});

export const { setUser, setLoadin, logOutUser } = authSlice.actions;

export default authSlice.reducer;
