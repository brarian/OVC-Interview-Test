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
