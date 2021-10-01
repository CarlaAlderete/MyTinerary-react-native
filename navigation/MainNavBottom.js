import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Welcome from '../screens/Welcome'
import Home from '../screens/Home'
import SignIn from '../screens/SignIn'
import SignUp from '../screens/SignUp'
import Cities from '../screens/Cities'

const Bottom = createBottomTabNavigator()

const Navigator=()=>{
    return(
        <Bottom.Navigator>
            <Bottom.Screen name='Welcome' component={Welcome}/>
            <Bottom.Screen name='Home' component={Home}/>
            <Bottom.Screen name='Cities' component={Cities}/>
            <Bottom.Screen name='SignIn' component={SignIn}/>
            <Bottom.Screen name='SignUp' component={SignUp}/>
        </Bottom.Navigator>
    )
}
export default Navigator
