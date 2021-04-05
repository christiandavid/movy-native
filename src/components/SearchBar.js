import React from 'react';
import PropTypes from 'prop-types';
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
    fontSize: 18,
  },
  searchIcon: {
    marginHorizontal: 10,
  },
});

export function SearchBar({ text, onChangeText }) {
  const { colors } = useTheme();

  return (
    <View style={[styles.searchBar, { backgroundColor: colors.searchBar }]}>
      <Image
        style={[styles.searchIcon, { tintColor: colors.invertedBase }]}
        source={searchIconSm}
        accessibilityIgnoresInvertColors
      />
      <TextInput
        style={[styles.searchBarInput, colors.text]}
        placeholder={strings.search.placeholder}
        onChangeText={onChangeText}
        value={text}
      />
    </View>
  );
}

SearchBar.propTypes = {
  text: PropTypes.string,
  onChangeText: PropTypes.func,
};

SearchBar.defaultProps = {
  text: '',
  onChangeText: () => {},
};
