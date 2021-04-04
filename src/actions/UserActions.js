import { UserController } from '@/controllers';

export const TYPES = {
  CLEAR_STORE: 'CLEAR_STORE',
  LOGIN: 'LOGIN',
  LOGIN_REQUEST: 'LOGIN_REQUEST',
  LOGIN_ERROR: 'LOGIN_ERROR',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LIST_ADD: 'LIST_ADD',
  LIST_REMOVE: 'LIST_REMOVE',
};

const loginRequest = () => ({
  type: TYPES.LOGIN_REQUEST,
  payload: null,
});

const loginError = error => ({
  type: TYPES.LOGIN_ERROR,
  payload: { error },
});

const loginSuccess = user => ({
  type: TYPES.LOGIN_SUCCESS,
  payload: { user },
});

const clearStore = () => ({
  type: TYPES.CLEAR_STORE,
  payload: null,
});

const add = movie => ({
  type: TYPES.LIST_ADD,
  payload: { movie },
});

const remove = movie => ({
  type: TYPES.LIST_REMOVE,
  payload: { movie },
});

export const login = (username, password) => async dispatch => {
  dispatch(loginRequest());
  try {
    const user = await UserController.login(username, password);
    dispatch(loginSuccess(user));
  } catch (error) {
    dispatch(loginError(error.message));
  }
};

export const logout = () => async dispatch => {
  try {
    await UserController.logout();
  } finally {
    dispatch(clearStore());
  }
};

export const addToList = movie => dispatch => {
  dispatch(add(movie));
};

export const removeFromList = movie => dispatch => {
  dispatch(remove(movie));
};
