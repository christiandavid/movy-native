import React from 'react';
import { View, Image, TextInput, StyleSheet } from 'react-native';
import { searchIconSm, micIcon } from '@/assets';
import { useTheme } from '@react-navigation/native';
import { color } from 'react-native-reanimated';

const styles = StyleSheet.create({
  searchBar: {
    flex: 1,
    flexDirection: 'row',
    height: 60,
    alignItems: 'center',
  },
  searchBarInput: {
    flex: 10,
    height: 60,
    color: 'white',
    fontSize: 18,
  },
  micIcon: {
    marginHorizontal: 10,
  },
  searchIcon: {
    marginHorizontal: 10,
  },
});

export function SearchBar() {
  const { colors } = useTheme();
  return (
    <View style={[styles.searchBar, { backgroundColor: colors.searchBar }]}>
      <Image
        style={styles.searchIcon}
        source={searchIconSm}
        accessibilityIgnoresInvertColors
      />
      <TextInput
        style={styles.searchBarInput}
        placeholder="Search for a movie that you love…"
      />
      <Image
        style={styles.micIcon}
        source={micIcon}
        accessibilityIgnoresInvertColors
      />
    </View>
  );
}
