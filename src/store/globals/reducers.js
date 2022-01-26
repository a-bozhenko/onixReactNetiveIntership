import types from './types';

const initialState = {
  colorScheme: null,
  pushNotificationToken: null,
};

export const reducer = (state = initialState, action) => {
  const { type } = action;

  switch (type) {
    case types.SET_COLOR_SCHEME: {
      return { colorScheme: action.colorScheme };
    }
    case types.SET_PUSH_NOTIFICATION_TOKEN: {
      return { pushNotificationToken: action.pushNotificationToken };
    }
    default:
      return state;
  }
};
