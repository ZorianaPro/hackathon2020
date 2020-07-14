import React from 'react';
import { shallow } from "enzyme";
import Footer from './';

describe('Footer', () => {
  it('renders without crashing', () => {
    expect(shallow.bind(shallow, <Footer/>)).not.toThrow();
  });

  it('renders as expected', () => {
    expect(shallow(<Footer/>)).toMatchSnapshot();
  });
});

