import {
  UserListConstants,
  UserCreateConstants,
  UserDeleteConstants,
  UserDetailConstants,
  UserUpdateConstants,
} from "../types/user.types";

//User List Actions
export const getUserListAction = (filters) => ({
  type: UserListConstants.GET_USER_LIST,
  filters,
});

export const getUserListSuccessAction = (data) => ({
  type: UserListConstants.GET_USER_LIST_SUCCESS,
  data,
});

export const getUserListErrorShowAction = (message) => ({
  type: UserListConstants.GET_USER_LIST_ERROR_SHOW,
  message,
});
export const getUserListErrorHideAction = () => ({
  type: UserListConstants.GET_USER_LIST_ERROR_HIDE,
});

export const getUserListClearAction = () => ({
  type: UserListConstants.GET_USER_LIST_CLEAR,
});

//User Create Actions
export const createUserAction = (data, history) => ({
  type: UserCreateConstants.USER_CREATE,
  data,
  history,
});

export const createUserSuccessAction = () => ({
  type: UserCreateConstants.USER_CREATE_SUCCESS,
});

export const createUserErrorShowAction = (message) => ({
  type: UserCreateConstants.USER_CREATE_ERROR_SHOW,
  message,
});

export const createUserErrorHideAction = () => ({
  type: UserCreateConstants.USER_CREATE_ERROR_HIDE,
});

//User Delete start
export const deleteUserAction = (data, message) => ({
  type: UserDeleteConstants.USER_DELETE,
  data,
});

export const deleteUserSuccessAction = () => ({
  type: UserDeleteConstants.USER_DELETE_SUCCESS,
});

export const deleteUserErrorShowAction = (message) => ({
  type: UserDeleteConstants.USER_DELETE_ERROR_SHOW,
  message,
});

export const deleteUserErrorHideAction = () => ({
  type: UserDeleteConstants.USER_DELETE_ERROR_HIDE,
});

//User Details Actions
export const UserDetailAction = (id) => ({
  type: UserDetailConstants.USER_DETAIL,
  id,
});
export const UserDetailSuccessAction = (data) => ({
  type: UserDetailConstants.USER_DETAIL_SUCCESS,
  data,
});
export const UserDetailErrorShowAction = (message) => ({
  type: UserDetailConstants.USER_DETAIL_ERROR_SHOW,
  message,
});
export const UserDetailErrorHideAction = () => ({
  type: UserDetailConstants.USER_DETAIL_ERROR_HIDE,
});
export const UserDetailClearAction = () => ({
  type: UserDetailConstants.USER_DETAIL_CLEAR,
});

//User Update Actions
export const UserEditAction = (data, id, history) => ({
  type: UserUpdateConstants.USER_UPDATE,
  data,
  id,
  history
});

export const UserEditSuccessAction = () => ({
  type: UserUpdateConstants.USER_UPDATE_SUCCESS,
});

export const UserEditErrorShowAction = (message) => ({
  type: UserUpdateConstants.USER_UPDATE_ERROR_SHOW,
  message,
});

export const UserEditErrorHide = () => ({
  type: UserUpdateConstants.USER_UPDATE_ERROR_HIDE,
});
