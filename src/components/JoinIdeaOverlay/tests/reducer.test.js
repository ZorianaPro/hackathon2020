import joinIdeaOverlayReducer from "../reducer";

describe('joinIdeaOverlayReducer', () => {
  const INITIAL_STATE = {
    open: false,
    content: {},
    error: '',
    userInfo: {}
  };

  test('should return the initial state', () => {
    expect(joinIdeaOverlayReducer(undefined, INITIAL_STATE)).toEqual(INITIAL_STATE);
  });

  test('should handle "OPEN:JOINIDEA:OVERLAY" action', () => {
    const mockData = {
      "name": "Offer",
      "description": "description",
      "team": []
    };
    expect(joinIdeaOverlayReducer(INITIAL_STATE, { type: 'OPEN:JOINIDEA:OVERLAY', value: mockData }))
      .toEqual({
      ...INITIAL_STATE,
      open: true,
      content: mockData
    })
  });

  test('should handle "CLOSE:JOINIDEA:OVERLAY" action', () => {
    expect(joinIdeaOverlayReducer({...INITIAL_STATE}, { type: "CLOSE:JOINIDEA:OVERLAY" }))
      .toEqual({
        ...INITIAL_STATE,
        open: false
      })
  });

  test('should handle "SUBMIT:JOINIDEA:OVERLAY" action', () => {
    const mockData = {
      "firstName": "Zori"
    };
    expect(joinIdeaOverlayReducer({...INITIAL_STATE}, { type: "SUBMIT:JOINIDEA:OVERLAY", value: mockData }))
      .toEqual({
        ...INITIAL_STATE,
        userInfo: mockData
      })
  });
});