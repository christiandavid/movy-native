import { StyleSheet, StatusBar } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  logo: {
    margin: 50,
  },
  linearGradient: {
    flex: 1,
    alignItems: 'center',
  },
  categories: {
    alignSelf: 'stretch',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    marginTop: 300,
  },
  icons: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  icon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 70,
  },
  tag: {
    color: '#0578FF',
    margin: 30,
    backgroundColor: 'rgba(5,120,255,0.3)',
    textAlign: 'center',
    padding: 5,
    width: 260,
    borderRadius: 5,
    overflow: 'hidden',
  },
  lists: {
    marginTop: 35,
  },
});
