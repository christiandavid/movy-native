import React from 'react';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';
import { NAVIGATION } from '@/constants';
import { HomeList } from '@/screens';

const Stack = createNativeStackNavigator();

export function HomeListNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name={NAVIGATION.homeList} component={HomeList} />
    </Stack.Navigator>
  );
}
