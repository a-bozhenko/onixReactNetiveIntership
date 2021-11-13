import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

const Footer = function () {
  return (
    <View style={styles.footerRoot}>
      <Text style={styles.footerTitle} numberOfLines={1}>Contacts:</Text>
      <Text style={styles.footerText} numberOfLines={1} selectable>Telegram: @digitalbozhenko</Text>
    </View>
  );
};

export default Footer;
