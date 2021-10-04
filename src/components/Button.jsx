import React from 'react';
import { Text, StyleSheet, Pressable } from 'react-native';

export default function Button (props) {
  const { onPress, title, color = 'white' } = props;
  return(
    <Pressable title="Login" style={styles.button} onPress={onPress}>
      <Text style={{color}}>{title}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#3d85c6',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 5,
    borderRadius: 5,
    width: 220,
    height: 40
  }
});
