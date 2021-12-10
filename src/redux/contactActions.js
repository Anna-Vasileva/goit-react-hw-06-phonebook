import { createAction } from "@reduxjs/toolkit";
import types from "./contactTypes";
import { v4 as uuidv4 } from "uuid";

export const changeFilter = createAction(types.FILTER_CONTACT);
export const deleteContact = createAction(types.DELETE_CONTACT);
export const addContact = createAction(types.ADD_CONTACT, (name, number) => {
  return {
    payload: {
      id: uuidv4(),
      name,
      number,
    },
  };
});
