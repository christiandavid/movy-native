import React from 'react';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';
import { NAVIGATION } from '@/constants';
import { MyList, Details } from '@/screens';

const Stack = createNativeStackNavigator();

export function MyListNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name={NAVIGATION.myList} component={MyList} />
      <Stack.Screen name={NAVIGATION.details} component={Details} />
    </Stack.Navigator>
  );
}
