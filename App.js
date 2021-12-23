import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { PersistGate } from 'redux-persist/es/integration/react';
import { Provider } from 'react-redux';
import getStore from './src/store/store';
import Router from './src/screens/Router';

const App = function () {
  const { store, persistor } = getStore();

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <SafeAreaProvider>
          <Router />
        </SafeAreaProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
