import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { shallowEqual, useSelector } from 'react-redux';

import { NAVIGATION } from '@/constants';
import { HorizontalList } from '@/components';
import { getList } from '@/selectors/UserSelectors';
import { strings } from '@/localization';

export function MyList() {
  const navigation = useNavigation();

  const userList = useSelector(getList, shallowEqual);

  const handleShowDetails = movieId => {
    navigation.navigate(NAVIGATION.myList, { movieId: movieId }); // TODO: Add go to details
  };

  return (
    !!userList.length && (
      <HorizontalList
        title={strings.common.myList}
        posters={userList}
        onPress={handleShowDetails}
      />
    )
  );
}
