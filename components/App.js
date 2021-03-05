//import libraries
import React, { Component } from 'react';
import firebase from '@react-native-firebase/app';
import auth from '@react-native-firebase/auth';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import LoadingForm from './LoginForm';
import Home from './Home';
import Perfil from './Perfil';
import BG from '../images/bg.jpg';
import Loading from './Loading';
//create a component
class App extends Component{

  state = {
    loggedIn : null
  }

  componentDidMount(){
    var firebaseConfig = {
      apiKey: "AIzaSyACYHtm-SiX88CL9mrIgRhhhchMtEBgw3Q",
      authDomain: "facturatickets.firebaseapp.com",
      projectId: "facturatickets",
      storageBucket: "facturatickets.appspot.com",
      messagingSenderId: "302002266240",
      appId: "1:302002266240:web:6c9a13ce75c64022828665",
      measurementId: "G-7462758Z3K"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    auth().onAuthStateChanged(user =>{
      if(user){
        this.setState({
          loggedIn: true
        })
      }else{
        this.setState({
          loggedIn: false
        })
      }
    });
  }

  renderContent = () =>{
    switch(this.state.loggedIn){
      case false:
        return <ImageBackground style={styles.container} source={BG}>
                <LoadingForm/>
              </ImageBackground>
      case true:
        return <Perfil/>

      default:
        return <Loading/> 
    }
  }

  render(){
    return(
      <View style={styles.container}>
        {this.renderContent()}
      </View>
    );
  }
}

//define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    height: '100%',
    width: '100%'

  },
})

//make this component available to the app
export default App;