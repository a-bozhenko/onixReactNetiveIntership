import { DefaultTheme } from '@react-navigation/native';
import { COLOR_SCHEMES, COLORS } from '../constants';

/**
 * Singleton class to manage of color scheme of app
 */
class ColorSchemeClass {
  constructor() {
    this.systemColorSheme = null;
    this.userSelectedOption = null;

    this.instance = null;

    if (typeof ColorSchemeClass.instance === 'object') {
      return ColorSchemeClass.instance;
    }
    ColorSchemeClass.instance = this;
    return ColorSchemeClass.instance;
  }

  getSchemeName = () => {
    let condition;

    if (this.userSelectedOption === COLOR_SCHEMES.AUTO) {
      condition = this.systemColorSheme;
    } else {
      condition = this.userSelectedOption;
    }

    return condition;
  }

  getScheme = () => {
    switch (this.getSchemeName()) {
      case (COLOR_SCHEMES.LIGHT): {
        return COLORS.LIGHT_THEME;
      }
      case (COLOR_SCHEMES.DARK): {
        return COLORS.DARK_THEME;
      }
      case (COLOR_SCHEMES.FROM_DEVICE): {
        return COLORS.USER_THEME;
      }
      default: {
        return COLORS.LIGHT_THEME;
      }
    }
  }

  getTheme = () => {
    return {
      ...DefaultTheme,
      colors: {
        ...this.getScheme()
      },
    };
  }

  setColorScheme = (newScheme) => {
    this.systemColorSheme = newScheme;
  }

  setUserSelectedOptions = (newUserOptions) => {
    this.userSelectedOption = newUserOptions;
  }
}

export default ColorSchemeClass;
