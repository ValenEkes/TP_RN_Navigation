import * as React from 'react';
import { Button, TextInput, Text, View, StyleSheet, TouchableOpacity, StatusBar} from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {StackANavigator,StackBNavigator,StackCNavigator,StackDNavigator} from './navigation/Stack'

const Tab = createBottomTabNavigator();

//Tenemos que importar los Stack navigator desde stack.js
export default function App() 
{
  return (
    <NavigationContainer>
    < Tab.Navigator>
        <Tab.Screen name= "A" component={StackANavigator}/>
        <Tab.Screen name= "B" component={StackBNavigator} />
        <Tab.Screen name= "C" component={StackCNavigator}/>
        <Tab.Screen name= "D" component={StackDNavigator}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
};
