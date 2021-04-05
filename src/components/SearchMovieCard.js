import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@react-navigation/native';
import {
  View,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
  useWindowDimensions,
} from 'react-native';

import { TextStyles } from '@/theme';
import { playIcon } from '@/assets';
import { StarRating } from '@/components/StarRating';
import { ORIENTATION } from '@/constants/orientation';

const styles = StyleSheet.create({
  searchMovieCard: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#0F0F0F',
    marginVertical: 2,
  },
  imageContainer: {
    flex: 1,
    height: 100,
  },
  infoPortrait: {
    flex: 1,
  },
  infoLandscape: {
    flex: 2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  infoBottomPortrait: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: 150,
    justifyContent: 'space-between',
    marginTop: 10,
  },
  infoBottomLandscape: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: 150,
    justifyContent: 'space-between',
  },
  playIcon: {
    width: 20,
    height: 20,
    marginHorizontal: 10,
  },
});

export function SearchMovieCard({ id, title, image, average, onPress }) {
  const { colors } = useTheme();
  const { PORTRAIT, LANDSCAPE } = ORIENTATION;
  const { width, height } = useWindowDimensions();
  const orientation = width < height ? PORTRAIT : LANDSCAPE;

  return (
    <TouchableOpacity onPress={() => onPress(id)}>
      <View
        style={[
          styles.searchMovieCard,
          { backgroundColor: colors.searchMovieCard },
        ]}
      >
        <Image
          style={styles.imageContainer}
          source={{ uri: image }}
          resizeMode="center"
          accessibilityIgnoresInvertColors
        />
        <View
          style={
            orientation === PORTRAIT
              ? styles.infoPortrait
              : styles.infoLandscape
          }
        >
          <Text
            style={[
              TextStyles.text,
              {
                color: colors.text,
              },
            ]}
          >
            {title}
          </Text>
          <View
            style={
              orientation === PORTRAIT
                ? styles.infoBottomPortrait
                : styles.infoBottomLandscape
            }
          >
            <StarRating average={average} />
            <Image
              accessibilityIgnoresInvertColors
              source={playIcon}
              style={[styles.playIcon, { tintColor: colors.invertedBase }]}
            />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

SearchMovieCard.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.string,
  average: PropTypes.number,
  onPress: PropTypes.func,
};

SearchMovieCard.defaultProps = {
  image: '',
  average: 0,
  onPress: () => {},
};
