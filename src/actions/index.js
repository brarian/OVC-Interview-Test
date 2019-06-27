//actions
//1. fetch success
//2. Fetch data error
//3. fetch data pending

export const url = `https://jsonplaceholder.typicode.com/users`;

export const FETCH_DATA_PENDING = "FETCH_DATA_PENDING";

export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
export const fetchDataSuccess = data => {
  return {
    type: FETCH_DATA_SUCCESS,
    payload: data
  };
};

export const FETCH_DATA_ERROR = "FETCH_DATA_ERROR";
export const fetchDataError = error => {
  return {
    type: FETCH_DATA_ERROR,
    error
  };
};

export const fetchData = () => dispatch => {
  return fetch(url)
    .then(res => {
      if (!res.ok) {
        return res.statusText("error fetching data");
      }
      return res.json();
    })
    .then(data => {
      dispatch(fetchDataSuccess(data));
    })
    .catch(error => dispatch(fetchDataError(error)));
};
