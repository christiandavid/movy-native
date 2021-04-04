import { render } from '@testing-library/react-native';
import React from 'react';
import { MyList } from '@/screens/MyList/MyList';
import { withProviders } from '@/test-utils';

describe('MyList', () => {
  it('should match the snapshot', () => {
    const { toJSON } = render(withProviders(<MyList />));

    expect(toJSON()).toMatchSnapshot();
  });
});
