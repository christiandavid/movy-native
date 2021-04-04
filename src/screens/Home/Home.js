import React from 'react';
import { SafeAreaView, ScrollView, View } from 'react-native';

import { styles } from '@/screens/Home/Home.styles';
import { FeaturedMovie } from '@/screens/Home/FeaturedMovie';
import { TrendingNow } from '@/screens/Home/TrendingNow';

export function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <FeaturedMovie />
        <View style={styles.lists}>
          {/* <HorizontalList title={strings.common.myList} posters={posters} /> */}
          <TrendingNow />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
