import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, TouchableHighlight } from 'react-native';

export default function MainPage({navigation}) {
  return (
    <View style={styles.container}>
      <ImageBackground style={{ alignItems: 'center', paddingBottom: 25, justifyContent: "center", width: 414, height: 896 }} 
      source={require('./../images/dashboardPage.png')}>

        <TouchableHighlight onPress={ () => navigation.navigate("signupPage")}> 
          <Image style={{  width: 190, height: 50 }} 
          source={require('./../images/signin.png')}>
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
});