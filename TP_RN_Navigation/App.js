import * as React from 'react';
import { Button, TextInput, Text, View, StyleSheet, TouchableOpacity, StatusBar} from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function ScreenA1() {
  const navigation = useNavigation();
  return (
    <View style={styles.homeScreen}>
      <Text style={styles.text}>HOME</Text>
    </View>
  );
}
function ScreenA2() {
  const navigation = useNavigation();
  return (
    <View style={styles.homeScreen}>
      <Text style={styles.text}>HOME 2</Text>
    </View>
  );
}
function ScreenB1() {
  const navigation = useNavigation();
  return (
    <View style={styles.homeScreen}>
      <Text style={styles.text}>HOME</Text>
    </View>
  );
}
function ScreenB2() {
  const navigation = useNavigation();
  return (
    <View style={styles.homeScreen}>
      <Text style={styles.text}>HOME 2</Text>
    </View>
  );
}
function ScreenC1() {
  const navigation = useNavigation();
  return (
    <View style={styles.homeScreen}>
      <Text style={styles.text}>HOME</Text>
    </View>
  );
}
function ScreenC2() {
  const navigation = useNavigation();
  return (
    <View style={styles.homeScreen}>
      <Text style={styles.text}>HOME 2</Text>
    </View>
  );
}




function StackANavigator() {
  return (
    <StackA.Navigator>
      <StackA.Screen name="ScreenA1" component={ScreenA1} />
      <StackA.Screen name="ScreenA2" component={ScreenA2} />
    </StackA.Navigator>
  );
}
function StackBNavigator() {
  return (
    <StackB.Navigator>
      <StackB.Screen name="ScreenB1" component={ScreenB1} />
      <StackB.Screen name="ScreenB2" component={ScreenB2} />
    </StackB.Navigator>
  );
}
function StackCNavigator() {
    return (
      <StackC.Navigator>
        <StackC.Screen name="ScreenC1" component={ScreenC1} />
        <StackC.Screen name="ScreenC2" component={ScreenC2} />
      </StackC.Navigator>
    );
}
function StackDNavigator() {
  return (
    <StackC.Navigator>
      <StackC.Screen name="ScreenD1" component={ScreenD1} />
      <StackC.Screen name="ScreenD2" component={ScreenD2} />
    </StackC.Navigator>
  );
}
import A from './screens/ScreenA1';
import A2 from './screens/ScreenA2';
import B from './screens/ScreenB1';
import B2 from './screens/ScreenB2';
import C from './screens/ScreenC1';
import C2 from './screens/ScreenC2';
import D from './screens/ScreenD1';
import D2 from './screens/ScreenD2';
const Tab = createBottomTabNavigator();

//Tenemos que importar los Stack navigator desde stack.js
export default function App() 
{
  return (
    <NavigationContainer>
    < Tab.Navigator>
        <Tab.Screen name= "a" component={StackANavigator}/>
        <Tab.Screen name= "b" component={StackBNavigator} />
        <Tab.Screen name= "c" component={StackCNavigator}/>
        <Tab.Screen name= "d" component={StackDNavigator}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
};
