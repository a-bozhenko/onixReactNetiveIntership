import React from 'react';
import {
  View, TouchableOpacity, Text, StyleSheet
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SCREEN_NAMES } from '../../constants';
import { ColorSchemeClass } from '../../entities';

const styles = StyleSheet.create({
  wrapperButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#c0c0c0',
    borderLeftWidth: 0,
    flex: 1
  },
});

const PseudoNavigation = function () {
  const navigation = useNavigation();

  const { colors } = new ColorSchemeClass().getTheme();

  const onChangeScreen = (goTo, params = {}) => {
    navigation.navigate(goTo, params);
  };

  const drawButton = (screenName) => {
    return (
      <TouchableOpacity
        key={screenName}
        style={[styles.button, { borderColor: colors.border }]}
        onPress={() => { onChangeScreen(screenName); }}
      >
        <Text style={[{ color: colors.text }]}>{screenName}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.wrapperButtons}>
      {Object.values(SCREEN_NAMES).map(drawButton)}
    </View>
  );
};

export default PseudoNavigation;
