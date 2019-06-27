import {
  FETCH_DATA_PENDING,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_ERROR
} from "../actions/index";

import { rootReducer } from "./index";

let initialState = {
  error: null,
  data: [],
  loading: false
};
//test following actions:
//1. no action
//2. unknown action
//3. pending
//4. success
//5. failure

describe("rootReducer output", () => {
  it("should return current state when given no action", () => {
    const state = rootReducer(initialState, { type: "" });
    expect(state).toEqual(initialState);
  });
  it("should return current state when given no action", () => {
    let state = rootReducer(initialState, { type: "NOT_SPECIFIED" });
    expect(state).toEqual(initialState);
  });
  it("should return pending:true state when given FETCH_DATA_PENDING", () => {
    let state = rootReducer(initialState, { type: FETCH_DATA_PENDING });
    expect(state).toEqual({
      error: null,
      data: [],
      loading: true
    });
  });
  it("should return data when given FETCH_DATA_SUCCESS", () => {
    const data = {
      id: 1,
      name: "Leanne Graham",
      username: "Bret",
      email: "Sincere@april.biz",
      address: {
        street: "Kulas Light",
        suite: "Apt. 556",
        city: "Gwenborough",
        zipcode: "92998-3874",
        geo: {
          lat: "-37.3159",
          lng: "81.1496"
        }
      },
      phone: "1-770-736-8031 x56442",
      website: "hildegard.org",
      company: {
        name: "Romaguera-Crona",
        catchPhrase: "Multi-layered client-server neural-net",
        bs: "harness real-time e-markets"
      }
    };
    let state = rootReducer(initialState, {
      type: FETCH_DATA_SUCCESS,
      payload: data
    });
    expect(state.data).toBeDefined();
    expect(state.data).toMatchObject(data);
  });
  it("should return error:true state when given FETCH_DATA_ERROR", () => {
    let state = rootReducer(initialState, {
      type: FETCH_DATA_ERROR,
      payload: 404
    });
    expect(state.error).toBeDefined();
    expect(state.error).toEqual(404);
  });
});
