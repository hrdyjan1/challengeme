import React from 'react';
import { View } from 'react-native';
import Component from './src/Component';
import styles from './styles';

export default function App() {
  return (
    <View style={styles.container}>
      <Component />
    </View>
  );
}
