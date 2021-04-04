import { useTheme } from '@react-navigation/native';
import PropTypes from 'prop-types';
import React from 'react';
import { StyleSheet, Text, View, VirtualizedList } from 'react-native';

import { ListEmpty, MoviePoster } from '@/components';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'stretch',
  },
  list: {
    flexGrow: 1,
  },
  title: {
    fontSize: 20,
    paddingLeft: 15,
    paddingTop: 20,
    paddingBottom: 17,
  },
});

const getItem = (data, index) => ({
  id: data[index].id,
  image: data[index].image,
});
const getItemCount = data => data.length;
const keyExtractor = item => item.id;

export function HorizontalList({ title, posters, onPress }) {
  const { colors } = useTheme();

  return (
    <View style={styles.container}>
      <Text style={[styles.title, { color: colors.text }]}>{title}</Text>
      <VirtualizedList
        horizontal
        contentContainerStyle={styles.list}
        data={posters}
        initialNumToRender={5}
        renderItem={({ item: { id, image } }) => (
          <MoviePoster id={id} imageSrc={image} onPress={onPress} />
        )}
        keyExtractor={keyExtractor}
        getItemCount={getItemCount}
        getItem={getItem}
        ListEmptyComponent={ListEmpty}
      />
    </View>
  );
}

HorizontalList.propTypes = {
  title: PropTypes.string.isRequired,
  posters: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      image: PropTypes.string,
    })
  ).isRequired,
  onPress: PropTypes.func,
};

HorizontalList.defaultProps = {
  onPress: () => {},
};
