const initialState = {
  version: process.env.REACT_APP_VERSION,
};

export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
