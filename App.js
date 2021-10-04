import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Pressable } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Button from './src/components/Button';
import Input from './src/components/Input';


function Home () {
  return (
    <View style={styles.container}>
      <Text>Please enter credentials</Text>
      <Input placeholder="Username" />
      <Input placeholder="Password" secureTextEntry={true} />
      <Button title="Sign in" />
      <StatusBar style="auto" />
    </View>
  );
}

function Profile () {
  return (
    <View style={styles.container}>
      <Text>It is profile screen!</Text>
      <StatusBar style="auto" />
    </View>
  )
}

function List () {
  return (
    <View style={styles.container}>
      <Text>It is list screen!</Text>
      <StatusBar style="auto" />
    </View>
  )
}

function Swiper () {
  return (
    <View style={styles.container}>
      <Text>It is swiper screen!</Text>
      <StatusBar style="auto" />
    </View>
  )
}

const Tab = createBottomTabNavigator();

function App () {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Home">
        <Tab.Screen name="Home" component={Home} options={{
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          )
        }} />
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
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default App