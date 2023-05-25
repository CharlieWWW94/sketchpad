import { createSlice } from "@reduxjs/toolkit";
import { createAction } from "@reduxjs/toolkit";

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

export const createAccount = createAction('user/createAccountRequest', (username, password) => ({
  payload: {
    username,
    password
  }
}));

export const login = createAction('user/createAccountRequest', (username, password) => ({
  payload: {
    username,
    password
  }
}));
