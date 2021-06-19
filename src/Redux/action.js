import { SIGN_UP, LOG_IN } from "./actionTypes";

export const signUp = (payload) => ({
  type: SIGN_UP,
  payload,
});
export const logIn = (payload) => ({
  type: LOG_IN,
  payload,
});
