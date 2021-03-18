import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Routes from './stackRoutes'

const Drawer = createDrawerNavigator();

const stackDrawer = () => {
    return (
        <NavigationContainer>
            <Drawer.Navigator>
                <Drawer.Screen name="Home" component={Routes.Home} />
                <Drawer.Screen name="Perfil" component={Routes.Perfil} />
            </Drawer.Navigator>
        </NavigationContainer>
    )
}

export default stackDrawer
