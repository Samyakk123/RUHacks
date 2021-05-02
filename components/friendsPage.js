import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, TouchableHighlight } from 'react-native';

export default function friendsPage({navigation}) {
  return (
    <View style={styles.container}>
      <ImageBackground style={{ alignItems: 'center', paddingBottom: 25, justifyContent: "center", width: 414, height: 896 }} 
      source={require('./../images/plan_final.svg')}>
      

      <TouchableHighlight style={{ top: 220 }} onPress= { () => navigation.navigate("inv")}>
        <Image style={{ alignItems: 'center', justifyContent: "center", width: 250, height: 70 }} 
        source={require('./../images/sendInvite.png')}>
        </Image>
      </TouchableHighlight>

      </ImageBackground>



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
  logout:{ 
    top: -325,
    left: 165, 
    width: 28.83,
    height: 27.22,
   },
   linkup: {
    top: -225,
     width: 394, 
     height: 100,
    },

});