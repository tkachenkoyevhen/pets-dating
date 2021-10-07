import React from "react"
import { Alert } from 'react-native'

const Alert = (props) => {
  const { title, msg, btns } = props
  Alert.alert(title, msg, [...btns])

  return(null)
}