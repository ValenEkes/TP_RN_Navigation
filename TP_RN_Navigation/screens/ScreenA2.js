import { Button, StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import Entypo from '@expo/vector-icons/Entypo';

const ScreenA2 = () => {
  return (
    <View style={styles.container}>
      <Text>ScreenA2</Text>
      <TextInput placeholder='Ingrese texto' />
    </View>
  )
}

export default ScreenA2

const styles = StyleSheet.create({
  container: {
    flex: 1,               // Para que tome toda la pantalla
    backgroundColor: '#00f', // Cambia este valor por el color que quieras
    padding: 16,           // Opcional, para que no quede pegado a los bordes
  }
})
