import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { shallowEqual, useSelector } from 'react-redux';
import { View } from 'react-native';

import { NAVIGATION } from '@/constants';
import { GridList } from '@/components';
import { getList } from '@/selectors/UserSelectors';
import { styles } from '@/screens/MyList/MyList.styles';

export function MyList() {
  const navigation = useNavigation();
  const userList = useSelector(getList, shallowEqual);

  const handleShowDetails = movieId => {
    console.log('🚀 ~ movieId', movieId);
  };

  return (
    <View style={styles.container}>
      <GridList
        style={styles.gridList}
        posters={userList}
        onPress={handleShowDetails}
      />
    </View>
  );
}
