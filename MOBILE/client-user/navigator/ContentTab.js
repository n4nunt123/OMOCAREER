import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import DetailStack from './DetailStack';
import DiscoverScreen from "../src/screens/Discover";

const Tab = createBottomTabNavigator()

export default function ContentTab() {
  return (
    <Tab.Navigator 
      initialRouteName="Jobs"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Jobs') {
            iconName = focused
              ? 'briefcase'
              : 'briefcase-outline';
          } else if (route.name === 'Discover') {
            iconName = focused ? 'file-tray-stacked' : 'file-tray-stacked-outline';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen 
        name="Jobs" 
        component={DetailStack}
        options={{headerShown: false }}
      />
      <Tab.Screen 
        name="Discover" 
        component={DiscoverScreen}
        options={{headerShown: false }}
      />
    </Tab.Navigator>
  );
}