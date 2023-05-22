import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    isLoggedIn: false,
  },
  reducers: {
    logIn: (state) => {
      state.isLoggedIn = true;
    },
    logOut: (state) => {
      state.isLoggedIn = true;
    }
  },
});

const selectLoggedInState = (state) => state.user.isLoggedIn;

export { selectLoggedInState };
export const { logIn, logOut } = userSlice.actions;
export default userSlice.reducer;
