import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import colors from '../styles/colors';

export function PlantSelect() {
  return (
    <View style={styles.container}>
      <Text>PlantSelect</Text>
    </View>
  )
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background
  },
});