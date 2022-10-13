import {
  UserListConstants,
  UserCreateConstants,
  UserDeleteConstants,
  UserDetailConstants,
  UserUpdateConstants,
} from "../types/user.types";

const initialState = {
  userData: [],
  currentData: null,
  loading: false,
  messageAlert: null,
  showMessage: false,
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    //User get list reducers
    case UserListConstants.GET_USER_LIST:
      return {
        ...state,
        loading: true,
      };
    case UserListConstants.GET_USER_LIST_SUCCESS:
      return {
        ...state,
        userData: action.data,
        loading: false,
      };
    case UserListConstants.GET_USER_LIST_ERROR_SHOW:
      return {
        ...state,
        loading: false,
        showMessage: true,
        messageAlert: action.message,
      };
    case UserListConstants.GET_USER_LIST_ERROR_HIDE:
      return {
        ...state,
        showMessage: false,
        messageAlert: null,
      };
    case UserListConstants.GET_USER_LIST_CLEAR:
      return {
        ...state,
        userData: [],
        loading: false,
        showMessage: false,
        messageAlert: null,
      };
    //User create reducers
    case UserCreateConstants.USER_CREATE:
      return {
        loading: true,
        showMessage: false,
        messageAlert: null,
        ...state,
      };
    case UserCreateConstants.USER_CREATE_SUCCESS:
      return {
        loading: false,
        messageAlert: action.message,
        ...state,
      };
    case UserCreateConstants.USER_CREATE_ERROR_SHOW:
      return {
        loading: false,
        showMessage: true,
        messageAlert: action.message,
        ...state,
      };
    case UserCreateConstants.USER_CREATE_ERROR_HIDE:
      return {
        loading: false,
        showMessage: false,
        messageAlert: null,
        ...state,
      };
    //User delete reducers
    case UserDeleteConstants.USER_DELETE:
      return {
        loading: true,
        showMessage: false,
        messageAlert: null,
      };
    case UserDeleteConstants.USER_DELETE_SUCCESS:
      return {
        loading: false,
      };
    case UserDeleteConstants.USER_DELETE_ERROR_SHOW:
      return {
        loading: false,
        showMessage: true,
        messageAlert: action.message,
      };
    case UserDeleteConstants.USER_DELETE_ERROR_HIDE:
      return {
        loading: false,
        showMessage: false,
        messageAlert: null,
      };
    //User detail reducers
    case UserDetailConstants.USER_DETAIL:
      return {
        loading: true,
        ...state,
      };
    case UserDetailConstants.USER_DETAIL_SUCCESS:
      return {
        ...state,
        currentData: action.data,
        loading: false,
        showMessage: false,
        messageAlert: null,
      };
    case UserDetailConstants.USER_DETAIL_ERROR_SHOW:
      return {
        ...state,
        loading: false,
        showMessage: true,
        messageAlert: action.message,
      };
    case UserDetailConstants.USER_DETAIL_ERROR_HIDE:
      return {
        ...state,
        loading: false,
        showMessage: false,
        messageAlert: null,
      };
    case UserDetailConstants.USER_DETAIL_CLEAR:
      return {
        ...state,
        currentData: null,
        loading: false,
        showMessage: false,
        messageAlert: null,
      };
    //User update reducers
    case UserUpdateConstants.USER_UPDATE:
      return {
        loading: true,
        ...state,
      };
    case UserUpdateConstants.USER_UPDATE_SUCCESS:
      return {
        loading: false,
        showMessage: false,
        messageAlert: null,
        ...state,
      };
    case UserUpdateConstants.USER_UPDATE_ERROR_SHOW:
      return {
        loading: false,
        showMessage: true,
        messageAlert: action.message,
        ...state,
      };
    case UserUpdateConstants.USER_UPDATE_ERROR_HIDE:
      return {
        loading: false,
        showMessage: false,
        messageAlert: null,
        ...state,
      };
    default:
      return state;
  }
};
