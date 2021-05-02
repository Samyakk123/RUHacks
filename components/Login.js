import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, TextInput, useState, TouchableHighlight} from 'react-native';
import { color } from 'react-native-reanimated';

export default function Login({navigation}) {
 
  const [text, onChangeText] = React.useState(null);
  const [texttwo, onChangeTexttwo] = React.useState(null);

  return (

    

    <View style={styles.container}>
      
      <ImageBackground style={{ alignItems: 'center', paddingBottom: 25, justifyContent: "center", width: 414, height: 896 }} 
      source={require('./../images/LoginPage.svg')}>
        <TextInput style={styles.inputone}  onChangeText={onChangeText} value={text} placeholder="email" placeholderTextColor="grey"/>
        <TextInput style={styles.input}  onChangeText={onChangeTexttwo} value={texttwo} placeholder="password"/>

        <TouchableHighlight onPress={ () => navigation.navigate("mainPage")}> 
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