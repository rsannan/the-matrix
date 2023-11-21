import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { DBGetUser, supabase } from "../components/database";
const initialState = {
  isLoading: true,
  user: null,
};

export const getSessionUser = createAsyncThunk(
  "sessionuser/getSessionUser",
  async () => {
    try {
      const user = await DBGetUser();

      return user;
    } catch (error) {
      return null;
    }
  }
);

const autoLoginSlice = createSlice({
  name: "autoLogin",
  initialState,
  reducers: {
    logout: (state) => {
      localStorage.removeItem("session");
      state.user = null;
    },
    skipLoading: (state) => {
      state.isLoading = false;
    },
  },
  extraReducers: {
    [getSessionUser.pending]: (state) => {
      state.isLoading = true;
    },
    [getSessionUser.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.user = payload;
    },
    [getSessionUser.rejected]: (state, { payload }) => {
      state.isLoading = false;
    },
  },
});

export const autoLoginReducer = autoLoginSlice.reducer;
export const { logout, skipLoading } = autoLoginSlice.actions;
