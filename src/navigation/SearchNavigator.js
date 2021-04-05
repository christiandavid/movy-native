import React from 'react';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';
import { NAVIGATION } from '@/constants';
import { Search, Details } from '@/screens';

const Stack = createNativeStackNavigator();

export function SearchNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name={NAVIGATION.search} component={Search} />
      <Stack.Screen name={NAVIGATION.details} component={Details} />
    </Stack.Navigator>
  );
}
