import { loginFailure, loginStart, loginSuccess,signStart,signFailure,signSuccess } from "./userRedux";
import { publicRequest, userRequest } from "../requestMethods";
import {
  getStudentFailure,
  getStudentStart,
  getStudentSuccess,
  deleteStudentFailure,
  deleteStudentStart,
  deleteStudentSuccess,
  updateStudentFailure,
  updateStudentStart,
  updateStudentSuccess,
  addStudentFailure,
  addStudentStart,
  addStudentSuccess,
} from "./StudentsRedux";

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/user/login", user);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  } 
};
export const signup = async (dispatch, user) => {
    dispatch(signStart());
    try {
      const res = await publicRequest.post("/user/register", user);
      dispatch(signSuccess(res.data));
    } catch (err) {
      dispatch(signFailure());
    }
  };
  

export const getStudent = async (dispatch) => {
  dispatch(getStudentStart());
  try {
    const res = await publicRequest.get("/student/all");
    dispatch(getStudentSuccess(res.data));
  } catch (err) {
    dispatch(getStudentFailure());
  }
};

export const deleteStudent = async (id, dispatch) => {
  dispatch(deleteStudentStart());
  try {
    // const res = await userRequest.delete(`/student/${id}`);
    dispatch(deleteStudentSuccess(id));
  } catch (err) {
    dispatch(deleteStudentFailure());
  }
};

export const updateStudent = async (id, student, dispatch) => {
  dispatch(updateStudentStart());
  try {
    // update
    dispatch(updateStudentSuccess({ id, student }));
  } catch (err) {
    dispatch(updateStudentFailure());
  }
};
export const addStudent = async (student, dispatch) => {
  dispatch(addStudentStart());
  try {
    const res = await userRequest.post(`/student`, student);
    dispatch(addStudentSuccess(res.data));
  } catch (err) {
    dispatch(addStudentFailure());
  }
};