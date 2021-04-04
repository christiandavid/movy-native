import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { shallowEqual, useSelector } from 'react-redux';
import { LayoutAnimation, Platform, UIManager } from 'react-native';

import { NAVIGATION } from '@/constants';
import { HorizontalList } from '@/components';
import { getList } from '@/selectors/UserSelectors';
import { strings } from '@/localization';

if (
  Platform.OS === 'android' &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

export function MyList() {
  const navigation = useNavigation();

  const userList = useSelector(getList, shallowEqual);

  const handleShowDetails = movieId => {
    navigation.navigate(NAVIGATION.myList, { movieId: movieId }); // TODO: Add go to details
  };

  useEffect(() => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
  });

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
