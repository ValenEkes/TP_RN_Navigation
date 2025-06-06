import { Button, StyleSheet, Text, View, TextInput } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'  
import Entypo from '@expo/vector-icons/Entypo';

const ScreenA1 = () => {
  const navigation = useNavigation()
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')

  return (
      <View style={styles.container}>
        <Text>ScreenA1</Text>
        <TextInput 
          placeholder='Ingrese su Nombre' 
          value={name}
          onChangeText={setName}
          style={styles.input}
        />
        <TextInput 
          placeholder='Ingrese su Telefono' 
          value={phone}
          onChangeText={setPhone}
          style={styles.input}
          keyboardType="phone-pad"
        />
        <Button 
          title="Ir A ScreenA2" 
          onPress={() => navigation.navigate('ScreenA2', { name, phone })} 
        />
      </View>
  )
}

export default ScreenA1

const styles = StyleSheet.create({
  container: {
    flex: 1,              
    backgroundColor: '#00f',
    padding: 16,           
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
    backgroundColor: '#fff',
  }
})
