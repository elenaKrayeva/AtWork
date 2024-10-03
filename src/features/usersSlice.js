import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchUsers = createAsyncThunk('users/fetchUsers', async (_, { rejectWithValue }) => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');

    if (!response.ok) {
      throw new Error('Ошибка при загрузке данных');
    }

    const data = await response.json();
    return data.slice(0, 6);
  } catch (error) {
    return rejectWithValue(error.message || 'Произошла ошибка при загрузке данных');
  }
});

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    users: [],
    archive: [],
    status: 'idle',
    error: null,
  },
  reducers: {
    archiveUser: (state, action) => {
      const user = state.users.find((user) => user.id === action.payload);
      state.users = state.users.filter((user) => user.id !== action.payload);
      state.archive.push(user);
    },
    hideUser: (state, action) => {
      state.users = state.users.filter((user) => user.id !== action.payload);
    },
    activateUser: (state, action) => {
      const user = state.archive.find((user) => user.id === action.payload);
      state.archive = state.archive.filter((user) => user.id !== action.payload);
      state.users.push(user);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { archiveUser, hideUser, activateUser } = usersSlice.actions;
export default usersSlice.reducer;
