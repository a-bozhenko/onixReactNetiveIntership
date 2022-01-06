import types from './types';

const actions = {
  setColorScheme: (colorScheme) => {
    return { type: types.SET_COLOR_SCHEME, colorScheme };
  },
};

export default actions;
