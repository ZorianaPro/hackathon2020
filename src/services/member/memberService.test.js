import fetchMock from 'fetch-mock';
import config from '../config';
import memberService from './';

describe('memberService', () => {
  describe('post()', () => {
    describe('and the API call succeeds', () => {
      beforeEach((done) => {
        fetchMock.post(
          `${config.api.base}${config.api.members}`,
          [
            {
              id: 1,
              name: 'Retail (all)',
              description: 'Some description',
              team: []
            }
          ]
        );
        return memberService.post().then((_members) => {
          done();
        });
      });

      afterEach(() => {
        fetchMock.restore();
      });

      it('calls the API', () => {
        expect(fetchMock.called()).toBe(true);
      });
    });

    describe('and the API call fails', () => {
      beforeAll(() => {
        fetchMock.post(
          `${config.api.base}${config.api.members}`,
          500
        );
      });

      afterAll(() => {
        fetchMock.restore();
      });

      it('rejects with status', () => {
        expect(memberService.post()).rejects.toThrow('500: Internal Server Error');
      });

      it('calls the API', () => {
        expect(fetchMock.called()).toBe(true);
      });
    });
  });
});