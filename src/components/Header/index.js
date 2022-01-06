import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import { ColorSchemeClass } from '../../entities';

const Header = function () {
  const { colors } = new ColorSchemeClass().getTheme();

  return (
    <View style={[styles.headerRoot, { backgroundColor: colors.background }]}>
      <Text style={[styles.headerText, { color: colors.text }]} numberOfLines={1}>Andre Bozhenko RN Task 1</Text>
    </View>
  );
};

export default Header;
