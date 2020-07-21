import 'isomorphic-fetch';
import config from '../config';
import headers from '../../support/headers';
import mimetypes from '../../support/mimetypes';
import ideas from './ideas.json';

const post = (data) =>
  fetch(`${config.api.base}${config.api.ideas}`, {
    method: 'POST',
    mode: 'cors',
    headers: {
      [headers.contentType]: mimetypes.json,
      [headers.accept]: mimetypes.json
    },
    body: JSON.stringify(data)
  }).then((res) => {
    if (res.ok) {
      return res.json();
    }
    throw res.json();
  });

const get = () => {
  return fetch(`${config.api.base}${config.api.ideas}`, {
    method: 'GET',
    mode: 'cors',
    headers: {
      [headers.contentType]: mimetypes.json,
      [headers.accept]: mimetypes.json
    }
  }).then((res) => {
    if (res.ok) {
      return res;
    }
    throw res.json();
  })
};

const ideasMock = () => {
  return ideas;
};

export default {
  post,
  get,
  ideasMock
};
