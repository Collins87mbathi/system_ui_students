import { createSlice } from "@reduxjs/toolkit";

export const subjectSlice = createSlice({
  name: "subject",
  initialState: {
    subject: [],
    isFetching: false,
    error: false,
  },
  reducers: {
    //GET ALL
    getSubjectStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    getSubjectSuccess: (state, action) => {
      state.isFetching = false;
      state.products = action.payload;
    },
    getSubjectFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    //DELETE
    deleteSubjectStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    deleteSubjectSuccess: (state, action) => {
      state.isFetching = false;
      state.products.splice(
        state.products.findIndex((item) => item._id === action.payload),
        1
      );
    },
    deleteSubjectFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    //UPDATE
    updateSubjectStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    updateSubjectSuccess: (state, action) => {
      state.isFetching = false;
      state.products[
        state.products.findIndex((item) => item._id === action.payload.id)
      ] = action.payload.product;
    },
    updateSubjectFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    //UPDATE
    addSubjectStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    addSubjectSuccess: (state, action) => {
      state.isFetching = false;
      state.products.push(action.payload);
    },
    addSubjectFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const {
  getProductStart,
  getProductSuccess,
  getProductFailure,
  deleteProductStart,
  deleteProductSuccess,
  deleteProductFailure,
  updateProductStart,
  updateProductSuccess,
  updateProductFailure,
  addProductStart,
  addProductSuccess,
  addProductFailure,
} = subjectSlice.actions;

export default subjectSlice.reducer;