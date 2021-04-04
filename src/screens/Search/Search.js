import React from 'react';
import { useTheme } from '@react-navigation/native';
import { Text, View, SafeAreaView, VirtualizedList } from 'react-native';

import { TextStyles } from '@/theme';
import { styles } from '@/screens/Search/Search.styles';
import movie1 from '@/assets/mockImages/movie1.png';
import movie2 from '@/assets/mockImages/movie2.png';
import movie3 from '@/assets/mockImages/movie3.png';
import movie4 from '@/assets/mockImages/movie4.png';
import movie5 from '@/assets/mockImages/movie5.png';
import movie6 from '@/assets/mockImages/movie6.png';
import { ListEmpty, SearchMovieCard, SearchBar } from '@/components';
import { strings } from '@/localization';

const results = [
  {
    id: 1,
    title: 'Brooklyn Nine-Nine',
    average: 5,
    image: movie1,
  },
  {
    id: 3,
    title: 'Peaky Blinders',
    average: 8,
    image: movie2,
  },
  {
    id: 4,
    title: 'DC Titans',
    average: 8,
    image: movie3,
  },
  {
    id: 5,
    title: 'Suits',
    average: 7,
    image: movie4,
  },
  {
    id: 6,
    title: 'You',
    average: 7,
    image: movie5,
  },
  {
    id: 7,
    title: 'The Haunting House',
    average: 7,
    image: movie6,
  },
  {
    id: 8,
    title: 'Brooklyn Nine-Nine',
    average: 5,
    image: movie1,
  },
  {
    id: 9,
    title: 'Peaky Blinders',
    average: 8,
    image: movie2,
  },
  {
    id: 14,
    title: 'DC Titans',
    average: 8,
    image: movie3,
  },
  {
    id: 15,
    title: 'Suits',
    average: 7,
    image: movie4,
  },
  {
    id: 16,
    title: 'You',
    average: 7,
    image: movie5,
  },
  {
    id: 17,
    title: 'The Haunting House',
    average: 7,
    image: movie6,
  },
];

const getItem = (data, index) => ({
  id: data[index].id,
  title: data[index].title,
  average: data[index].average,
  image: data[index].image,
});
const getItemCount = data => data.length;
const keyExtractor = item => item.id;

export function Search() {
  const { colors } = useTheme();

  return (
    <SafeAreaView style={styles.container}>
      <SearchBar />
      <Text style={[TextStyles.title, styles.title, { color: colors.text }]}>
        {strings.search.title}
      </Text>
      <VirtualizedList
        contentContainerStyle={styles.movies}
        data={results}
        initialNumToRender={5}
        renderItem={({ item: { id, title, average, image } }) => (
          <SearchMovieCard
            id={id}
            title={title}
            average={average}
            image={image}
          />
        )}
        keyExtractor={keyExtractor}
        getItemCount={getItemCount}
        getItem={getItem}
        ListEmptyComponent={ListEmpty}
      />
    </SafeAreaView>
  );
}
