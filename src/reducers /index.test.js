import {
  FETCH_DATA_PENDING,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_ERROR
} from "../actions/index";

//test following actions:
//1. no action
//2. unknown action
//3. pending
//4. success
//5. failure

describe("rootReducer output", () => {
  it("should return current state when given no action", () => {});
  it("should return current state when given no action", () => {});
  it("should return pending:true state when given FETCH_DATA_PENDING", () => {});
  it("should return data when given FETCH_DATA_SUCCESS", () => {});
  it("should return error:true state when given FETCH_DATA_ERROR", () => {});
});
