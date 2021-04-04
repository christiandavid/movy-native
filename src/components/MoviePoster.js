import PropTypes from 'prop-types';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { theme } from '@/theme';
import { strings } from '@/localization';
import { ImageFadeIn } from '@/components';

const styles = StyleSheet.create({
  movie: {
    height: 170,
    justifyContent: 'center',
    marginVertical: 8,
    marginHorizontal: 1,
  },
  movieImage: {
    width: theme.posterWidth,
    height: 190,
  },
  originalView: {
    backgroundColor: '#0578FF',
    padding: 2,
    paddingLeft: 10,
    paddingRight: 10,
    position: 'absolute',
    alignSelf: 'center',
    bottom: '25%',
    borderRadius: 3,
  },
  originalText: {
    color: '#FFF',
    fontSize: 6,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export function MoviePoster({ imageSrc }) {
  return (
    <View style={styles.movie}>
      <ImageFadeIn style={styles.movieImage} source={{ uri: imageSrc }} />
      <View style={styles.originalView}>
        <Text style={styles.originalText}>
          {strings.components.moviePoster.movyOriginal}
        </Text>
      </View>
    </View>
  );
}

MoviePoster.propTypes = {
  imageSrc: PropTypes.string.isRequired,
};
