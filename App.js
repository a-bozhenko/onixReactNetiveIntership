import React from 'react';
import {
  StyleSheet,
} from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import RNBootSplash from 'react-native-bootsplash';
import {
  MainScreen, AvatarScreen, SettingsScreen, ProfileScreen
} from './src/screens';

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: '#fff' },
});

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

export const SCREEN_NAMES = {
  MAIN: 'Main',
  PROFILE: 'Profile',
  AVATAR: 'Avatar',
  SETTINGS: 'Settings'
};

const App = function () {
  const drawIcon = (iconName, color, size) => {
    return <MaterialCommunityIcons name={iconName} color={color} size={size} />;
  };

  const UserStack = function () {
    return (
      <Stack.Navigator initialRouteName={SCREEN_NAMES.MAIN}>
        <Stack.Screen
          name={SCREEN_NAMES.MAIN}
          component={MainScreen}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name={SCREEN_NAMES.PROFILE}
          component={ProfileScreen}
        />

        <Stack.Screen
          name={SCREEN_NAMES.AVATAR}
          component={AvatarScreen}
        />
      </Stack.Navigator>
    );
  };

  const BottomNavigator = function () {
    return (
      <Tab.Navigator initialRouteName={SCREEN_NAMES.MAIN}>
        <Tab.Screen
          name={SCREEN_NAMES.MAIN}
          component={UserStack}
          options={{
            headerShown: false,
            tabBarIcon: ({
              color,
              size
            }) => drawIcon('home', color,
              size)
          }}
        />
        <Tab.Screen
          name={SCREEN_NAMES.SETTINGS}
          component={SettingsScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({
              color,
              size
            }) => drawIcon('cog', color,
              size)
          }}
        />
      </Tab.Navigator>
    );
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.root}>
        <NavigationContainer onReady={() => RNBootSplash.hide()}>
          <Drawer.Navigator initialRouteName={SCREEN_NAMES.MAIN}>
            <Drawer.Screen
              name={SCREEN_NAMES.MAIN}
              component={BottomNavigator}
            />
            <Drawer.Screen
              name={SCREEN_NAMES.SETTINGS}
              component={SettingsScreen}
              options={{
                tabBarIcon: ({
                  color,
                  size
                }) => drawIcon('cog', color,
                  size)
              }}
            />
          </Drawer.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default App;
