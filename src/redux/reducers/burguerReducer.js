import { burguerTypes } from "../types/burguerTypes";

export const burguerReducer = (state = [], action) => {
  switch (action.type) {
    case burguerTypes.BURGUER_ADD:
      return [...state, action.payload];

    case burguerTypes.CLEAN_LIST:
      return [];

    default:
      return state;
  }
};
