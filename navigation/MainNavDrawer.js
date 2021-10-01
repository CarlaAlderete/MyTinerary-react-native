import React from 'react'
import {createDrawerNavigator} from '@react-navigation/drawer'
import Welcome from '../screens/Welcome'
import Home from '../screens/Home'
import SignIn from '../screens/SignIn'
import SignUp from '../screens/SignUp'
import Cities from '../screens/Cities'

const Drawer = createDrawerNavigator()

const Navigator=()=>{
    return(
        <Drawer.Navigator>
            <Drawer.Screen name='Welcome' component={Welcome}/>
            <Drawer.Screen name='SignIn' component={SignIn}/>
            <Drawer.Screen name='SignUp' component={SignUp}/>
            <Drawer.Screen name='Home' component={Home}/>
            <Drawer.Screen name='Cities' component={Cities}/>
        </Drawer.Navigator>
    )
}
export default Navigator
