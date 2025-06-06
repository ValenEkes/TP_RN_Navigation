import { Button, StyleSheet, Text, View,TextInput } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'  
import Entypo from '@expo/vector-icons/Entypo';
const ScreenC2 = () => {
  return (
    <View style={styles.container}>
      <Text>ScreenC2</Text>
      <TextInput placeholder='Ingrese texto' />
    </View>
  )
}

export default ScreenC2

const styles = StyleSheet.create({
  container: {
    flex: 1,              
    backgroundColor: '#b61036',
    padding: 16,           
  }
})