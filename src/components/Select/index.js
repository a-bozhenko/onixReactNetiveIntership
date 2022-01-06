import React from 'react';
import PropTypes from 'prop-types';
import {
  View, Text,
} from 'react-native';
import Picker from 'react-native-picker-select';
import styles from './styles';
import { ColorSchemeClass } from '../../entities';

const propTypes = {
  value: PropTypes.string,
  items: PropTypes.array,
  onChange: PropTypes.func,
  label: PropTypes.string
};
const defaultProps = {
  label: '',
  items: []
};

const Select = function (props) {
  const { colors } = new ColorSchemeClass().getTheme();

  const {
    value, items, onChange, label
  } = props;

  return (
    <View style={styles.root}>
      {label && (
        <Text style={[styles.label, { color: colors.text }]}>{label}</Text>
      )}
      <Picker
        onValueChange={onChange}
        value={value}
        items={items}
        style={{
          inputAndroid: { color: colors.text, },
        }}
      />
    </View>
  );
};

Select.propTypes = propTypes;

Select.defaultProps = defaultProps;

export default Select;
