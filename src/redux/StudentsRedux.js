import { createSlice } from "@reduxjs/toolkit";

export const studentSlice = createSlice({
  name: "student",
  initialState: {
   students: [],
    isFetching: false,
    error: false,
  },
  reducers: {
    //GET ALL
    getStudentStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    getStudentSuccess: (state, action) => {
      state.isFetching = false;
      state.products = action.payload;
    },
    getStudentFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    //DELETE
    deleteStudentStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    deleteStudentSuccess: (state, action) => {
      state.isFetching = false;
      state.products.splice(
        state.products.findIndex((item) => item._id === action.payload),
        1
      );
    },
    deleteStudentFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    //UPDATE
    updateStudentStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    updateStudentSuccess: (state, action) => {
      state.isFetching = false;
      state.products[
        state.products.findIndex((item) => item._id === action.payload.id)
      ] = action.payload.product;
    },
    updateStudentFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    //UPDATE
    addStudentStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    addStudentSuccess: (state, action) => {
      state.isFetching = false;
      state.products.push(action.payload);
    },
    addStudentFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const {
  getStudentStart,
  getStudentSuccess,
  getStudentFailure,
  deleteStudentStart,
  deleteStudentSuccess,
  deleteStudentFailure,
  updateStudentStart,
  updateStudentSuccess,
  updateStudentFailure,
  addStudentStart,
  addStudentSuccess,
  addStudentFailure,
} = studentSlice.actions;

export default studentSlice.reducer;