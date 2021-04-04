import { StyleSheet, StatusBar } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight + 30,
  },
  movies: {},
  title: {
    marginVertical: 20,
    paddingLeft: 10,
  },
});
