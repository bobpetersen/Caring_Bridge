import { put, takeLatest, takeEvery, call } from 'redux-saga/effects';
import { USER_ACTIONS } from '../actions/userActions';
import { callUser } from '../requests/userRequests';
import axios from 'axios';

// worker Saga: will be fired on "FETCH_USER" actions
function* fetchUser() {
  try {
    yield put({ type: USER_ACTIONS.REQUEST_START });
    const user = yield callUser();
    yield put({
      type: USER_ACTIONS.SET_USER,
      user,
    });
    yield put({
      type: USER_ACTIONS.REQUEST_DONE,
    });
  } catch (error) {
    yield put({
      type: USER_ACTIONS.REQUEST_DONE,
    });
    yield put({
      type: USER_ACTIONS.USER_FETCH_FAILED,
      message: error.message,
    });
  }
}

// edit user status
// action should have payload: true or false, 
function* activeUser(action) {
  yield call(axios.put, 'api/user/', {is_active: action.payload});
  yield put({type: 'ALL_USERS'});
}

// edit admin status
// action should have payload: true or false
function* adminStatus(action) {
  yield call(axios.put, 'api/user/', {is_admin: action.payload});
  yield put({type: 'ALL_USERS'});
}

// get all users from database
function* getAllUsers() {
  let users = yield call(axios.get, 'api/user/all');
  yield put({type: 'SET_ALL_USERS', payload: users.data});
}

/*
  Starts fetchUser on each dispatched `FETCH_USER` action.
  Allows concurrent fetches of user.
*/
// function* userSaga() {
//   yield takeEvery('FETCH_USER', fetchUser);
// }

/*
  Alternatively you may use takeLatest.

  Does not allow concurrent fetches of user. If "FETCH_USER" gets
  dispatched while a fetch is already pending, that pending fetch is cancelled
  and only the latest one will be run.
*/
function* userSaga() {
  yield takeLatest(USER_ACTIONS.FETCH_USER, fetchUser);
  yield takeEvery('ACTIVE_USER', activeUser);
  yield takeEvery('ADMIN_STATUS', adminStatus);
  yield takeEvery('ALL_USERS', getAllUsers);
}

export default userSaga;
