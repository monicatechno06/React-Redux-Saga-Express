/* eslint-disable default-case */
import * as actionTypes from '../actions/actions';

const initialState = {
  total: 0,
  discountAmount: 0
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD:
      return {
        ...state,
        total: state.total + action.val
      }
    case actionTypes.SUBTRACT:
      return {
        ...state,
        total: state.total - action.val
      }
    // apply discount on total amount
    case actionTypes.COUPON_FETCH_SUCCEEDED:
      return {
        ...state,
        total: state.total - action.val
      }
  }
  return state;
};

export default reducer;