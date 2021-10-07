import { createSlice } from '@reduxjs/toolkit';

const LOGIN = 'Test';
const PASSWD = 'asdasdasd'; // TO DO: hardcode

export const account = createSlice({
  name: 'account',
  initialState: {
    isAuth: false
  },
  reducers: {
    loginAction: (state, action) => {
      const { login, passwd } = action.payload
      if (login && passwd && (login == LOGIN && passwd == PASSWD)) {
        state.isAuth = true;
      }
    },
    logoutAction: state => {
      if(state.isAuth) {
        state.isAuth = false;
      }
    }
  }
})

export const { loginAction, logoutAction } = account.actions;

export const isAuthenticated  = state => state.account.isAuth;

export default account.reducer;
