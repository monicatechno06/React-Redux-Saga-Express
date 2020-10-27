export const ADD = 'ADD';
export const SUBTRACT = 'SUBTRACT';
export const STORE_RESULT = 'STORE_RESULT';
export const COUPON_FETCH_REQUESTED = 'COUPON_FETCH_REQUESTED';
export const COUPON_FETCH_SUCCEEDED = 'COUPON_FETCH_SUCCEEDED';

export const add = (value) => {
  return {
    type: ADD,
    val: value
  };
};

export const subtract = (value) => {
  return {
    type: SUBTRACT,
    val: value
  };
};

export const storeResult = (res) => {
  return {
    type: STORE_RESULT,
    result: res
  };
};

export const getCoupons = () => {
  return {
    type: COUPON_FETCH_REQUESTED,
  };
};