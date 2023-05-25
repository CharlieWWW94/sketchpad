import { call, put, takeEvery} from 'redux-saga/effects';
import { logIn } from '../slices/userSlice';
import AccountUtils from '../../utils/AccountUtils/AccountUtils';

export function* createAccountRequest(action) {
  console.log("SAGA HAS BEEN CALLED");
  const {username, password} = action.payload;
  const res = yield call(AccountUtils.createAccount, username, password);
  console.log('here is the res', res);
}

export function* loginRequest(action) {
  console.log("LOGIN SAGA HAS BEEN CALLED");
  const {username, password} = action.payload;
  const res = yield call(AccountUtils.login, username, password);
  console.log('here is the login res', res);
  yield put(logIn());
}

export default function* userSaga() {
  yield takeEvery('user/createAccountRequest', createAccountRequest);
  yield takeEvery('user/loginRequest', loginRequest);
}
