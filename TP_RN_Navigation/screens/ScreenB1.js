import { Button, StyleSheet, Text, View,TextInput } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'  
import Entypo from '@expo/vector-icons/Entypo';
const ScreenB1 = () => {
  const navigation=useNavigation()
  return (
    <View style={styles.container}> 
      <Text>ScreenB1</Text>
      <TextInput placeholder='Ingrese texto'/>
      <Button title="Ir A ScreenB2" onPress={() => navigation.navigate('ScreenB2')} />   
    </View>
  )
}

export default ScreenB1

const styles = StyleSheet.create({
  container: {
    flex: 1,              
    backgroundColor: '#CD5C5C',
    padding: 16,           
  }
})