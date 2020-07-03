import { put, takeLatest } from 'redux-saga/effects';
import { fetchIdeas, catchError, getIdeas, ideasActionWatcher } from './ideas'

describe('ideas saga', () => {
    test('should dispatch action "FETCH:IDEAS" ', () => {
        const generator = ideasActionWatcher();
        expect(generator.next().value).toEqual(takeLatest('FETCH:IDEAS', getIdeas));
        expect(generator.next().done).toBeTruthy();
    });

    test('should dispatch action "RESULT:IDEAS" with result from fetch API', () => {
        const mockData = [{
            "team": [{
                "_id":"5efcb61837631f764b0733b9",
                "firstName":"hhhjb",
                "lastName":"cfhdhg",
                "email":"jndgd@ddd.ddd",
                "position":"fghgfh",
                "createdAt":"2020-07-01T16:13:12.084Z",
                "updatedAt":"2020-07-01T16:13:12.084Z","__v":0
            }],
            "_id":"5efca4b11d559156249e7ef1",
            "name":"ghf",
            "description":"hgfghfghg",
            "createdAt":"2020-07-01T14:58:57.947Z",
            "updatedAt":"2020-07-02T14:44:28.886Z","__v":0
        }];
        const generator = getIdeas();
        generator.next();
        expect(generator.next(mockData).value).toEqual(put({type:"RESULT:IDEAS", value: mockData}));
        expect(generator.next().done).toBeTruthy();
    });

});
