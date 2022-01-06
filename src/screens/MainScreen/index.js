import React, { useEffect, useState } from 'react';
import {
  View, Text, TouchableOpacity
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './styles';
import {
  ContainerWrapper, Footer,
} from '../../components';
import { getUsers } from '../../db';
import { SCREEN_NAMES } from '../../constants';
import { ColorSchemeClass } from '../../entities';

const MainScreen = function () {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();

  const { colors } = new ColorSchemeClass().getTheme();

  useEffect(() => {
    getUsers().then((response) => {
      setUsers(response);
      setLoading(false);
    }).catch(() => {
      setLoading(false);
    });
  }, []);

  const drawSingleItem = (item) => {
    return (
      <TouchableOpacity
        key={`user_${item.id}`}
        style={[styles.userItem, { backgroundColor: colors.background, color: colors.text }]}
        onPress={() => navigation.navigate(SCREEN_NAMES.PROFILE, { id: item.id })}
      >
        <Text style={{ color: colors.text }}>{item.name}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.root}>
      <ContainerWrapper>
        {loading ? (<Text style={{ color: colors.text }}>Loading...</Text>) : (
          <View>
            {users.map(drawSingleItem)}
          </View>
        )}
      </ContainerWrapper>
      <Footer />
    </SafeAreaView>
  );
};

export default MainScreen;
