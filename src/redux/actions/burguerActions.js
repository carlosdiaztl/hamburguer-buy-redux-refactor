import { burguerTypes } from "../types/burguerTypes";

export const actionAddBurguer = (hamburguesa) => {
  return {
    type: burguerTypes.BURGUER_ADD,
    payload: hamburguesa,
  };
};
export const actionCleanList = () => {
  return {
    type: burguerTypes.CLEAN_LIST,
  };
};
