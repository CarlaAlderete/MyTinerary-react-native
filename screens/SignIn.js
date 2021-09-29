import React, {useState} from 'react'
import {Text, StyleSheet, View, Keyboard, ImageBackground, TextInput, SafeAreaView, StatusBar, Platform, TouchableWithoutFeedback} from 'react-native'
import {connect} from 'react-redux'

const SignIn = ()=>{
    const[data, setData] = useState({mail:'', password:''})
    const[sign, setSign] = useState(false)
    const[error, setError] = useState('')

    const addDataUserHandler=(e,nameInput)=>{
        setData({...data, [nameInput]:e})
    }

    console.log(data)
    return(
        <TouchableWithoutFeedback onPress={()=>{Keyboard.dismiss()}}>
            <SafeAreaView style={styles.mainSign}>
                <ImageBackground source={require('../assets/fondoerror.jpg')} style={styles.mainImg}>
                    <View style={styles.forms}>
                        <Text style={styles.h3}>Sign in with your account!</Text>
                        <Text>Don't have an account? Sign Up</Text>
                        <Text>{error}</Text>
                        <TextInput style={styles.input} placeholder='E-mail' onChangeText={(e)=>addDataUserHandler(e,'mail')}/>
                        <TextInput style={styles.input} placeholder='Password' secureTextEntry={true} onChangeText={(e)=>addDataUserHandler(e,'password')}/>
                        <Text style={styles.call}>Sign In</Text>
                    </View>
                </ImageBackground>
            </SafeAreaView>
        </TouchableWithoutFeedback>
    )
}

export default SignIn

const styles = StyleSheet.create({
    mainSign:{
        flex:1,
        marginTop:Platform.OS === 'android' ? StatusBar.currentHeight : 0
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
    }
})

  
//     render(){
//         const addDataUserHandler=(e)=>{
//             this.setState({data:{...this.state.data,[e.target.name]: e.target.value}})
//         }
    
//         const signInUserHandler=()=>{
//             if(!this.state.data.mail || !this.state.data.password){
//                 this.setState({error:'*Data is missing, fill in all data'})
//             }else{
//                 this.props.singInUser(this.state.data)
//                 .then(res=>{
//                     if(!res.success){
//                         this.setState({error:'*'+res.res})
//                     }
//                 })
//             }
//         }
//         const responseGoogle=res=>{
//             let dataGoogle={
//                 mail: res.profileObj.email.toLowerCase(),
//                 password: res.profileObj.googleId,
//                 flagGoogle:true
//             }
//             this.props.singInUser(dataGoogle)
//                 .then(res=>{
//                     if(!res.success){
//                         this.setState({error:'*'+res.res})
//                     }
//                 })
//         }

//                         <input type='email' value={this.state.data.mail} placeholder='E-mail' name='mail' onChange={addDataUserHandler}/>
//                         <input type='password' value={this.state.data.password} placeholder='Password' name='password' onChange={addDataUserHandler}/>
//                         <button onClick={signInUserHandler}>Sign In</button>

// const mapDispatchToProps={
//     singInUser:userActions.singInUser
// }
// export default connect(null, mapDispatchToProps)(SingIn)