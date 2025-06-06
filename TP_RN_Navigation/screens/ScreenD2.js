import { Button, StyleSheet, Text, View,TextInput } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'  
import Entypo from '@expo/vector-icons/Entypo';
const ScreenD2 = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>ScreenD2</Text>
      <TextInput placeholder='Ingrese texto' />
    </View>
  )
}

export default ScreenD2

const styles = StyleSheet.create({
  container: {
    flex: 1,              
    backgroundColor: '#eab61f',
    padding: 16, 
    fontFamily:'cursive'          
  },
  text:{
    fontFamily:'cursive'
  }
})