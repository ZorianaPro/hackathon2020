import React from "react";
import { shallow, mount } from "enzyme";
import Header from "../Header";

describe("Header", () => {
  let header;

  beforeEach(() => {
    header = mount(<Header />);
  });

  it("renders without crashing", () => {
    expect(shallow.bind(shallow, <Header />)).not.toThrow();
  });

  it("renders as expected", () => {
    expect(header).toMatchSnapshot();
  });
});
