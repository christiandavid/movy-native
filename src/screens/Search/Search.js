import React from 'react';
import { useTheme } from '@react-navigation/native';
import { Text, View, SafeAreaView, ScrollView } from 'react-native';

import { TextStyles } from '@/theme';
import { styles } from '@/screens/Search/Search.styles';
import movie1 from '@/assets/mockImages/movie1.png';
import movie2 from '@/assets/mockImages/movie2.png';
import movie3 from '@/assets/mockImages/movie3.png';
import movie4 from '@/assets/mockImages/movie4.png';
import movie5 from '@/assets/mockImages/movie5.png';
import movie6 from '@/assets/mockImages/movie6.png';
import { SearchMovieCard } from '@/components/SearchMovieCard';
import { SearchBar } from '@/components/SearchBar';

const mockMovies = [
  {
    title: 'Brooklyn Nine-Nine',
    average: 5,
    image: movie1,
  },
  {
    title: 'Peaky Blinders',
    average: 8,
    image: movie2,
  },
  {
    title: 'DC Titans',
    average: 8,
    image: movie3,
  },
  {
    title: 'Suits',
    average: 7,
    image: movie4,
  },
  {
    title: 'You',
    average: 7,
    image: movie5,
  },
  {
    title: 'The Haunting House',
    average: 7,
    image: movie6,
  },
];

export function Search() {
  const { colors } = useTheme();

  return (
    <SafeAreaView>
      <ScrollView>
        <SearchBar />
        <Text style={[TextStyles.title, styles.title, { color: colors.text }]}>
          Popular Searches
        </Text>
        <View style={styles.movies}>
          {mockMovies.map(({ title, average, image }) => (
            <SearchMovieCard title={title} average={average} image={image} />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
