import { useTheme } from '@react-navigation/native';
import PropTypes from 'prop-types';
import React from 'react';
import { StyleSheet, View, Text, VirtualizedList } from 'react-native';
import { strings } from '@/localization';
import { MoviePoster } from '@/components';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'stretch',
  },
  list: {
    flexGrow: 1,
  },
  listEmptyView: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    paddingLeft: 15,
    paddingTop: 20,
    paddingBottom: 17,
  },
});

const ListEmpty = () => (
  <View style={styles.listEmptyView}>
    <Text style={styles.listEmptyText}>
      {strings.components.horizontalList.listEmpty}
    </Text>
  </View>
);

export function HorizontalList({ title, posters }) {
  const { colors } = useTheme();

  const getItem = (data, index) => ({
    id: data[index].id,
    image: data[index].image,
  });
  const getItemCount = data => data.length;

  return (
    <View style={styles.container}>
      <Text style={[styles.title, { color: colors.text }]}>{title}</Text>
      <VirtualizedList
        contentContainerStyle={styles.list}
        data={posters}
        initialNumToRender={5}
        renderItem={({ item }) => <MoviePoster imageSrc={item.image} />}
        keyExtractor={item => item.id}
        getItemCount={getItemCount}
        getItem={getItem}
        horizontal={true}
        ListEmptyComponent={ListEmpty}
      />
    </View>
  );
}

HorizontalList.propTypes = {
  title: PropTypes.string.isRequired,
  posters: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      image: PropTypes.string,
    })
  ).isRequired,
};
