import { createNativeStackNavigator } from '@react-navigation/native-stack';

const StackA = createNativeStackNavigator();

import ScreenA1 from '../screens/ScreenA1';
import ScreenA2 from '../screens/ScreenA2';
import ScreenB1 from '../screens/ScreenB1';
import ScreenB2 from '../screens/ScreenB2';
import ScreenC1 from '../screens/ScreenC1';
import ScreenC2 from '../screens/ScreenC2';
import ScreenD1 from '../screens/ScreenD1';
import ScreenD2 from '../screens/ScreenD2';

export function StackANavigator() {
    return (
      <StackA.Navigator>
        <StackA.Screen name="ScreenA1" component={ScreenA1} />
        <StackA.Screen name="ScreenA2" component={ScreenA2} />
      </StackA.Navigator>
    );
  }
  const StackB = createNativeStackNavigator();
export function StackBNavigator() {
    return (
      <StackB.Navigator>
        <StackB.Screen name="ScreenB1" component={ScreenB1} />
        <StackB.Screen name="ScreenB2" component={ScreenB2} />
      </StackB.Navigator>
    );
  }
  const StackC = createNativeStackNavigator();
  export function StackCNavigator() {
      return (
        <StackC.Navigator>
          <StackC.Screen name="ScreenC1" component={ScreenC1} />
          <StackC.Screen name="ScreenC2" component={ScreenC2} />
        </StackC.Navigator>
      );
    }
    const StackD = createNativeStackNavigator();
    export function StackDNavigator() {
        return (
          <StackC.Navigator>
            <StackC.Screen name="ScreenD1" component={ScreenD1} />
            <StackC.Screen name="ScreenD2" component={ScreenD2} />
          </StackC.Navigator>
        );
      }