import React, { useEffect } from 'react';
import { useNavigation, useTheme } from '@react-navigation/native';
import { Image, ImageBackground, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import { styles } from '@/screens/Home/FeaturedMovie/FeaturedMovie.styles';
import { NAVIGATION, IMAGE_PATH } from '@/constants';
import { fetchFeaturedMovie, TYPES } from '@/actions/FeaturedMovieActions';
import { TextStyles } from '@/theme';
import { strings } from '@/localization';
import { Button, ErrorView, Spinner } from '@/components';
import { getFeaturedMovie } from '@/selectors/FeaturedMovieSelectors';
import { errorsSelector } from '@/selectors/ErrorSelectors';
import { isLoadingSelector } from '@/selectors/StatusSelectors';
import { movyIcon, addIcon, playIcon, infoIcon } from '@/assets';

export function FeaturedMovie() {
  const { colors } = useTheme();
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const featuredMovie = useSelector(getFeaturedMovie, shallowEqual);

  const isLoading = useSelector(state =>
    isLoadingSelector([TYPES.FEATURED_MOVIE], state)
  );

  const errors = useSelector(
    state => errorsSelector([TYPES.FEATURED_MOVIE], state),
    shallowEqual
  );

  const handleAddToList = () => {
    navigation.navigate(NAVIGATION.myList, { movieId: featuredMovie.id }); // TODO: Add to list
  };

  const handlePlay = () => {
    navigation.navigate(NAVIGATION.myList, { movieId: featuredMovie.id }); // TODO: Go to the right place
  };

  const handleShowDetails = () => {
    navigation.navigate(NAVIGATION.myList, { movieId: featuredMovie.id }); // TODO: Go to the right place
  };

  useEffect(() => {
    dispatch(fetchFeaturedMovie());
  }, [dispatch]);

  if (isLoading) {
    return <Spinner />;
  }

  const posterImage = { uri: `${IMAGE_PATH}${featuredMovie.posterPath}` };

  return (
    <>
      <ErrorView errors={errors} />
      <ImageBackground source={posterImage} style={styles.backgroundImage}>
        <LinearGradient
          colors={[
            '#00000000',
            '#00000033',
            `${colors.base}ff`,
            `${colors.base}`,
          ]}
          style={styles.linearGradient}
        >
          <Image
            style={styles.logo}
            source={movyIcon}
            accessibilityIgnoresInvertColors
          />
          <View style={styles.genres}>
            {featuredMovie.genres.map(genre => (
              <Text
                key={genre}
                style={[TextStyles.text, { color: colors.text }]}
              >
                {genre}
              </Text>
            ))}
          </View>
          <Text style={[TextStyles.title, styles.tag]}>
            {strings.components.moviePoster.movyOriginal}
          </Text>
          <View style={styles.icons}>
            <Button
              style={styles.button}
              title={strings.common.myList}
              icon={addIcon}
              onPress={handleAddToList}
            />
            <Button
              style={styles.button}
              title={strings.common.play}
              icon={playIcon}
              onPress={handlePlay}
            />
            <Button
              style={styles.button}
              title={strings.common.info}
              icon={infoIcon}
              onPress={handleShowDetails}
            />
          </View>
        </LinearGradient>
      </ImageBackground>
    </>
  );
}
