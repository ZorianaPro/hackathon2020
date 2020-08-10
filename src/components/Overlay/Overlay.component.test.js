import React from 'react';
import { shallow, mount } from 'enzyme';
import { act } from 'react-dom/test-utils';
import Overlay from './';

describe('Overlay', () => {
  let overlay;

  it('renders without crashing', () => {
    expect(shallow.bind(shallow, <Overlay />))
      .not
      .toThrow();
  });

  it('renders as expected', () => {
    expect(shallow(<Overlay />))
      .toMatchSnapshot();
  });

  describe('children', () => {
    it('renders all the children', () => {
      expect(
        shallow(
          <Overlay>
            <p>test</p>
          </Overlay>
        ).exists('p')
      ).toBe(true);
    });
  });

  describe('when clicking on the mask', () => {
    beforeEach(() => {
      overlay = mount(<Overlay/>);
      overlay.find('.Overlay-Mask')
        .simulate('click');
    });

    it('closes the overlay', () => {
      expect(overlay.exists('.Overlay--isClosing'))
        .toBe(true);
    });
  });

  describe('animationDurationMs', () => {
    beforeAll(() => {
      jest.useFakeTimers();
      overlay = mount(<Overlay animationDurationMs={ 100 } />);
    });

    it('renders an opening overlay', () => {
      expect(overlay.exists('.Overlay--isOpening'))
        .toBe(true);
    });

    describe('after animationDurationMs milliseconds', () => {
      beforeAll(() => {
        act(() => {
          jest.advanceTimersByTime(100);
        });

        overlay.update();
      });

      it('no longer renders an opening overlay', () => {
        expect(overlay.exists('.Overlay--isOpening'))
          .toBe(false);
      });

      it('renders an open overlay', () => {
        expect(overlay.exists('.Overlay--isOpen'))
          .toBe(true);
      });
    });
  });

  describe('shouldClose', () => {
    let onClose;

    beforeAll(() => {
      jest.useFakeTimers();
      onClose = jest.fn();
      overlay = mount(<Overlay onClose={ onClose }/>);
    });

    afterAll(() => {
      jest.useRealTimer();
    });

    it('renders an opening overlay', () => {
      expect(overlay.exists('.Overlay--isOpening'))
        .toBe(true);
    });

    describe('when shouldClose is true', () => {
      beforeAll(() => {
        act(() => {
          jest.runOnlyPendingTimers();
        });

        overlay.update();
      });

      it('renders an open overlay', () => {
        expect(overlay.exists('.Overlay--isOpen'))
          .toBe(true);
      });

      beforeEach(() => {
        act(() => {
          overlay.setProps({ shouldClose: true });
        });

        overlay.update();
      });

      it('starts the closing animation', () => {
        expect(overlay.exists('.Overlay--isClosing'))
          .toBe(true);
      });

      describe('after the animation has finished', () => {
        beforeEach(() => {
          act(() => {
            jest.runOnlyPendingTimers();
          });

          overlay.update();
        });

        it('removes the isOpen class', () => {
          expect(overlay.exists('.Overlay--isOpen'))
            .toBe(false);
        });

        it('removes the isClosing class', () => {
          expect(overlay.exists('.Overlay--isClosing'))
            .toBe(false);
        });

        it('does not render anything', () => {
          expect(overlay.exists('.Overlay > *'))
            .toBe(false);
        });

        it('calls the onClose callback', () => {
          expect(onClose)
            .toHaveBeenCalled();
        });
      });
    });
  });
});
