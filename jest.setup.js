import { NativeModules } from 'react-native';
import mockRNCNetInfo from '@react-native-community/netinfo/jest/netinfo-mock.js';

NativeModules.ReactLocalization = {
  language: 'en',
};

require('./node_modules/react-native-reanimated/src/reanimated2/jestUtils').setUpTests();

jest.mock('react-native-bootsplash', () => ({
  hide: jest.fn().mockResolvedValueOnce(),
  show: jest.fn().mockResolvedValueOnce(),
  getVisibilityStatus: jest.fn().mockResolvedValue('hidden'),
}));

jest.mock('react-native-config', () => ({
  Config: {
    API_BASE_URL: 'XXX',
    BUILD_VARIANT: 'TEST',
    API_MOVIE_DB_KEY: '123',
  },
}));
// Silence the warning: Animated: `useNativeDriver` is not supported
jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');
jest.mock('@react-native-community/netinfo', () => mockRNCNetInfo);
jest.mock('@react-navigation/native', () => {
  return {
    ...jest.requireActual('@react-navigation/native'),
    useNavigation: () => ({
      navigate: jest.fn(),
    }),
  };
});
