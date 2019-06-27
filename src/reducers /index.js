// import actions
import {
  FETCH_DATA_PENDING,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_ERROR
} from "../actions/index";

// set up initial state
let initialState = {
  error: null,
  data: [],
  loading: false
};

// root reducer
export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA_PENDING:
      return { ...state, loading: true };
    case FETCH_DATA_SUCCESS:
      return { ...state, data: action.payload };
    case FETCH_DATA_ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};
