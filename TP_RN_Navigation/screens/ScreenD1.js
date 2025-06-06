import { Button, StyleSheet, Text, View,TextInput } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'  
import Entypo from '@expo/vector-icons/Entypo';
const ScreenD1 = () => {
  const navigation=useNavigation()
  return (
    <View style={styles.container}>
      <Text style={styles.text}>ScreenD1</Text>
      <TextInput placeholder='Ingrese texto'/>
      <Button title="Ir A ScreenD2" onPress={() => navigation.navigate('ScreenD2')} />  
    </View>
  )
}

export default ScreenD1

const styles = StyleSheet.create({
  container: {
    flex: 1,              
    backgroundColor: '#eab61f',
    padding: 16,           
  },
  text:{
    fontFamily: "cursive",
  
  }
})