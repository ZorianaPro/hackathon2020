import React from "react";
import { shallow } from "enzyme";
import LightningSymbol from ".";

describe("LightningSymbol", () => {
  it("renders without crashing", () => {
    expect(shallow.bind(shallow, <LightningSymbol />)).not.toThrow();
  });

  it("renders as expected", () => {
    expect(shallow(<LightningSymbol />)).toMatchSnapshot();
  });
});
