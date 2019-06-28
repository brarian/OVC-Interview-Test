import React from "react";
import { Table } from "./Table";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { shallow } from "enzyme";
import { fetchData } from "./actions/index";
Enzyme.configure({ adapter: new Adapter() });

describe("<Table />", () => {
  it("should render table component", () => {
    let data = [];
    let dispatch = jest.fn();
    const wrapper = shallow(<Table data={data} fetchData={dispatch} />);
    expect(wrapper.hasClass("main"));
  });
  it("should check the fetchData in componentDidMount fired so there is data to display", () => {
    let data = [
      {
        id: 1,
        name: "Leanne Graham",
        username: "Bret",
        email: "Sincere@april.biz",
        address: [Object],
        phone: "1-770-736-8031 x56442",
        website: "hildegard.org",
        company: [Object]
      }
    ];
    const dispatch = jest.fn();
    const wrapper = shallow(<Table data={data} fetchData={dispatch} />);
    expect(dispatch).toHaveBeenCalledTimes(1);
  });
});
