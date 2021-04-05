import React from 'react';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';
import { NAVIGATION } from '@/constants';
import { Details } from '@/screens/Details/Details';

const Stack = createNativeStackNavigator();

export function DetailsNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name={NAVIGATION.details} component={Details} />
    </Stack.Navigator>
  );
}
