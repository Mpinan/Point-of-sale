import React from "react";

// Use for every test file
import { configure, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import ItemModal from "../src/itemModal";

configure({ adapter: new Adapter() });

describe("ItemModal", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<ItemModal />);
  });

  test("render a initial state of items", () => {
    expect(wrapper.state("amount")).toBe(0);
  });
});
