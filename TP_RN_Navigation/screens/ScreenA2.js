import { Button, StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native'


const ScreenA2 = () => {
  const route = useRoute();
  const { name, phone } = route.params || {};

  return (
    <View style={styles.container}>
      <Text>ScreenA2</Text>
      <Text>Nombre: {name}</Text>
      <Text>Teléfono: {phone}</Text>
    </View>
  )
}

export default ScreenA2

const styles = StyleSheet.create({
  container: {
    flex: 1,              
    backgroundColor: '#00f', 
    padding: 16,           
  }
})
