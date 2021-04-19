import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import watering from '../assets/watering.png';

export function Wellcome() {
  return (
    <View style={styles.container}>
      <Text>Gerencie suas plantas de forma fácil</Text>

      <Image source={watering} />

      <Text>
        Não esqueça mais de regar suas plantas. 
        Nós cuidamos de lembrar você sempre que precisar.
      </Text>

      <TouchableOpacity>
        <Text> 🌍</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between'
  }
});