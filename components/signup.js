import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';


export default function signup() {
  return (
    <View style={styles.container}>
      <Text>I am second screen.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    
    
  },
});
