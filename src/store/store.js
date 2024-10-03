import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/userSlice';
import usersReducer from '../features/usersSlice';
import userEditReducer from '../features/userEditSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    users: usersReducer,
    userEdit: userEditReducer,
  },
});

export default store;
