import { Button, StyleSheet, Text, View,TextInput } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'  
import Entypo from '@expo/vector-icons/Entypo';
const ScreenB2 = () => {
  return (
    <View style={styles.container}>  
      <Text>ScreenB2</Text>
      <TextInput placeholder='Ingrese texto' />
    </View>
  )
}

export default ScreenB2

const styles = StyleSheet.create({
  container: {
    flex: 1,              
    backgroundColor: '#CD5C5C',
    padding: 16,           
  }
})