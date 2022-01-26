import types from './types';

const actions = {
  setColorScheme: (colorScheme) => {
    return { type: types.SET_COLOR_SCHEME, colorScheme };
  },
  setPushNotificationToken: (pushNotificationToken) => {
    return { type: types.SET_PUSH_NOTIFICATION_TOKEN, pushNotificationToken };
  },
};

export default actions;
