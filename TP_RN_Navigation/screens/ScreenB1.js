import { Button, StyleSheet, Text, View, TextInput, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'  
import Entypo from '@expo/vector-icons/Entypo';
const imgFerrari = { uri: 'https://i.pinimg.com/736x/f5/7a/cd/f57acd525c15fa16d7b23d29637847f6.jpg' }
const ScreenB1 = () => {
  const navigation = useNavigation()
  return (
    <View style={styles.container}> 
      <Text>ScreenB1</Text>
      <TextInput placeholder='Ingrese texto' />
      <Button title="Ir A ScreenB2" onPress={() => navigation.navigate('ScreenB2')} />   
      <View>
        <Image source={imgFerrari} style={styles.imgFerrari} />
      </View>
    </View>
  )
}

export default ScreenB1

const styles = StyleSheet.create({
  container: {
    flex: 1,              
    backgroundColor: '#CD5C5C',
    padding: 16,           
  },
  imgFerrari: {
    width: 200,
    height: 120,
    resizeMode: 'contain',
    borderRadius: 8,
    marginTop: 12,
  }
})
