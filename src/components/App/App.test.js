import React from "react";
import { shallow } from "enzyme";
import App from "./";

describe("App", () => {
  it("renders without crashing", () => {
    expect(shallow.bind(shallow, <App />)).not.toThrow();
  });

  it("renders as expected", () => {
    expect(shallow(<App />)).toMatchSnapshot();
  });
});
