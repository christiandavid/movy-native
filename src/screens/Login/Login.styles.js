import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 40,
    justifyContent: 'center',
  },
  logo: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  formContainer: {
    marginVertical: 20,
  },
  submitButton: {
    marginTop: 20,
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    borderRadius: 10,
    padding: 10,
    color: 'white',
  },
});
