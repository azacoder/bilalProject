import { defaultState } from "../store";

export const reducer = (state = defaultState, actions) => {
  switch (actions.type) {
    case "GET_USER":
      return { ...state, userData: actions.userData };
      case "GET_TOKEN":
        return { ...state, userToken: actions.userToken };
    default:
      return state;
  }
};