import React from "react";
import { shallow } from "enzyme";
import AddPersonSVG from "./";

describe("AddPersonSVG", () => {
  it("renders without crashing", () => {
    expect(shallow.bind(shallow, <AddPersonSVG />)).not.toThrow();
  });

  it("renders as expected", () => {
    expect(shallow(<AddPersonSVG />)).toMatchSnapshot();
  });
});
