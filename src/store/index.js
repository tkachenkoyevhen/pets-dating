import { configureStore } from '@reduxjs/toolkit'
import accountReducer from './modules/accountReducer';

export default configureStore({
  reducer: {
    account: accountReducer
  }
});
