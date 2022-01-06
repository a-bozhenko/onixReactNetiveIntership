import types from './types';

const initialState = {
  colorScheme: null,
};

export const reducer = (state = initialState, action) => {
  const { type } = action;

  switch (type) {
    case types.SET_COLOR_SCHEME: {
      return { colorScheme: action.colorScheme };
    }
    default:
      return state;
  }
};
