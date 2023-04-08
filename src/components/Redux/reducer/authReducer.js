import { ACTIONTYPES } from "../actions/actiontypes";

const token = localStorage.getItem("token");
const forminitialstate = {
  token: token,
};

const loginreducer = (state = forminitialstate, action) => {
  if (action.type === ACTIONTYPES.LOGIN) {
    localStorage.setItem("token", action.payload);
    return {
      ...state,
      token: action.payload,
    };
  }
  if (action.type === ACTIONTYPES.LOGOUT) {
    localStorage.removeItem("token");
    return { ...state, token: "" };
  }
  return state;
};

export default loginreducer;
