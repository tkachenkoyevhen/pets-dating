import React from 'react'
import { View, Text, StatusBar, StyleSheet } from 'react-native'

export default function List () {
  return (
    <View style={styles.container}>
      <Text>It is list screen!</Text>
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});