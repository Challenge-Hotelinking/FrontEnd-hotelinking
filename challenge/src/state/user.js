import { createAction, createReducer } from "@reduxjs/toolkit";

export const setUser = createAction("SET_LOGIN_USER");

export const reducer = createReducer(
  {},
  {
    [setUser]: (state, action) => action.payload,
  }
);

export default reducer