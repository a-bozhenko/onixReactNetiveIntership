import React from 'react';
import {
  StyleSheet,
} from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { PersistGate } from 'redux-persist/es/integration/react';
import { Provider } from 'react-redux';
import getStore from './src/store/store';
import Router from './src/screens/Router';

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: '#fff' },
});

export const SCREEN_NAMES = {
  MAIN: 'Main',
  PROFILE: 'Profile',
  AVATAR: 'Avatar',
  SETTINGS: 'Settings'
};

const App = function () {
  const { store, persistor } = getStore();

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <SafeAreaProvider>
          <SafeAreaView style={styles.root}>
            <Router />
          </SafeAreaView>
        </SafeAreaProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
