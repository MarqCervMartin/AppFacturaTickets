//import libraries
import React, { Component } from 'react';
import auth from '@react-native-firebase/auth';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Button } from 'native-base';

//create a component
const Home = () => {
  return(
    <View style={styles.container}>
      <View style={styles.homeContainer}>
          <Text style={styles.heading}>
            Welcome to the authorized screen
          </Text>
          <Text style={styles.content}>
            You are logged in from firebase
          </Text>
          <TouchableOpacity style={{padding:20}} onPress={() => auth().signOut()}>
            <Text style={{color:'#1B9CFC'}}>Logout</Text>
          </TouchableOpacity>
          <Button primary style={{padding:20}} onPress={() => auth().signOut()}><Text>Success!</Text></Button>
      </View>
    </View>
  );
}

//define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center',
    alignItems:'center'
  },

  homeContainer:{
    padding:10,
    borderBottomColor:'rgba(255,255,255,.7)',
    borderBottomWidth: 5
  },
  heading:{
    fontSize: 22,
    color: 'black',
    marginBottom:10
  },
  content:{
    marginTop:10,
    fontSize:19,

  }
})

//make this component available to the app
export default Home;