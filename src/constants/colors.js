import {
  Platform,
  // PlatformColor,
} from 'react-native';

const LIGHT_THEME = {
  name: 'LIGHT_THEME',
  primary: 'rgb(255, 45, 85)',
  background: 'rgb(242, 242, 242)',
  border: 'rgb(216, 216, 216)',
  card: 'rgb(255, 255, 255)',
  notification: 'rgb(255, 59, 48)',
  text: 'rgb(28, 28, 30)',
};

export const COLORS = {
  LIGHT_THEME,
  DARK_THEME: {
    name: 'DARK_THEME',

    primary: 'rgb(255,179,48)',
    background: 'rgb(28, 28, 30)',
    border: 'rgb(28, 28, 30)',
    card: 'rgb(28, 28, 30)',
    notification: 'rgb(255,179,48)',
    text: 'rgb(242, 242, 242)',
  },
  USER_THEME: {
    name: 'USER_THEME',

    ...Platform.select({
      ios: {
        // text: PlatformColor('label'),
        // background:
        //   PlatformColor('systemTealColor'),

        background: 'rgb(28, 28, 30)',
        text: 'rgb(242, 242, 242)',

        primary: 'rgb(48,107,255)',
        border: 'rgb(28, 28, 30)',
        card: 'rgb(28, 28, 30)',
        notification: 'rgb(48,107,255)',
      },
      android: {
        background: 'rgb(28, 28, 30)',
        text: 'rgb(242, 242, 242)',

        primary: 'rgb(48,107,255)',
        border: 'rgb(28, 28, 30)',
        card: 'rgb(28, 28, 30)',
        notification: 'rgb(48,107,255)',

        // background: PlatformColor('@android:color/black'),
        // text: PlatformColor('@android:color/white'),
        //
        // primary: PlatformColor('@android:color/holo_blue_bright'),
        // border: PlatformColor('@android:color/black'),
        // card: PlatformColor('@android:color/black'),
        // notification: PlatformColor('@android:color/holo_blue_bright')
      },
      default: LIGHT_THEME
    })
  }

};
