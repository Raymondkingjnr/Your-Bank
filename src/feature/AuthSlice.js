import { createSlice } from "@reduxjs/toolkit";

const getUserFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem("user")) || null;
};

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: getUserFromLocalStorage(),
    isLoading: true,
    Error: null,
  },
  reducers: {
    loginUser: (state, action) => {
      const user = action.payload;
      // console.log(user);
      state.user = user;
      localStorage.setItem("user", JSON.stringify(user));
    },
    setLoadin: (state, action) => {
      state.isLoading = action.payload;
    },
    logOutUser: (state) => {
      state.user = null;
      localStorage.removeItem("user"), (state.isLoading = false);
    },
  },
});

export const { loginUser, setLoadin, logOutUser } = authSlice.actions;

export default authSlice.reducer;
