import React from "react";
import Item from "../src/item";

// Use for every test file
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

describe("Item", () => {
  let itemComponent;

  beforeEach(() => {
    itemComponent = shallow(<Item />);
  });

  test("render a initial state of the number of items", () => {
    expect(itemComponent.state("modal")).toBe(false);
  });

  test("render the click event and changes the state of the table which is book/red", () => {
    itemComponent.find("#add-Item").simulate("click");
    expect(itemComponent.state("modal")).toBe(true);
  });

  test("it can book or unbook a table", () => {
    itemComponent.find("#add-Item").simulate("click");
    expect(itemComponent.state("modal")).toBe(true);
    itemComponent.find("#add-Item").simulate("click");
    expect(itemComponent.state("modal")).toBe(false);
  });

  test("on click render another component", () => {
    itemComponent.find("#add-Item").simulate("click");
    expect(itemComponent.find("#itemModal").text()).toBe("<ItemModal />");
  });
});
