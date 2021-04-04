import React, { useRef } from 'react';
import { Animated } from 'react-native';

export function ImageFadeIn({ style, ...rest }) {
  const opacity = useRef(new Animated.Value(0)).current;

  const onLoad = () => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  return (
    <Animated.Image
      onLoad={onLoad}
      {...rest}
      style={[
        {
          opacity: opacity,
        },
        style,
      ]}
    />
  );
}
