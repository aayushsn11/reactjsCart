import { ACTIONTYPES } from "./actiontypes";
import * as commonservice from "../../utils/CommonServices";

export const logindata = (forms) => async (dispatch) => {
  const { email, password } = forms.user;
  if (email === "admin@gmail.com" && password === "Abcd@1234") {
    dispatch({
      type: ACTIONTYPES.LOGIN,
      payload: "token",
    });
  } else {
      
    commonservice.forError('Please Enter Valid Credentials','error')
  }
};

export const logout = () => (dispatch) => {
  dispatch({
    type: ACTIONTYPES.LOGOUT,
  });
};
