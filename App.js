import React from 'react';
import {
  SafeAreaView,
  StyleSheet
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MainScreen, AvatarScreen, SettingsScreen } from './src/screens';
import PseudoNavigation from './src/components/PseudoNavigation';

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: '#fff' },
});

const Stack = createNativeStackNavigator();

export const SCREEN_NAMES = {
  MAIN: 'Main',
  AVATAR: 'Avatar',
  SETTINGS: 'Settings'
};

const App = function () {
  return (
    <SafeAreaView style={styles.root}>
      <NavigationContainer>
        <PseudoNavigation />
        <Stack.Navigator initialRouteName="Main">
          <Stack.Screen name={SCREEN_NAMES.MAIN} component={MainScreen} options={{ title: 'Home' }} />
          <Stack.Screen name={SCREEN_NAMES.AVATAR} component={AvatarScreen} options={{ title: 'Avatar' }} />
          <Stack.Screen name={SCREEN_NAMES.SETTINGS} component={SettingsScreen} options={{ title: 'Settings' }} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default App;
