import { DarkTheme, DefaultTheme } from '@react-navigation/native';

export const theme = {
  light: {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: '#B0BEC5',
      secondary: '#29434E',
      error: '#D32F2F',
      text: '#212121',
      border: '#212121',
      activeTab: '#1976D2',
      inactiveTab: '#757575',
      base: '#F0F0F0',
      invertedBase: '#000000',
      searchBar: '#fff',
      searchMovieCard: '#fff',
      logo: '#0578FF',
    },
  },
  dark: {
    ...DarkTheme,
    colors: {
      ...DarkTheme.colors,
      primary: '#212121',
      secondary: '#29434E',
      error: '#D32F2F',
      text: '#FFFFFF',
      border: '#FFFFFF',
      activeTab: '#4FC3F7',
      inactiveTab: '#FFFFFF',
      base: '#000000',
      invertedBase: '#ffffff',
      searchBar: '#171717',
      searchMovieCard: '#171717',
      logo: '#FFFFFF',
    },
  },
  posterWidth: 100,
};
