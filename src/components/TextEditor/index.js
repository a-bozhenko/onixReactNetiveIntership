import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { View, TextInput, Text } from 'react-native';
import styles from './styles';
import { ColorSchemeClass } from '../../entities';

const propTypes = {
  maxLength: PropTypes.number
};
const defaultProps = {
  maxLength: 1000
};

const TextEditor = function (props) {
  const { maxLength } = props;
  const [text, setText] = useState('');

  const { colors } = new ColorSchemeClass().getTheme();

  const placeholderText = 'Changing input will change this text';

  const onChange = (newText) => {
    setText(newText);
  };

  return (
    <View style={[styles.root, { color: colors.text, backgroundColor: colors.background }]}>
      <TextInput
        style={[styles.input, { color: colors.text, backgroundColor: colors.background }]}
        placeholder="Change the text"
        onChangeText={onChange}
        multiline
        numberOfLines={5}
        textAlignVertical="top"
        maxLength={maxLength}
      />

      <Text style={[styles.resultTitle, { color: colors.text }]}>Your result is:</Text>
      <View style={[styles.resultWrapper, { color: colors.text }]}>
        <Text style={[styles.resultText, { color: colors.text }]}>{text || placeholderText}</Text>
      </View>
    </View>
  );
};

TextEditor.propTypes = propTypes;

TextEditor.defaultProps = defaultProps;

export default TextEditor;
