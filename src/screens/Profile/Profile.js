import { useTheme } from '@react-navigation/native';
import React from 'react';
import { Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { getUser } from '@/selectors/UserSelectors';
import { logout } from '@/actions/UserActions';
import { Button } from '@/components';
import { strings } from '@/localization';
import { styles } from '@/screens/Profile/Profile.styles';
import { TextStyles } from '@/theme';

export function Profile() {
  const { colors } = useTheme();
  const dispatch = useDispatch();

  const user = useSelector(getUser);

  const logoutUser = () => {
    dispatch(logout());
  };

  return (
    <View style={styles.container}>
      <Text style={[TextStyles.title, styles.title, { color: colors.text }]}>
        {strings.profile.message}
        {user.username}
      </Text>
      <Button title={strings.profile.logout} onPress={logoutUser} />
    </View>
  );
}
