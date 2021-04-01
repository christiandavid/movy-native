import { render } from '@testing-library/react-native';
import React from 'react';
import { Home } from '@/screens/Home/Home';
import { withProviders } from '@/test-utils';

describe('HomeList', () => {
  it('should match the snapshot', () => {
    const { toJSON } = render(withProviders(<Home />));

    expect(toJSON()).toMatchSnapshot();
  });
});
