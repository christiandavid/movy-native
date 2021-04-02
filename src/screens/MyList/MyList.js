import React from 'react';
import { View } from 'react-native';
import { GridList } from '@/components';
import { styles } from '@/screens/MyList/MyList.styles';

const posters = [
  {
    id: 'abc1',
    image: 'https://image.tmdb.org/t/p/w500/fev8UFNFFYsD5q7AcYS8LyTzqwl.jpg',
  },
  {
    id: 'abc2',
    image: 'https://image.tmdb.org/t/p/w500/iopYFB1b6Bh7FWZh3onQhph1sih.jpg',
  },
  {
    id: 'abc3',
    image: 'https://image.tmdb.org/t/p/w500/kf456ZqeC45XTvo6W9pW5clYKfQ.jpg',
  },
  {
    id: 'abc4',
    image: 'https://image.tmdb.org/t/p/w500/cjaOSjsjV6cl3uXdJqimktT880L.jpg',
  },
  {
    id: 'abc5',
    image: 'https://image.tmdb.org/t/p/w500/z8TvnEVRenMSTemxYZwLGqFofgF.jpg',
  },
  {
    id: 'abc6',
    image: 'https://image.tmdb.org/t/p/w500/egg7KFi18TSQc1s24RMmR9i2zO6.jpg',
  },
  {
    id: 'abc7',
    image: 'https://image.tmdb.org/t/p/w500/zDq2pwPyt4xwSFHKUoNN2LohDWj.jpg',
  },
  {
    id: 'abc8',
    image: 'https://image.tmdb.org/t/p/w500/vQJ3yBdF91tzd73G8seL5bOxfvG.jpg',
  },
  {
    id: 'abc9',
    image: 'https://image.tmdb.org/t/p/w500/8rIoyM6zYXJNjzGseT3MRusMPWl.jpg',
  },
  {
    id: 'abc10',
    image: 'https://image.tmdb.org/t/p/w500/lrNbt21hRirjyTK0SeLA0L4RAVS.jpg',
  },
];

export function MyList() {
  return (
    <View style={styles.container}>
      <GridList style={styles.gridList} posters={posters} />
    </View>
  );
}
