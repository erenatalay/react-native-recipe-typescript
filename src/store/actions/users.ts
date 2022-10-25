import {LoginForm, UserDispatch} from '../../types/user';

export const login = (item: LoginForm) => (dispatch: UserDispatch) => {
  if (item.username == '5532626651' && item.password == '123456') {
    dispatch({
      type: 'LOGIN_START',
      payload: item,
    });
  }
};

export const logout = () => (dispatch : UserDispatch) => {
  return dispatch({
      type: "LOGOUT",
  })

}
