import React, {useState} from 'react'
import {Text, StyleSheet, View, Keyboard, ImageBackground, TextInput, SafeAreaView, TouchableWithoutFeedback, Pressable} from 'react-native'
import {connect} from 'react-redux'
import userActions from '../redux/actions/userActions'

const SignIn = ({singInUser,navigation})=>{
    const[data, setData] = useState({mail:'', password:''})
    const[error, setError] = useState('')

    const addDataUserHandler=(e,nameInput)=>{
        setData({...data, [nameInput]:e})
    }

    const signInUserHandler=()=>{
        console.log('aprete el boto')
        if(!data.mail || !data.password){
            setError('*Data is missing, fill in all data')
        }else{
            singInUser(data)
            .then(res=>{
                if(!res.success){
                    setError('*'+res.res)
                }else{
                    navigation.navigate('Home')
                }
            })
        }
    }

    return(
        <TouchableWithoutFeedback onPress={()=>{Keyboard.dismiss()}}>
            <SafeAreaView style={styles.mainSign}>
                <ImageBackground source={require('../assets/fondoerror.jpg')} style={styles.mainImg}>
                    <View style={styles.forms}>
                        <Text style={styles.h3}>Sign in with your account!</Text>
                        <View style={styles.sign}>
                            <Text>Don't have an account?</Text>
                            <Text onPress={()=>navigation.navigate('SignUp')} style={styles.link}>Sign Up</Text>
                        </View>
                        <View style={styles.divError}>
                            <Text style={styles.error}>{error}</Text>
                        </View>
                        <TextInput style={styles.input} placeholder='E-mail' onChangeText={(e)=>addDataUserHandler(e,'mail')}/>
                        <TextInput style={styles.input} placeholder='Password' secureTextEntry={true} onChangeText={(e)=>addDataUserHandler(e,'password')}/>
                        <Text style={styles.call} onPress={signInUserHandler}>Sign In</Text>
                    </View>
                </ImageBackground>
            </SafeAreaView>
        </TouchableWithoutFeedback>
    )
}

const mapDispatchToProps={
    singInUser:userActions.singInUser
}

export default connect(null, mapDispatchToProps)(SignIn)

const styles = StyleSheet.create({
    mainSign:{
        flex:1,
    },
    mainImg:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    forms:{
        width:'80%',
        alignItems:'center',
        backgroundColor:'#c2bfbfd2',
        borderWidth:2,
        borderColor:'#c2bfbf',
        paddingBottom:20,
        paddingTop:20,
        borderRadius:20
    },
    input: {
        width:'95%',
        backgroundColor:'#fff',
        borderRadius:15,
        height: 35,
        margin: 5,
        borderWidth: 1,
        padding: 10,
        paddingLeft:25,
    },
    call:{
        textAlign:'center',
        backgroundColor:'#c2bfbf',
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 5,
        paddingTop: 5,
        borderWidth:2,
        borderColor: '#585555b6',
        borderRadius:10,
        fontWeight: 'bold',
        margin:2,
    },
    h3:{
        marginBottom:5,
        fontSize:25,
    },
    divError:{
        height:12
    },
    error:{
        color:'red',
        fontSize:12,
        padding:0
    },
    sign:{
        flexDirection:'row'
    },
    link:{
        color:'blue'
    }
})