export const actions = {
    fetchAllIdeas: 'FETCH:ALL:IDEAS',
    fetchFakeIdeas: 'FETCH:FAKE:IDEAS',
    result: 'RESULT:IDEAS',
    error: 'ERROR:IDEAS'
};

export const fetchAllIdeas = (credentials='') => ({
    type: actions.fetchAllIdeas,
    value: credentials
});

export const fetchFakeIdeas = (credentials='') => ({
    type: actions.fetchFakeIdeas,
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
    fetchFakeIdeas,
    result,
    error
};
