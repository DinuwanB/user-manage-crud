import { put, all, fork, call, takeEvery, delay } from "redux-saga/effects";
import {
  UserListConstants,
  UserCreateConstants,
  UserDeleteConstants,
  UserDetailConstants,
  UserUpdateConstants,
} from "../types/user.types";
import {
  getUserListAction,
  getUserListErrorHideAction,
  getUserListErrorShowAction,
  getUserListSuccessAction,
  createUserSuccessAction,
  createUserErrorHideAction,
  createUserErrorShowAction,
  UserDetailErrorHideAction,
  UserDetailSuccessAction,
  UserDetailErrorShowAction,
  UserEditErrorHide,
  UserEditErrorShowAction,
  UserEditSuccessAction,
  deleteUserSuccessAction,
  deleteUserErrorHideAction,
  deleteUserErrorShowAction,
} from "../actions/user.actions";
import {
  fetchUserList,
  fetchCreateUser,
  fetchUserDetail,
  fetchUserEdit,
  fetchDeleteUser,
} from "../services/user.services";

//user list saga
export function* getUserListSaga() {
  yield takeEvery(UserListConstants.GET_USER_LIST, function* (payload) {
    try {
      const data = yield call(fetchUserList, payload.filters);
      yield put(getUserListSuccessAction(data?.data?.data));
    } catch (error) {
      yield put(getUserListErrorShowAction(error.message));
      yield delay(2000);
      yield put(getUserListErrorHideAction());
    }
  });
}

//create user saga
export function* createUserSaga() {
  yield takeEvery(UserCreateConstants.USER_CREATE, function* (payload) {
    const navigate = payload.history;
    try {
      yield call(fetchCreateUser, payload.data);
      yield put(createUserSuccessAction());
      navigate(`/`);
    } catch (error) {
      yield put(createUserErrorShowAction(error.response.data.errors));
      yield delay(4000);
      yield put(createUserErrorHideAction());
    }
  });
}

//delete user saga
export function* deleteUserSaga() {
  yield takeEvery(UserDeleteConstants.USER_DELETE, function* (payload) {
    try {
      yield call(fetchDeleteUser, payload.data);
      yield put(deleteUserSuccessAction());
      yield put(getUserListAction());
    } catch (error) {
      yield put(deleteUserErrorShowAction(error.message));
      yield delay(4000);
      yield put(deleteUserErrorHideAction());
    }
  });
}

//user detail saga
export function* UserDetailSaga() {
  yield takeEvery(UserDetailConstants.USER_DETAIL, function* (payload) {
    try {
      const data = yield call(fetchUserDetail, payload.id);
      yield put(UserDetailSuccessAction(data.data.data));
    } catch (error) {
      yield put(UserDetailErrorShowAction(error.message));
      yield delay(4000);
      yield put(UserDetailErrorHideAction());
    }
  });
}

//user edit saga
export function* UserEditSaga() {
  yield takeEvery(UserUpdateConstants.USER_UPDATE, function* (payload) {
    const navigate = payload.history;
    
    try {
      yield call(fetchUserEdit, payload.data, payload.id);
      yield put(UserEditSuccessAction());
      navigate(`/`);
    } catch (error) {
      yield put(UserEditErrorShowAction(error.response.data.errors));
      yield delay(4000);
      yield put(UserEditErrorHide());
    }
  });
}

//export root saga
export default function* rootSaga() {
  yield all([
    fork(getUserListSaga),
    fork(createUserSaga),
    fork(deleteUserSaga),
    fork(UserDetailSaga),
    fork(UserEditSaga),
  ]);
}
