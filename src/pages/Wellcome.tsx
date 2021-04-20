import React from 'react';
import { 
  Image, 
  StyleSheet, 
  Text, 
  SafeAreaView, 
  TouchableOpacity,
  Dimensions
} from 'react-native';

import { Feather } from '@expo/vector-icons';
import colors from '../styles/colors';
import watering from '../assets/watering.png';
import fonts from '../styles/fonts';

export function Wellcome() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>
        Gerencie {'\n'} 
        suas plantas {'\n'}
        de forma fácil
      </Text>

      <Image 
        source={watering} 
        style={styles.image} 
        resizeMode="contain"
      />

      <Text style={styles.subtitle}>
        Não esqueça mais de regar suas plantas. 
        Nós cuidamos de lembrar você sempre que precisar.
      </Text>

      <TouchableOpacity 
        style={styles.button} 
        activeOpacity={0.7}  
      >
          <Feather 
            name="chevron-right"
            style={styles.buttonIcon} 
          />
      </TouchableOpacity>

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  title: {
    fontSize: 32,
    textAlign: 'center',
    color: colors.heading,
    marginTop: 38,
    fontFamily: fonts.heading,
    lineHeight: 38
  },
  subtitle: {
    textAlign: 'center',
    fontSize: 18,
    paddingHorizontal: 20,
    color: colors.heading,
    fontFamily: fonts.text
  },
  image: {
    height: Dimensions.get('window').width * 0.7,
  },
  button: {
    backgroundColor: colors.green,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
    marginBottom: 10,
    width: 56,
    height: 56
  },
  buttonIcon: {
    fontSize: 32,
    color: colors.white
  }
});