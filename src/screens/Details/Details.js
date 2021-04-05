import React from 'react';
import { useTheme } from '@react-navigation/native';
import { Image, View, Text } from 'react-native';
import { TextStyles } from '@/theme';
import poster from '@/assets/mockImages/poster.jpeg';
import { StarRating } from '@/components/StarRating';
import { addIcon } from '@/assets';
import { Button } from '@/components';
import { styles } from '@/screens/Details/Detail.styles';

export function Details() {
  const { colors } = useTheme();

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={poster}
        accessibilityIgnoresInvertColors
      />
      <View style={styles.info}>
        <View style={styles.genres}>
          <Button
            icon={addIcon}
            style={[styles.addButton, { backgroundColor: colors.invertedBase }]}
            inverted
          />
          <Text style={[TextStyles.text, styles.genreTag]}>Action</Text>
          <Text style={[TextStyles.text, styles.genreTag]}>Comedy</Text>
        </View>
        <View style={styles.titleAndYear}>
          <Text style={[TextStyles.title, { color: colors.text }]}>
            Kill Bill: Vol.1
          </Text>
          <Text style={[TextStyles.text, { color: colors.text }]}>(2003)</Text>
        </View>
        <View style={styles.rating}>
          <StarRating average={10} />
        </View>
        <Text
          style={[TextStyles.text, styles.overview, { color: colors.text }]}
        >
          A former assassin, known simply as The Bride (Uma Thurman), wakes from
          a coma four years after her jealous ex-lover Bill (David Carradine)
          attempts to murder her on her wedding day. Fueled by an insatiable
          desire for revenge, she vows to get even with every person who
          contributed to the loss of her unborn child, her entire wedding party,
          and four years of her life.
        </Text>
      </View>
    </View>
  );
}
