export const actions = {
  fetchAllIdeas: 'FETCH:ALL:IDEAS',
  result: 'RESULT:IDEAS',
  error: 'ERROR:IDEAS'
};

export const fetchAllIdeas = (credentials = '') => ({
  type: actions.fetchAllIdeas,
  value: credentials
});

export const result = (ideas = []) => ({
  type: actions.result,
  value: ideas
});

export const error = (err) => ({
  type: actions.error,
  value: err
});

export default {
  fetchAllIdeas,
  result,
  error
};
