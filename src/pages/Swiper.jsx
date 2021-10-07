import React from 'react'
import { View, Text, StatusBar, StyleSheet } from 'react-native'

export default function Swiper () {
  return (
    <View style={styles.container}>
      <Text>It is swiper screen!</Text>
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