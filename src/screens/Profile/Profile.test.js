import { render } from '@testing-library/react-native';
import React from 'react';
import { strings } from '@/localization';
import { Profile } from '@/screens/Profile/Profile';
import { withProviders } from '@/test-utils';

describe('Profile', () => {
  const initialState = { user: { username: 'Tester', password: 'Tester' } };

  it('should match the snapshot', () => {
    const { toJSON } = render(withProviders(<Profile />, { initialState }));

    expect(toJSON()).toMatchSnapshot();
  });

  it('should render the title and logout button', async () => {
    const { getByText } = render(withProviders(<Profile />, { initialState }));

    const profileTitle = getByText(
      `${strings.profile.message}${initialState.user.username}`
    );
    const logoutButton = getByText(strings.profile.logout);

    expect(profileTitle).toBeTruthy();
    expect(logoutButton).toBeTruthy();
  });
});
