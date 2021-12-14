import React from 'react';
import {
  View, Text,
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import Picker from 'react-native-picker-select';
import styles from './styles';
import {
  ContainerWrapper, Footer,
} from '../../components';
import actions from '../../store/translate/actions';
import { LOCALE_TYPES } from '../../store/translate/constants';

const SettingsScreen = function () {
  const { locale } = useSelector((state) => ({
    locale: state.locale.locale
  }));
  const dispatch = useDispatch();
  const onSetLocale = (newLocale) => {
    dispatch(actions.setLocale(newLocale));
  };

  return (
    <View
      style={styles.root}
    >
      <ContainerWrapper>
        <View style={styles.infoWrapper}>
          <Text style={styles.textTitle}>Global settings:</Text>

          <Picker
            onValueChange={(value) => onSetLocale(value)}
            value={locale}
            items={[
              { label: 'En', value: LOCALE_TYPES.EN },
              { label: 'Ru', value: LOCALE_TYPES.RU },
            ]}
          />

        </View>
      </ContainerWrapper>
      <Footer />
    </View>
  );
};

export default SettingsScreen;
