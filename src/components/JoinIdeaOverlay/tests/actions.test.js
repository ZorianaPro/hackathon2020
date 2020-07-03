import actions, {open} from '../actions';


describe('ACTIONS', () => {
  test('should create an action with correct type', () => {
    const expectedAction = {
      type: 'CLOSE:JOINIDEA:OVERLAY'
    };
    expect(actions.close()).toEqual(expectedAction)
  });

  test('should create an action with correct type and value', () => {
    const mockData = {
      "name": "Offer",
      "description": "description",
      "team": []
    };
    const expectedAction = {
      type: 'OPEN:JOINIDEA:OVERLAY',
      value: mockData
    };
    expect(actions.open(mockData)).toEqual(expectedAction)
  })
});