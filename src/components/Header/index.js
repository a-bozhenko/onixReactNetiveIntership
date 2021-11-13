import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

const Header = function () {
  return (
    <View style={styles.headerRoot}>
      <Text style={styles.headerText} numberOfLines={1}>Andre Bozhenko RN Task 1</Text>
    </View>
  );
};

export default Header;
