import React, { useEffect } from 'react';
import { useTheme, useRoute } from '@react-navigation/native';
import { Image, View, Text, SafeAreaView, ScrollView } from 'react-native';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import { TextStyles } from '@/theme';
import { StarRating } from '@/components/StarRating';
import { addIcon, removeIcon } from '@/assets';
import { Button, Spinner, ImageFadeIn, ErrorView } from '@/components';
import { styles } from '@/screens/Details/Detail.styles';
import { addToList, removeFromList } from '@/actions/UserActions';
import { fetchDetails, TYPES } from '@/actions/DetailsActions';
import { getDetails } from '@/selectors/DetailsSelectors';
import { isMovieInList } from '@/selectors/UserSelectors';
import { errorsSelector } from '@/selectors/ErrorSelectors';
import { isLoadingSelector } from '@/selectors/StatusSelectors';

export function Details() {
  const { colors } = useTheme();
  const dispatch = useDispatch();
  const {
    params: { movieId },
  } = useRoute();

  const details = useSelector(getDetails, shallowEqual);
  const isInList = useSelector(state => isMovieInList(state, movieId));
  const isLoading = useSelector(state =>
    isLoadingSelector([TYPES.DETAILS], state)
  );
  const errors = useSelector(
    state => errorsSelector([TYPES.DETAILS], state),
    shallowEqual
  );

  const handleAddToList = () => {
    dispatch(addToList(details));
  };
  const handleRemoveFromList = () => {
    dispatch(removeFromList(details));
  };

  useEffect(() => {
    dispatch(fetchDetails(movieId));
  }, [movieId, dispatch]);

  if (isLoading) {
    return <Spinner />;
  }
  if (errors?.length) {
    return <ErrorView errors={errors} />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <ImageFadeIn
          style={styles.image}
          source={{ uri: details.posterPath }}
        />
        <View style={styles.info}>
          {!isInList ? (
            <Button
              icon={addIcon}
              style={[styles.button, { backgroundColor: colors.invertedBase }]}
              inverted
              onPress={handleAddToList}
            />
          ) : (
            <Button
              icon={removeIcon}
              style={[styles.button, { backgroundColor: colors.invertedBase }]}
              inverted
              onPress={handleRemoveFromList}
            />
          )}
          <View style={styles.details}>
            {details.genres.map(({ name }) => (
              <Text style={[TextStyles.text, styles.genreTag]}>{name}</Text>
            ))}
          </View>
          <View style={styles.titleAndYear}>
            <Text style={[TextStyles.title, { color: colors.text }]}>
              {details.title}
            </Text>
            <Text style={[TextStyles.text, { color: colors.text }]}>
              ({details.releaseDate})
            </Text>
          </View>
          <View style={styles.rating}>
            <StarRating average={details.voteAverage} />
          </View>
          <Text
            style={[TextStyles.text, styles.overview, { color: colors.text }]}
          >
            {details.overview}
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
