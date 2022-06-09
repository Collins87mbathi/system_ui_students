import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null,
    isFetching: false,
    error: false,
  },
  reducers: {
    loginStart: (state) => {
      state.isFetching = true;
    },
    loginSuccess: (state, action) => {
      state.isFetching = false;
      state.currentUser = action.payload;
    },
    loginFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    logout: (state) => {
      state.currentUser = null;
    },
    signStart: (state) => {
        state.isFetching = true;
      },
      signSuccess: (state, action) => {
        state.isFetching = false;
        state.currentUser = action.payload;
      },
      signFailure: (state) => {
        state.isFetching = false;
        state.error = true;
      },


  },
});

export const { loginStart, loginSuccess, loginFailure,signStart,signSuccess,signFailure } = userSlice.actions;
export default userSlice.reducer;