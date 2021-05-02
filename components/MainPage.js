import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, TouchableHighlight } from 'react-native';

export default function MainPage({navigation}) {
  return (
    <View style={styles.container}>
 
      <ImageBackground style={{ alignItems: 'center', paddingBottom: 25, justifyContent: "center", width: 414, height: 896 }} 
      source={require('./../images/UserDashboard.svg')}>

      <View style={{ alignItems: 'center'}}>

      </View>

      <TouchableHighlight onPress= { () => navigation.navigate("loginPage")}>
          <Image style={styles.logout} 
              source={require('./../images/logout.png')}>
          </Image> 
      </TouchableHighlight>


        <TouchableHighlight onPress= { () => navigation.navigate("trip")}>
          <Image style={styles.linkup} 
              source={require('./../images/linkup.svg')}>
          </Image> 
        </TouchableHighlight>

     

         <TouchableHighlight onPress={ () => navigation.navigate("signupPage")}> 
          <Image style={{  width: 25, height: 25, left: 175, top:-180 }} 
          source={require('./../images/add.svg')}>
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