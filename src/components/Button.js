import { useTheme } from '@react-navigation/native';
import PropTypes from 'prop-types';
import React from 'react';
import { StyleSheet, Text, Image, TouchableOpacity } from 'react-native';

import { TextStyles } from '@/theme';

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    borderWidth: 1,
    padding: 10,
    width: '100%',
  },
});

export function Button({
  style: buttonStyle,
  textStyle,
  icon,
  title,
  inverted,
  ...rest
}) {
  const { colors } = useTheme();

  const style = buttonStyle || [styles.button, { borderColor: colors.border }];

  return (
    <TouchableOpacity style={style} {...rest}>
      {icon && (
        <Image
          source={icon}
          accessibilityIgnoresInvertColors
          style={
            inverted
              ? { tintColor: colors.base }
              : { tintColor: colors.invertedBase }
          }
        />
      )}
      <Text style={[{ color: colors.text }, TextStyles.label, textStyle]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}

Button.propTypes = {
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  textStyle: PropTypes.object,
  title: PropTypes.string,
  icon: PropTypes.number,
};

Button.defaultProps = {
  style: null,
  textStyle: null,
  title: null,
  icon: null,
};
