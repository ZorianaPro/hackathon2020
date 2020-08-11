import { put, takeLatest } from 'redux-saga/effects';
import { getAllIdeas, ideasActionWatcher } from './ideas';
import { fetchAllIdeas } from '../components/App/actions';

describe('ideas saga', () => {
  test('should dispatch action "FETCH:ALL:IDEAS" ', () => {
    const generator = ideasActionWatcher();
    expect(generator.next().value)
      .toEqual(takeLatest(fetchAllIdeas, getAllIdeas));
  });

  test('should dispatch action "RESULT:IDEAS" with result from fetch API', () => {
    const mockData = [
      {
        'team': [],
        '_id': '5efca4b11d559156249e7ef1'
      }];
    const generator = getAllIdeas();
    generator.next();
    expect(generator.next(mockData).value)
      .toEqual(put({
        type:'RESULT:IDEAS',
        value: mockData
      }));
  });
});
