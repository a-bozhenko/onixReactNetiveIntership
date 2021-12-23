import React, { useEffect, useState } from 'react';
import {
  View,
  Image, Text
} from 'react-native';
import { useRoute } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './styles';
import {
  ContainerWrapper, Footer
} from '../../components';
import { getUserById } from '../../db';

const AvatarScreen = function () {
  const [user, setUser] = useState(null);
  const route = useRoute();

  useEffect(() => {
    const userId = route?.params?.id || 1;

    getUserById(userId).then((response) => {
      setUser(response);
    }).catch((e) => {
      console.log('some error', e);
    });
  }, []);

  if (!user?.id) return <Text>Loading...</Text>;

  return (
    <SafeAreaView
      style={styles.root}
    >
      <ContainerWrapper>
        <View style={styles.avatarWrapper}>
          <Image source={user.avatar} />
        </View>
      </ContainerWrapper>
      <Footer />
    </SafeAreaView>
  );
};

export default AvatarScreen;
