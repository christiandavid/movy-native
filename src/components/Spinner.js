import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';

import { useTheme } from '@react-navigation/native';

const styles = StyleSheet.create({
  loading: {
    ...StyleSheet.absoluteFill,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export function Spinner({ size = 'large' }) {
  const { colors } = useTheme();
  return (
    <View style={styles.loading} pointerEvents="none">
      <ActivityIndicator size={size} color={colors.invertedBase} />
    </View>
  );
}
