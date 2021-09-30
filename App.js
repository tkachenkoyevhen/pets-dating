import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


function Home () {
  return (
    <View style={styles.container}>
      <Text>Log in</Text>
      <TextInput style={styles.input} placeholder="Username" />
      <TextInput style={styles.input} placeholder="Password" secureTextEntry={true} />
      <Button title="Login" />
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
      <Tab.Navigator initialRouteName="Home" screenOptions={({ route }) => {
        console.log(route.name)
        // return {
        //   tabBarIcon: ({ focused, color, size }) => {
        //     console.log(route.name, focused, color, size)
        //   }
        // }
      }}>
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
  },
  input: {
    height: 40,
    width: 220,
    marginTop: 10,
    paddingHorizontal: 8,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#000'
  }
});

export default App