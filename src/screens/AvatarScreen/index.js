import React from 'react';
import {
  View,
  Image
} from 'react-native';
import styles from './styles';
import {
  ContainerWrapper, Footer
} from '../../components';
import { avatar } from '../../assets';

const AvatarScreen = function () {
  return (
    <View
      style={styles.root}
    >
      <ContainerWrapper>
        <View style={styles.avatarWrapper}>
          <Image source={avatar} />
        </View>
      </ContainerWrapper>
      <Footer />
    </View>
  );
};

export default AvatarScreen;
