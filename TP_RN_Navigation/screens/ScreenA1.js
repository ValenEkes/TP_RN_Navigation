import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'  
const ScreenA1 = () => {
    const navigation=useNavigation()
  return (
    <View>
      <Text>ScreenA1</Text>
      <Button title="Ir A ScreenA2" onPress={() => navigation.navigate('ScreenA2')} />   
    </View>
  )
}

export default ScreenA1

const styles = StyleSheet.create({})