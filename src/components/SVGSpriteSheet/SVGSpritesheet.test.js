import React from 'react';
import SVGSpriteSheet from './';
import { shallow } from 'enzyme';

describe('SVGSpriteSheet', () => {
  it('renders without crashing', () => {
    shallow(<SVGSpriteSheet />);
  });

  it('renders as expected', () => {
    expect(shallow(<SVGSpriteSheet />)).toMatchSnapshot();
  });

  describe('id', () => {
    it('uses the id given in props', () => {
      expect(shallow(<SVGSpriteSheet id='foo' />).exists('#foo')).toBe(true);
    });
  });

  describe('className', () => {
    it('uses the className given in props', () => {
      expect(shallow(<SVGSpriteSheet className='bar' />).exists('.bar')).toBe(
        true
      );
    });
  });
});
