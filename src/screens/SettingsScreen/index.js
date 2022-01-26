import React from 'react';
import {
  View, Text, TextInput, Linking, TouchableOpacity
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './styles';
import {
  ContainerWrapper, Footer, Select
} from '../../components';
import actions from '../../store/translate/actions';
import globalsActions from '../../store/globals/actions';
import { LOCALE_TYPES, COLOR_SCHEMES } from '../../constants';
import { ColorSchemeClass } from '../../entities';

const SettingsScreen = function () {
  const { locale, colorScheme, pushNotificationToken } = useSelector((state) => ({
    locale: state.locale.locale,
    colorScheme: state.globals.colorScheme,
    pushNotificationToken: state.globals.pushNotificationToken,
  }));

  const { colors } = new ColorSchemeClass().getTheme();

  const dispatch = useDispatch();
  const onSetLocale = (newLocale) => {
    dispatch(actions.setLocale(newLocale));
  };

  const onSetColorScheme = (preferSystemColor) => {
    dispatch(globalsActions.setColorScheme(preferSystemColor));
  };

  return (
    <SafeAreaView
      style={styles.root}
    >
      <ContainerWrapper>
        <View style={styles.infoWrapper}>
          <Text style={[styles.textTitle, { color: colors.text, backgroundColor: colors.background }]}>
            Global settings:
          </Text>

          <Select
            label="Language:"
            onChange={(value) => onSetLocale(value)}
            value={locale}
            items={[
              { label: 'En', value: LOCALE_TYPES.EN },
              { label: 'Ru', value: LOCALE_TYPES.RU },
            ]}
          />

          <Select
            label="Preferred color scheme:"
            onChange={(value) => onSetColorScheme(value)}
            value={colorScheme}
            items={[
              { label: 'Auto', value: COLOR_SCHEMES.AUTO },
              { label: 'System', value: COLOR_SCHEMES.FROM_DEVICE },
              { label: 'Light', value: COLOR_SCHEMES.LIGHT },
              { label: 'Dark', value: COLOR_SCHEMES.DARK },
            ]}
          />

          <Text style={[styles.label, { color: colors.text }]}>Push notification token:</Text>

          <TextInput
            value={pushNotificationToken}
            multiline
            numberOfLines={3}
            textAlignVertical="top"
          />

          <TouchableOpacity
            style={[styles.button, { backgroundColor: colors.primary }]}
            onPress={() => {
              Linking.openURL('https://testfcm.com');
            }}
          >
            <Text style={[styles.buttonText, { color: colors.text }]}>Test on testfcm.com</Text>
          </TouchableOpacity>

        </View>
      </ContainerWrapper>
      <Footer />
    </SafeAreaView>
  );
};

export default SettingsScreen;
