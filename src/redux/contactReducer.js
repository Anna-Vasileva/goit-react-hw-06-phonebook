import { combineReducers } from "redux";
import types from "./contactTypes";
import { createReducer } from "@reduxjs/toolkit";
// import { changeFilter, deleteContact, addContact } from "./contactActions";

const items = createReducer([], {
  [types.ADD_CONTACT]: (state, action) =>
    state.find(({ name }) => name === action.payload.name)
      ? alert(`${action.payload.name} is already in contact!`)
      : [...state, action.payload],
  [types.DELETE_CONTACT]: (state, action) =>
    state.filter(({ id }) => id !== action.payload),
});

const filter = createReducer("", {
  [types.FILTER_CONTACT]: (_, action) => action.payload,
});

export default combineReducers({
  items,
  filter,
});
