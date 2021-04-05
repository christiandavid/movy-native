import React, { useState, useEffect, useRef } from 'react';
import { useTheme, useNavigation } from '@react-navigation/native';
import { Text, SafeAreaView, VirtualizedList } from 'react-native';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import { IMAGE_PATH, NAVIGATION } from '@/constants';
import { TextStyles } from '@/theme';
import { styles } from '@/screens/Search/Search.styles';
import { search, cleanResults, TYPES } from '@/actions/SearchActions';
import { errorsSelector } from '@/selectors/ErrorSelectors';
import { ErrorView, ListEmpty, SearchBar, SearchMovieCard } from '@/components';
import { useDebounce } from '@/hooks/useDebounce';
import { strings } from '@/localization';
import { getResultDetails } from '@/selectors/SearchSelectors';

const getItem = (data, index) => ({
  id: data[index].id,
  title: data[index].title,
  average: data[index].vote_average,
  image: data[index].poster_path && `${IMAGE_PATH}${data[index].poster_path}`,
});
const getItemCount = data => data.length;
const keyExtractor = item => `${item.id}`;

export function Search() {
  const { colors } = useTheme();
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const virtualizedListRef = useRef();

  const [text, onChangeText] = useState('');
  const [canLoad, setCanLoad] = useState(true);

  const debouncedText = useDebounce(text, 500);

  const errors = useSelector(
    state => errorsSelector([TYPES.SEARCH], state),
    shallowEqual
  );
  const { results, page, totalPages } = useSelector(
    getResultDetails,
    shallowEqual
  );

  const fetchData = nPage => {
    setCanLoad(false);
    dispatch(search({ query: text, page: nPage })).then(() => setCanLoad(true));
  };

  const handleEndReached = () => {
    if (canLoad && page < totalPages) {
      fetchData(page + 1);
    }
  };

  const handleShowDetails = movieId => {
    navigation.navigate(NAVIGATION.details, { movieId });
  };

  const renderItem = ({ item: { id, title, average, image } }) => (
    <SearchMovieCard
      id={id}
      title={title}
      average={average}
      image={image}
      onPress={handleShowDetails}
    />
  );

  const listHeader = () => (
    <Text style={[TextStyles.title, styles.title, { color: colors.text }]}>
      {strings.search.title}
    </Text>
  );

  useEffect(() => {
    if (debouncedText) {
      virtualizedListRef.current.scrollToOffset({ animated: false, offset: 0 });
      fetchData(1);
    } else {
      dispatch(cleanResults());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedText, dispatch]);

  if (errors?.length) {
    return <ErrorView errors={errors} />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <SearchBar text={text} onChangeText={onChangeText} />
      <VirtualizedList
        ref={virtualizedListRef}
        contentContainerStyle={styles.movies}
        data={results}
        initialNumToRender={5}
        renderItem={renderItem}
        ListHeaderComponent={listHeader}
        keyExtractor={keyExtractor}
        getItemCount={getItemCount}
        getItem={getItem}
        ListEmptyComponent={ListEmpty}
        onEndReached={handleEndReached}
        onEndReachedThreshold={0.5}
      />
    </SafeAreaView>
  );
}
