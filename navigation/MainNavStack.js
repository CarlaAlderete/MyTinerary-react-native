import React, {useEffect} from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { connect } from 'react-redux'
import Home from '../screens/Home'
import SignIn from '../screens/SignIn'
import SignUp from '../screens/SignUp'
import Cities from '../screens/Cities'
import City from '../screens/City'
import Activity from '../screens/Activity'
import Navigator from './MainNavDrawer'
import userActions from '../redux/actions/userActions'

const Stack = createNativeStackNavigator()

const MainNavStack = ({forcedSignIn}) =>{

    useEffect(() =>{
        if(AsyncStorage.getItem('token')){
        forcedSignIn(AsyncStorage.getItem('token'))
        }
    },[])

    return(
        <Stack.Navigator screenOptions={{
            headerStyle:{
                backgroundColor:'#7070704d'
            },
            headerTitleStyle:{
                fontFamily:'Acme_400Regular',
                fontSize:30
            }}}>
            <Stack.Screen name='Start' component={Navigator} options={{headerShown:false}}/>
            <Stack.Screen name='Home' component={Home}/>
            <Stack.Screen name='SignIn' component={SignIn}/>
            <Stack.Screen name='SignUp' component={SignUp}/>
            <Stack.Screen name='Cities' component={Cities}/>
            <Stack.Screen name='City' component={City}/>
            <Stack.Screen name='Activity' component={Activity}/>
        </Stack.Navigator>
    )
}
const mapDispatchToProps={
    forcedSignIn:userActions.forcedSignIn
}
export default connect(null, mapDispatchToProps)(MainNavStack)