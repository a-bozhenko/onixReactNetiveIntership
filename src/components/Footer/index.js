import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import { ColorSchemeClass } from '../../entities';

const Footer = function () {
  const { colors } = new ColorSchemeClass().getTheme();

  return (
    <View style={[styles.footerRoot, { color: colors.text, backgroundColor: colors.background }]}>
      <Text style={[styles.footerTitle, { color: colors.text }]} numberOfLines={1}>Contacts:</Text>
      <Text style={[styles.footerText, { color: colors.text }]} numberOfLines={1} selectable>Telegram: @digitalbozhenko</Text>
    </View>
  );
};

export default Footer;
