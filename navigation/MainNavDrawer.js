import React from 'react'
import {connect} from 'react-redux'
import userActions from '../redux/actions/userActions'
import {createDrawerNavigator, DrawerContentScrollView, DrawerItem, DrawerItemList} from '@react-navigation/drawer'
import Welcome from '../screens/Welcome'
import Home from '../screens/Home'
import SignIn from '../screens/SignIn'
import SignUp from '../screens/SignUp'
import Cities from '../screens/Cities'

const Drawer = createDrawerNavigator()

const Navigator=({user,signOut,navigation})=>{

    const  signOutHandler=()=>{
        signOut()
        .then(res=>navigation.navigate('Welcome'))
    }

    const CustomDrawerContent=(props)=>{
        return(
            <DrawerContentScrollView {...props} screenOptions>
                {user.token && <DrawerItem label={'Hi! '+ user.name.toUpperCase()} labelStyle={{fontFamily:'Acme_400Regular',fontSize:18, color:'#000'}}/>}
                {user.token && <DrawerItem label="Sing Out" onPress={() => signOutHandler()} inactiveBackgroundColor='#5855551e' labelStyle={
                {fontFamily:'Acme_400Regular',
                 fontSize:18}}
                />}
                <DrawerItemList {...props} />
            </DrawerContentScrollView>
        )
    }
    return(
        <Drawer.Navigator screenOptions={{
            drawerContentStyle:{
                backgroundColor:'#7070704d',
            },
            drawerActiveBackgroundColor:'#585555b6',
            drawerActiveTintColor:'#000',
            drawerInactiveBackgroundColor:'#5855551e',
            drawerStyle:{
                width: 155,
            },
            drawerLabelStyle:{
                fontFamily:'Acme_400Regular',
                fontSize:18
            },
            headerTitleStyle:{
                fontFamily:'Acme_400Regular',
                fontSize:30
            },
            headerStyle:{
                backgroundColor:'#7070704d',
            }}}
            drawerContent={(props) => <CustomDrawerContent {...props}/>}>
            {!user.token ? <Drawer.Screen name='Welcome' component={Welcome} options={{headerShown:false}}/> : null}
            <Drawer.Screen name='Home' component={Home}/>
            <Drawer.Screen name='Cities' component={Cities}/>
            {!user.token ? <Drawer.Screen name='SignIn' component={SignIn}/> : null}
            {!user.token ? <Drawer.Screen name='SignUp' component={SignUp}/> : null}
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
