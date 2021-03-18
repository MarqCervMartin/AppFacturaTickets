import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator, DrawerItemList } from '@react-navigation/drawer';
import Routes from './stackRoutes';
import { View, TouchableOpacity, Image, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import s from './style';

const Drawer = createDrawerNavigator();

function DrawerMenu(props){
    return(
        <TouchableOpacity onPress={props.navigation}>
            <View style={s.menuContainer}>
                <View style={s.iconoContainer}>
                    <Icon size={45} name={props.iconName} />
                </View>
                <View style={s.tituloContainer}>
                    <Text style={s.tituloTxt}>{props.titleName}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

function Menu(props){
    return(
        <View style={s.container}>
            <View style={s.bgContainer}>
                <TouchableOpacity>
                    <View style={s.userContainer}>
                        <Image style={s.userImagen} source={ require('./logo-brainapps.png') }/>
                        <View style={s.camaraContainer}>
                            <Image style={s.camaraIcon} source={require('./photo-camera.png') }/>
                        </View>
                        <View style={s.userNombre}>
                            <Text style={s.userTitulo}>App Facturas</Text>
                            <Text style={s.userSubTitulo}>Completar Perfil</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>

            <DrawerMenu iconName='home' titleName='Home' navigation={() => props.navigation.navigate('Home')}/>
            <DrawerMenu iconName='user' titleName='Perfil' navigation={() => props.navigation.navigate('Perfil')}/>

        </View>
    )
}

const stackDrawer = () => {
    return (
        <NavigationContainer>
            <Drawer.Navigator drawerContent={(props) => <Menu {...props}/>}>
                <Drawer.Screen name="Home" component={Routes.Home} />
                <Drawer.Screen name="Perfil" component={Routes.Perfil} />
            </Drawer.Navigator>
        </NavigationContainer>
    )
}

export default stackDrawer
