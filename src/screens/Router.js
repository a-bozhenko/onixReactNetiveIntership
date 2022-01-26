import React, { useEffect, useState } from 'react';
import {
  Appearance, useColorScheme, Alert
} from 'react-native';
import RNBootSplash from 'react-native-bootsplash';
import { NavigationContainer, } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { useSelector, useDispatch } from 'react-redux';
import messaging from '@react-native-firebase/messaging';
import { SCREEN_NAMES } from '../constants';
import {
  AvatarScreen, MainScreen, ProfileScreen, SettingsScreen,
  ListScreen, MapScreen
} from './index';
import { ColorSchemeClass } from '../entities';
import actions from '../store/globals/actions';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const Router = function () {
  const colorSchemeClass = new ColorSchemeClass();
  const systemColorScheme = useColorScheme();
  const { colorScheme: userColorScheme } = useSelector((state) => ({
    colorScheme: state.globals.colorScheme
  }));
  const dispatch = useDispatch();

  const setPushNotificationTokenToStore = (deviceToken) => {
    dispatch(actions.setPushNotificationToken(deviceToken));
  };

  useEffect(() => {
    getPushNotificationId();
    subscribeForPushNotifications();
  }, []);

  const getPushNotificationId = () => {
    messaging().getToken().then((token) => {
      setPushNotificationTokenToStore(token);
    }).catch((error) => {
      console.log('getPushNotificationId.error', error);
    });
  };

  const subscribeForPushNotifications = () => {
    messaging().onMessage(async (remoteMessage) => {
      Alert.alert(remoteMessage.notification.title, remoteMessage.notification.body);
    });
  };

  const [selectedColorScheme, setSelectedColorScheme] = useState(colorSchemeClass.getTheme());

  const { colors } = new ColorSchemeClass().getTheme();

  useEffect(() => {
    colorSchemeClass.setColorScheme(systemColorScheme);
    colorSchemeClass.setUserSelectedOptions(userColorScheme);

    Appearance.addChangeListener((e) => {
      const newColorScheme = e.colorScheme;

      colorSchemeClass.setColorScheme(newColorScheme);

      setSelectedColorScheme(colorSchemeClass.getTheme());
    });
  }, []);

  useEffect(() => {
    colorSchemeClass.setUserSelectedOptions(userColorScheme);
    colorSchemeClass.setColorScheme(systemColorScheme);

    setSelectedColorScheme(colorSchemeClass.getTheme());
  }, [userColorScheme, systemColorScheme]);

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
      <Tab.Navigator initialRouteName={SCREEN_NAMES.MAIN_BOTTOM}>
        <Tab.Screen
          name={SCREEN_NAMES.MAIN_BOTTOM}
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
          name={SCREEN_NAMES.LISTS_BOTTOM}
          component={ListScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({
              color,
              size
            }) => drawIcon('format-list-bulleted', color,
              size)
          }}
        />

        <Tab.Screen
          name={SCREEN_NAMES.MAP_BOTTOM}
          component={MapScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({
              color,
              size
            }) => drawIcon('map', color,
              size)
          }}
        />

        <Tab.Screen
          name={SCREEN_NAMES.SETTINGS_BOTTOM}
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
    <NavigationContainer
      onReady={() => {
        colorSchemeClass.setUserSelectedOptions(userColorScheme);
        colorSchemeClass.setColorScheme(systemColorScheme);

        RNBootSplash.hide();
      }}
      theme={selectedColorScheme}
    >
      <Drawer.Navigator
        initialRouteName={SCREEN_NAMES.MAIN}
        screenOptions={{
          headerTintColor: colors.primary,
        }}
      >
        <Drawer.Screen
          name={SCREEN_NAMES.MAIN}
          component={BottomNavigator}
        />

        <Drawer.Screen
          name={SCREEN_NAMES.MAP}
          component={MapScreen}
          options={{
            tabBarIcon: ({
              color,
              size
            }) => drawIcon('map', color,
              size)
          }}
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
