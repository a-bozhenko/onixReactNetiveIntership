import React from 'react';
import RNBootSplash from 'react-native-bootsplash';
import { NavigationContainer } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { SCREEN_NAMES } from '../../App';
import {
  AvatarScreen, MainScreen, ProfileScreen, SettingsScreen
} from './index';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const Router = function () {
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
  );
};

export default Router;
