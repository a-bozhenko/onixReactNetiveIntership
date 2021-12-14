import types from './types';

const actions = {
  setLocale: (newLocale) => {
    return { type: types.SET_LOCALE, locale: newLocale };
  },
};

export default actions;
