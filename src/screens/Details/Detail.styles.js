import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: '100%',
    height: 500,
  },
  info: {
    paddingHorizontal: 20,
  },
  details: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-end',
    marginVertical: 20,
  },
  button: {
    position: 'absolute',
    right: 5,
    top: -40,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: 80,
    height: 80,
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 50,
    backgroundColor: 'white',
    zIndex: 2,
  },
  genreTag: {
    color: 'black',
    fontWeight: 'bold',
    borderBottomWidth: 1,
    backgroundColor: 'gold',
    borderRadius: 10,
    overflow: 'hidden',
    paddingHorizontal: 15,
    marginRight: 5,
    marginBottom: 10,
  },
  titleAndYear: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  rating: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  overview: {
    marginVertical: 20,
  },
});
