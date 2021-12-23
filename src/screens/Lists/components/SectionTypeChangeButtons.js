import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { LIST_TYPES } from '../../../constants';
import styles from '../styles';

const SectionTypeChangeButtons = function (props) {
  const { onChange, selected } = props;

  const drawButton = (type, iconName) => {
    return (
      <TouchableOpacity onPress={() => onChange(type)} style={[styles.buttonItem, selected === type && styles.buttonItemActive]}>
        <Text style={styles.buttonIcon}><MaterialCommunityIcons name={iconName} color="#000" size={18} /></Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.buttonWrapper}>
      {drawButton(LIST_TYPES.LIST_ITEMS, 'format-list-bulleted-square')}
      {drawButton(LIST_TYPES.SECTION_LIST, 'format-list-text')}
    </View>
  );
};

export default SectionTypeChangeButtons;
