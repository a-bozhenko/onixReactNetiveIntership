import React from 'react';
import {
  View, Text,
} from 'react-native';
import styles from './styles';
import {
  ContainerWrapper, Footer,
} from '../../components';

const SettingsScreen = function () {
  return (
    <View
      style={styles.root}
    >
      <ContainerWrapper>

        <View style={styles.infoWrapper}>
          <Text style={styles.textTitle}>Global settings:</Text>
          <Text style={styles.text}>
            Language - EN
          </Text>
        </View>

      </ContainerWrapper>
      <Footer />
    </View>
  );
};

export default SettingsScreen;
