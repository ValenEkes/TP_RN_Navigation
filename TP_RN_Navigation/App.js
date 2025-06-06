import * as React from 'react';
import { Button, TextInput, Text, View, StyleSheet, TouchableOpacity, StatusBar} from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {StackANavigator,StackBNavigator,StackCNavigator,StackDNavigator} from './navigation/Stack'
import { Ionicons } from '@expo/vector-icons';
import AntDesign from '@expo/vector-icons/AntDesign';

const Tab = createBottomTabNavigator();

//Tenemos que importar los Stack navigator desde stack.js
export default function App() 
{
  return (
    <NavigationContainer>
    < Tab.Navigator>
        <Tab.Screen name= "A" component={StackANavigator}
        options={{
          tabBarIcon:({color})=>(
            <Ionicons name="home" size={24} color={color} />
          )
        }}/>
        <Tab.Screen name= "B" component={StackBNavigator}
        options={{
          tabBarIcon:({color})=>(
        <AntDesign name="barschart" size={24} color="black" />          )
        }} />
        <Tab.Screen name= "C" component={StackCNavigator}
        options={{
          tabBarIcon:({color})=>(
        <AntDesign name="exclamation" size={24} color="black" />          )
        }}/>
        <Tab.Screen name= "D" component={StackDNavigator}
        options={{
          tabBarIcon:({color})=>(
        <AntDesign name="info" size={24} color="black" />          )
        }}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
};
