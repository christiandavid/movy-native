import { useState, useCallback } from 'react';

export function useComponentSize() {
  const [size, setSize] = useState({});

  const onLayout = useCallback(event => {
    const { width, height } = event.nativeEvent.layout;
    setSize({ width, height });
  }, []);

  return [size, onLayout];
}
