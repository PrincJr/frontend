import {all, takeLatest} from 'redux-saga/effects';

import * as General from './modules/general/saga'

export default function* rootSaga() {
  return yield all([
    takeLatest('@general/getPosts', General.setPost),
  ]);
}
