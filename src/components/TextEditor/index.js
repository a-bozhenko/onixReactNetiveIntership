import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { View, TextInput, Text } from 'react-native';
import styles from './styles';

const propTypes = {
  maxLength: PropTypes.number
};
const defaultProps = {
  maxLength: 1000
};

const TextEditor = function (props) {
  const { maxLength } = props;
  const [text, setText] = useState('');

  const placeholderText = 'Changing input will change this text';

  const onChange = (newText) => {
    setText(newText);
  };

  return (
    <View style={styles.root}>
      <TextInput
        style={styles.input}
        placeholder="Change the text"
        onChangeText={onChange}
        multiline
        numberOfLines={5}
        textAlignVertical="top"
        maxLength={maxLength}
      />

      <Text style={styles.resultTitle}>Your result is:</Text>
      <View style={styles.resultWrapper}>
        <Text style={styles.resultText}>{text || placeholderText}</Text>
      </View>
    </View>
  );
};

TextEditor.propTypes = propTypes;

TextEditor.defaultProps = defaultProps;

export default TextEditor;
