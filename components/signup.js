import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, TouchableHighlight, TextInput } from 'react-native';

export default function signup({navigation}) {

  const [text, onChangeText] = React.useState(null);
  const [texttwo, onChangeTexttwo] = React.useState(null);
  const [texttree, onChangeTextthree] = React.useState(null);
  const [textfour, onChangeTextfour] = React.useState(null);
  return (
    <View style={styles.container}>
      <ImageBackground style={{ alignItems: 'center', paddingTop: 450, justifyContent: "center", width: 414, height: 896 }} 
      source={require('./../images/signup.svg')}>
        <TextInput style={styles.inputone}  onChangeText={onChangeText} value={text} placeholder="name" placeholderTextColor="grey"/>
        <TextInput style={styles.input}  onChangeText={onChangeTexttwo} value={texttwo} placeholder="password" placeholderTextColor="grey"/>
        <TextInput style={styles.input}  onChangeText={onChangeTextthree} value={texttree} placeholder="email" placeholderTextColor="grey"/>
        <TextInput style={styles.input}  onChangeText={onChangeTextfour} value={textfour} placeholder="gender" placeholderTextColor="grey"/>
        
        <TouchableHighlight onPress={ () => navigation.navigate("loginPage")}> 
          <Image style={{  width: 190, height: 50, marginTop:60 }} 
          source={require('./../images/createButton.png')}>
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
    marginTop:-350,
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
