import React from 'react';
import PropTypes from 'prop-types';
import { View, Image, StyleSheet } from 'react-native';
import { startIcon } from '@/assets';

const styles = StyleSheet.create({
  starRating: {
    display: 'flex',
    flexDirection: 'row',
    width: 70,
    justifyContent: 'space-between',
  },
  starOn: {
    tintColor: '#FFD000',
  },
  starOff: {
    tintColor: 'gray',
  },
});

export function StarRating({ average }) {
  const rating = Math.floor(average / 2);

  return (
    <View style={styles.starRating}>
      {[...Array(5).keys()].map((_, index) => (
        <Image
          accessibilityIgnoresInvertColors
          source={startIcon}
          style={index + 1 <= rating ? styles.starOn : styles.starOff}
        />
      ))}
    </View>
  );
}

StarRating.propTypes = {
  average: PropTypes.number,
};

StarRating.defaultProps = {
  average: 0,
};
