import { LOCALE_TYPES } from './constants';
import types from './types';

const initialState = {
  locale: LOCALE_TYPES.EN,
};

export const reducer = (state = initialState, action) => {
  const { type } = action;

  switch (type) {
    case types.SET_LOCALE: {
      return { locale: action.locale };
    }
    default:
      return state;
  }
};
