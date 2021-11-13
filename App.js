import React from 'react';
import {
  SafeAreaView,
  StyleSheet
} from 'react-native';
import { MainScreen } from './src/screens';

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: '#fff' },
});

const App = function () {
  return (
    <SafeAreaView style={styles.root}>
      <MainScreen />
    </SafeAreaView>
  );
};

export default App;
