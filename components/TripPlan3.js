import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, TouchableHighlight } from 'react-native';

export default function TripPlan3({navigation}) {
  return (
    <View style={styles.container}>

    <ImageBackground style={{ alignItems: 'center', paddingBottom: 25, justifyContent: "center", width: 414, height: 896 }} 
    source={require('./../images/TripRoulette3.svg')}>

      <TouchableHighlight style={{right: 147, top: 248}} onPress= { () => navigation.navigate("trip2")}>
        <Image style={{ width: 76, height: 76 }} source={require('./../images/next2.png')}></Image>    
      </TouchableHighlight >

      <TouchableHighlight style={{left: 147, top: 170}} onPress= { () => navigation.navigate("loginPage")}>
        <Image style={{ width: 76, height: 76 }} source={require('./../images/next.png')}></Image>    
      </TouchableHighlight >
    
    </ImageBackground>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    
    
  },
  inputone: {
    paddingLeft:10,
    display:'flex',
    marginTop:-130,
    width: 268,
    height: 50,
    borderWidth: 1,
    backgroundColor: '#F8F8F8',
    borderRadius: 50,
    borderColor: "white",
    shadowColor: "#000",
    shadowOffset: {
	    width: 0,
	    height: 2,
    },
    shadowOpacity: 0.30,
    shadowRadius: 2.65,
    elevation: 5, 
  },
  input: {
    paddingLeft:10,
    display:'flex',
    marginTop:15,
    marginBottom:10,
    width: 268,
    height: 50,
    borderWidth: 1,
    backgroundColor: '#F8F8F8',
    borderRadius: 50,
    borderColor: "white",
    shadowColor: "#000",
    shadowOffset: {
	    width: 0,
	    height: 2,
    },
    shadowOpacity: 0.30,
    shadowRadius: 2.65,
    elevation: 5,
  },
});