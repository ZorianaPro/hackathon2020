import React from "react";
import { shallow, mount } from "enzyme";
import Nav from "../Nav";

describe("Header", () => {
  let nav;

  beforeEach(() => {
    nav = mount(<Nav />);
  });

  it("renders without crashing", () => {
    expect(shallow.bind(shallow, <Nav />)).not.toThrow();
  });

  it("renders as expected", () => {
    expect(nav).toMatchSnapshot();
  });
});
