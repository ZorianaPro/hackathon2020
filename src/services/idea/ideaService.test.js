import fetchMock from 'fetch-mock';
import config from '../config';
import ideaService from './';
import memberService from "../member";

describe('idea service', () => {
  describe('post()', () => {
    describe('and the API call succeeds', () => {
      let ideas;

      beforeEach((done) => {
        fetchMock.post(
          `${config.api.base}${config.api.ideas}`,
          [
            {
              id: 1,
              name: 'Retail (all)',
              description: 'Some description',
              team: []
            }
          ]
        );
        return ideaService.post().then((_ideas) => {
          ideas = _ideas;
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
          `${config.api.base}${config.api.ideas}`,
          500
        );
      });

      afterAll(() => {
        fetchMock.restore();
      });

      it('rejects with status', () => {
        expect(ideaService.post()).rejects.toThrow('500: Internal Server Error');
      });

      it('calls the API', () => {
        expect(fetchMock.called()).toBe(true);
      });
    });
  });
  describe('get()', () => {
    describe('and the API call succeeds', () => {
      let ideas;

      beforeEach((done) => {
        fetchMock.get(
          `${config.api.base}${config.api.ideas}`,
          [
            {
              id: 1,
              name: 'Retail (all)',
              description: 'Some description',
              team: []
            }
          ]
        );
        return ideaService.get().then((_ideas) => {
          ideas = _ideas;
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
        fetchMock.get(
          `${config.api.base}${config.api.ideas}`,
          500
        );
      });

      afterAll(() => {
        fetchMock.restore();
      });

      it('rejects with status', () => {
        expect(ideaService.get()).rejects.toThrow('500: Internal Server Error');
      });

      it('calls the API', () => {
        expect(fetchMock.called()).toBe(true);
      });
    });
  });
});