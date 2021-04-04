import PropTypes from 'prop-types';
import React, { useMemo } from 'react';
import { SafeAreaView, StyleSheet, View, VirtualizedList } from 'react-native';

import { theme } from '@/theme';
import { useComponentSize } from '@/hooks/useComponentSize';
import { ListEmpty, MoviePoster } from '@/components';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list: { paddingBottom: 10, paddingTop: 70 },
  imageContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 15,
  },
  emptyPoster: {
    width: theme.posterWidth,
  },
});

const splitArrayInGroups = (arr, size) =>
  arr.reduce((acc, _current, index) => {
    if (index % size === 0) {
      acc.push(arr.slice(index, index + size));
    }
    return acc;
  }, []);
const getItem = (data, index) => data[index];
const getItemCount = data => data.length;
const keyExtractor = (_data, index) => index.toString();
const renderItem = ({ item, index, columns, onPress }) => {
  const posters =
    columns > item.length
      ? [...item, ...new Array(columns - item.length).fill({ image: null })]
      : item;
  return (
    <View key={index} style={styles.imageContainer}>
      {posters.map(({ id, image }, idx) =>
        image ? (
          <MoviePoster key={idx} id={id} imageSrc={image} onPress={onPress} />
        ) : (
          <View key={idx} style={styles.emptyPoster} />
        )
      )}
    </View>
  );
};

export function GridList({ posters: rawPosters, onPress }) {
  const [size, onLayout] = useComponentSize();
  const columns = Math.floor(size.width / theme.posterWidth);
  const posters = useMemo(() => splitArrayInGroups(rawPosters, columns), [
    rawPosters,
    columns,
  ]);

  return (
    <SafeAreaView style={styles.container}>
      <VirtualizedList
        onLayout={onLayout}
        contentContainerStyle={styles.list}
        data={posters}
        getItem={getItem}
        getItemCount={getItemCount}
        keyExtractor={keyExtractor}
        ListEmptyComponent={ListEmpty}
        renderItem={({ item, index }) =>
          renderItem({ item, index, columns, onPress })
        }
      />
    </SafeAreaView>
  );
}

GridList.propTypes = {
  posters: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      image: PropTypes.string,
    })
  ).isRequired,
  onPress: PropTypes.func,
};

GridList.defaultProps = {
  onPress: () => {},
};
