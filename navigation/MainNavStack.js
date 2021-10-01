import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import Home from '../screens/Home'
import SignIn from '../screens/SignIn'
import SignUp from '../screens/SignUp'
import Cities from '../screens/Cities'
import City from '../screens/City'
import Activity from '../screens/Activity'
import Navigator from './MainNavDrawer'

const Stack = createNativeStackNavigator()

const MainNavStack = () =>{
    return(
        <Stack.Navigator screenOptions={{headerStyle:{backgroundColor:'tomato'},headerShown:false}}>
            <Stack.Screen name='Welcome' component={Navigator}/>
            <Stack.Screen name='Home' component={Home}/>
            <Stack.Screen name='SignIn' component={SignIn}/>
            <Stack.Screen name='SignUp' component={SignUp}/>
            <Stack.Screen name='Cities' component={Cities}/>
            <Stack.Screen name='City' component={City}/>
            <Stack.Screen name='Activity' component={Activity}/>
        </Stack.Navigator>
    )
}

export default MainNavStack