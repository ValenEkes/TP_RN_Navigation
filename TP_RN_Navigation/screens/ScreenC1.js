import { Button, StyleSheet, Text, View,TextInput } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'  
import Entypo from '@expo/vector-icons/Entypo';
const ScreenC1 = () => {
  const navigation=useNavigation()
  return (
    <View style={styles.container}>
      <Text>ScreenC1</Text>
      <TextInput placeholder='Ingrese texto'/>
      <Button title="Ir A ScreenC2" onPress={() => navigation.navigate('ScreenC2')} />  
    </View>
  )
}

export default ScreenC1

const styles = StyleSheet.create({
  container: {
    flex: 1,              
    backgroundColor: '#b61036',
    padding: 16,           
  }
})