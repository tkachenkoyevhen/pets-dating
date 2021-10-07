import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Profile from '../pages/Profile';
import List from '../pages/List';
import Swiper from '../pages/Swiper';
import Exit from '../pages/Exit';

const Tab = createBottomTabNavigator();

export default function Account () {
  return(
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Home">
        <Tab.Screen name="Profile" component={Profile} options={{
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          )
        }} />
        <Tab.Screen name="List" component={List} options={{
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="format-list-checkbox" color={color} size={size} />
          )
        }} />
        <Tab.Screen name="Swiper" component={Swiper} options={{
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="autorenew" color={color} size={size} />
          )
        }} />
        <Tab.Screen name="Exit" component={Exit}
        options={{
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="door" color={color} size={size} />
          )
        }} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}
