import React, {useState, useEffect} from 'react'
import { View, Text, StyleSheet, ImageBackground } from 'react-native';

import auth from '@react-native-firebase/auth';
import Drawer from '../navigation/stackDrawer';
import LoadingForm from '../components/LoginForm';
import BG from '../images/bg.jpg';

const Login = () => {
    const [loggedIn, setLoggedIn] = useState(false);

    useEffect(()=>{
        auth().onAuthStateChanged(user =>{
            if(user){
              setLoggedIn(true)
            }else{
              setLoggedIn(false)
            }
          });
        
    },[]);

    return (
        <View style={styles.container}>
            { loggedIn 
                ? <Drawer/>
                : <ImageBackground style={styles.container} source={BG}><LoadingForm/></ImageBackground>
            }
        </View>
    )
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

export default Login
