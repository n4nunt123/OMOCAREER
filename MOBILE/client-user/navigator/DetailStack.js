import * as React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import JobScreen from '../src/screens/Job';
import DetailScreen from '../src/screens/Detail'

const Stack = createNativeStackNavigator();

export default function DetailStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="ListJob" 
        component={JobScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen 
        name="Detail" 
        component={DetailScreen} 
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}