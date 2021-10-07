import React from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';

import { useDispatch } from 'react-redux';
import { loginAction } from '../store/modules/accountReducer';

import Input from '../components/Input';
import Button from '../components/Button';



export default function Auth () {
  const dispatch = useDispatch();
  const [login, onChangeLogin] = React.useState('');
  const [passwd, onChangePasswd] = React.useState('');
  const submitForm = () => {
    dispatch(loginAction({login, passwd}))
  }
  return(
    <View style={styles.container}>
      <Text>Please enter credentials</Text>
      <Input placeholder="Username" value={login} onChangeText={onChangeLogin} />
      <Input placeholder="Password" value={passwd} onChangeText={onChangePasswd} secureTextEntry />
      <Button title="Sign in" onPress={ submitForm } />
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
