import { call, put, takeLatest } from 'redux-saga/effects'
import { getPizzaCoupons } from '../api'

function* fetchCoupons(action) {
  try {
     const { data } = yield call(getPizzaCoupons);
     yield put({type: "COUPON_FETCH_SUCCEEDED", val: data.discount});
  } catch (error) {
     yield put({type: "COUPON_FETCH_FAILED", message: error.message});
  }
}

function* applyCouponSaga() {
  yield takeLatest("COUPON_FETCH_REQUESTED", fetchCoupons);
}

export {
  applyCouponSaga
}