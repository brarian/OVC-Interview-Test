//test fetch sucess
//test fetch error
import {
  url,
  FETCH_DATA_PENDING,
  FETCH_DATA_SUCCESS,
  fetchDataSuccess,
  FETCH_DATA_ERROR,
  fetchDataError,
  fetchData
} from "./index";

describe("fetch data", () => {
  it("should dispatch fetchDataSuccess", () => {
    const data = [];
    global.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        ok: true,
        json() {
          return data;
        }
      })
    );

    const dispatch = jest.fn();
    return fetchData()(dispatch).then(() => {
      expect(fetch).toHaveBeenCalledWith(url);
      expect(dispatch).toHaveBeenCalledWith(fetchDataSuccess(data));
    });
  });

  it("should return an error if the promise rejects", () => {
    const error = {};
    global.fetch = jest.fn().mockImplementation(() => {
      return Promise.reject(error);
    });

    const dispatch = jest.fn();
    return fetchData()(dispatch).then(() => {
      expect(fetch).toHaveBeenCalledWith(url);
      expect(dispatch).toHaveBeenCalledWith(fetchDataError(error));
    });
  });
});
