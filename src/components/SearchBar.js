import React from 'react';
import { View, Image, TextInput, StyleSheet } from 'react-native';
import { useTheme } from '@react-navigation/native';

import { searchIconSm } from '@/assets';
import { strings } from '@/localization';

const styles = StyleSheet.create({
  searchBar: {
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
  searchIcon: {
    marginHorizontal: 10,
  },
});

export function SearchBar() {
  const { colors } = useTheme();

  return (
    <View style={[styles.searchBar, { backgroundColor: colors.searchBar }]}>
      <Image
        style={[styles.searchIcon, { tintColor: colors.invertedBase }]}
        source={searchIconSm}
        accessibilityIgnoresInvertColors
      />
      <TextInput
        style={styles.searchBarInput}
        placeholder={strings.search.placeholder}
      />
    </View>
  );
}
