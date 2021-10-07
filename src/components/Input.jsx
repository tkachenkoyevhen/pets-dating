import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

export default function Input (props) {
  const {
    onChangeText,
    placeholder = '',
    value,
    secureTextEntry = false
  } = props;

  return (
    <TextInput onChangeText={onChangeText}
      style={styles.input}
      value={value}
      placeholder={placeholder}
      secureTextEntry={secureTextEntry}
    />
  )
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    width: 220,
    marginVertical: 5,
    paddingHorizontal: 8,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#000'
  }
});
