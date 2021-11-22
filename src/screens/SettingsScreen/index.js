import React, { useState, useEffect } from 'react';
import {
  View, Text,
} from 'react-native';
import { useRoute } from '@react-navigation/native';
import styles from './styles';
import {
  ContainerWrapper, Footer, TextEditor
} from '../../components';
import { getUserById } from '../../db';

const SettingsScreen = function () {
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
    <View
      style={styles.root}
    >
      <ContainerWrapper>

        <View style={styles.infoWrapper}>
          <Text style={styles.textTitle}>Profile:</Text>
          <Text style={styles.text}>
            {`Name: ${user.name}`}
          </Text>
          <Text style={styles.text}>
            {`Surname: ${user.surname}`}
          </Text>
          <Text style={styles.text}>
            {`Age: ${user.age}`}
          </Text>
        </View>

        <TextEditor />

      </ContainerWrapper>
      <Footer />
    </View>
  );
};

export default SettingsScreen;
