import React from 'react';
import { useTheme } from '@react-navigation/native';
import {
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { TextStyles } from '@/theme';
import { strings } from '@/localization';
import { HorizontalList } from '@/components';
import { styles } from '@/screens/Home/Home.styles';
import { movyIcon, addIcon, playIcon, infoIcon } from '@/assets';
import poster from '@/assets/mockImages/mockFeaturedPoster.png';

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

export function Home() {
  const { colors } = useTheme();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <ImageBackground source={poster} style={styles.backgroundImage}>
          <LinearGradient
            colors={[
              '#00000000',
              '#00000033',
              `${colors.base}ff`,
              `${colors.base}`,
            ]}
            style={styles.linearGradient}
          >
            <Image
              style={styles.logo}
              source={movyIcon}
              accessibilityIgnoresInvertColors
            />
            <View style={styles.categories}>
              <Text style={[TextStyles.text, { color: colors.text }]}>
                Kids
              </Text>
              <Text style={[TextStyles.text, { color: colors.text }]}>
                Fantasy Movie
              </Text>
              <Text style={[TextStyles.text, { color: colors.text }]}>
                Action
              </Text>
            </View>
            <Text style={[TextStyles.title, styles.tag]}>
              {strings.components.moviePoster.movyOriginal}
            </Text>
            <View style={styles.icons}>
              <View style={styles.icon}>
                <Image
                  source={addIcon}
                  accessibilityIgnoresInvertColors
                  style={{ tintColor: colors.invertedBase }}
                />
                <Text style={[TextStyles.text, { color: colors.text }]}>
                  {strings.common.myList}
                </Text>
              </View>
              <View style={styles.icon}>
                <Image
                  source={playIcon}
                  accessibilityIgnoresInvertColors
                  style={{ tintColor: colors.invertedBase }}
                />
                <Text style={[TextStyles.text, { color: colors.text }]}>
                  {strings.common.play}
                </Text>
              </View>
              <View style={styles.icon}>
                <Image
                  source={infoIcon}
                  accessibilityIgnoresInvertColors
                  style={{ tintColor: colors.invertedBase }}
                />
                <Text style={[TextStyles.text, { color: colors.text }]}>
                  {strings.common.info}
                </Text>
              </View>
            </View>
          </LinearGradient>
        </ImageBackground>
        <View style={styles.lists}>
          <HorizontalList title={strings.common.myList} posters={posters} />
          <HorizontalList
            title={strings.common.trendingNow}
            posters={posters}
          />
          <HorizontalList
            title={strings.common.recentlyAdded}
            posters={posters}
          />
          <HorizontalList title={strings.common.trendingNow} posters={[]} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
