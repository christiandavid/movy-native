import React from 'react';
import { useTheme } from '@react-navigation/native';
import { Text, View, Image, ImageBackground } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import { TextStyles } from '@/theme';
import { styles } from '@/screens/Home/Home.styles';
import { movyIcon, addIcon, playIcon, infoIcon } from '@/assets';
import poster from '@/assets/mockImages/mockFeaturedPoster.png';

export function Home() {
  const { colors } = useTheme();

  return (
    <View style={styles.container}>
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
            <Text style={[TextStyles.text, { color: colors.text }]}>Kids</Text>
            <Text style={[TextStyles.text, { color: colors.text }]}>
              Fantasy Movie
            </Text>
            <Text style={[TextStyles.text, { color: colors.text }]}>
              Action
            </Text>
          </View>
          <Text style={[TextStyles.title, styles.tag]}>MOVY ORIGINAL</Text>
          <View style={styles.icons}>
            <View style={styles.icon}>
              <Image
                source={addIcon}
                accessibilityIgnoresInvertColors
                style={{ tintColor: colors.invertedBase }}
              />
              <Text style={[TextStyles.text, { color: colors.text }]}>
                My list
              </Text>
            </View>
            <View style={styles.icon}>
              <Image
                source={playIcon}
                accessibilityIgnoresInvertColors
                style={{ tintColor: colors.invertedBase }}
              />
              <Text style={[TextStyles.text, { color: colors.text }]}>
                Play
              </Text>
            </View>
            <View style={styles.icon}>
              <Image
                source={infoIcon}
                accessibilityIgnoresInvertColors
                style={{ tintColor: colors.invertedBase }}
              />
              <Text style={[TextStyles.text, { color: colors.text }]}>
                Info
              </Text>
            </View>
          </View>
        </LinearGradient>
      </ImageBackground>
    </View>
  );
}
