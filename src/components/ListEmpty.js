import { useTheme } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { strings } from '@/localization';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  listEmptyText: {
    fontSize: 17,
  },
});

export function ListEmpty() {
  const { colors } = useTheme();

  return (
    <View style={[styles.container, { color: colors.text }]}>
      <Text style={styles.listEmptyText}>
        {strings.components.horizontalList.listEmpty}
      </Text>
    </View>
  );
}
