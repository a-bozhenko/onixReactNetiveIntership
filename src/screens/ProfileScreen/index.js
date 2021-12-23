import React, { useState, useEffect } from 'react';
import {
  View, Text, Image,
  TouchableOpacity
} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './styles';
import {
  ContainerWrapper, Footer, TextEditor
} from '../../components';
import { getUserById } from '../../db';
import { SCREEN_NAMES } from '../../constants';

const ProfileScreen = function () {
  const [user, setUser] = useState(null);
  const route = useRoute();
  const navigation = useNavigation();

  useEffect(() => {
    const userId = route?.params?.id || 1;

    getUserById(userId).then((response) => {
      setUser(response);
    }).catch((e) => {
      console.log('some error', e);
    });
  }, []);

  const onChangeAvatar = () => {
    navigation.navigate(SCREEN_NAMES.AVATAR, { id: user.id });
  };

  if (!user?.id) return <Text>Loading...</Text>;

  return (
    <SafeAreaView
      style={styles.root}
    >
      <ContainerWrapper>

        <View style={styles.infoWrapper}>
          <View style={styles.infoText}>
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
          <View style={styles.infoAvatarWrapper}>
            <Text style={styles.infoAvatarTitle}>Avatar:</Text>
            <View style={styles.infoAvatarImageWrapper}>
              <Image style={styles.infoAvatarImage} source={user.avatar} />
            </View>

            <TouchableOpacity onPress={onChangeAvatar} style={styles.infoAvatarChangeWrapper}>
              <MaterialCommunityIcons name="eye-settings" color="#434343" size={22} />
              <Text style={styles.infoAvatarChangeText}>Change avatar</Text>
            </TouchableOpacity>
          </View>
        </View>

        <TextEditor />

      </ContainerWrapper>
      <Footer />
    </SafeAreaView>
  );
};

export default ProfileScreen;
