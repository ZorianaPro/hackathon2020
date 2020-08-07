import React from "react";
import { shallow } from "enzyme";
import AddPersonSymbol from "./";

describe("AddPersonSymbol", () => {
  it("renders without crashing", () => {
    expect(shallow.bind(shallow, <AddPersonSymbol />)).not.toThrow();
  });

  it("renders as expected", () => {
    expect(shallow(<AddPersonSymbol />)).toMatchSnapshot();
  });
});
