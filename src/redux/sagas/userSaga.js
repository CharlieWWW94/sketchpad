import { call, put, takeEvery} from 'redux-saga/effects';
import { logIn } from '../slices/userSlice';
import AccountUtils from '../../utils/AccountUtils/AccountUtils';

export function* createAccountRequest(action) {
  // Needs try catch
  const {username, password} = action.payload;
  const res = yield call(AccountUtils.createAccount, username, password);
}

export function* loginRequest(action) {
  // Needs try catch
  const {username, password} = action.payload;
  const res = yield call(AccountUtils.login, username, password);
  yield put(logIn());
}

export default function* userSaga() {
  yield takeEvery('user/createAccountRequest', createAccountRequest);
  yield takeEvery('user/loginRequest', loginRequest);
}
