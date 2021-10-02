import React from 'react'
import { connect } from 'react-redux'
import userActions from '../redux/actions/userActions'
import {createDrawerNavigator, DrawerContentScrollView, DrawerItem, DrawerItemList} from '@react-navigation/drawer'
import Welcome from '../screens/Welcome'
import Home from '../screens/Home'
import SignIn from '../screens/SignIn'
import SignUp from '../screens/SignUp'
import Cities from '../screens/Cities'

const Drawer = createDrawerNavigator()

const Navigator=({user,signOut})=>{
    return(
        <Drawer.Navigator screenOptions={{headerStyle:{backgroundColor:'tomato'}}}>
            <Drawer.Screen name='Welcome' component={Welcome} options={{headerShown:false}}/>
            <Drawer.Screen name='SignIn' component={SignIn}/>
            <Drawer.Screen name='SignUp' component={SignUp}/>
            <Drawer.Screen name='Home' component={Home}/>
            <Drawer.Screen name='Cities' component={Cities}/>
        </Drawer.Navigator>
    )
}

const mapStateToProps=(state)=>{
    return{
        user:state.user.user
    }
}
const mapDispatchToProps={
    signOut:userActions.signOut
}
export default connect(mapStateToProps, mapDispatchToProps)(Navigator)
