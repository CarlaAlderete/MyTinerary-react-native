import React, {useState} from 'react'
import {Text, StyleSheet, View, Keyboard, ImageBackground, TextInput, SafeAreaView, TouchableWithoutFeedback} from 'react-native'
import { connect } from 'react-redux'
import ModalSelector from 'react-native-modal-selector'
import userActions from '../redux/actions/userActions'

const SignUp = ({getcountries,postNewUser})=>{
    const country=[{key: 1,label:'Azerbaijan'},{key: 2,label:'Argentina'},{key: 3,label:'Belize'},{key: 4,label:'Brazil'},{key: 5,label:'Denmark'},{key: 6,label:'France'},{key: 7,label:'Germany'},{key: 8,label:'Iceland'},{key: 9,label:'Spain'},{key: 10,label:'United States'}]
    const [data, setData]= useState({name:'',lastName:'',mail:'',password:'',src:'',country:'', verifyPassword:null})
    const [errorFront, setErrorFront]= useState('')
    const [message, setMessage]=useState({})
    const [verifyPassword, setVerifyPassword]=useState(null)

    const addDataUserHandler=(e, nameInput)=>{
        if(nameInput === 'name' || nameInput === 'lastName'){
            setData({...data,[nameInput]: e})
        }else{
            setData({...data,[nameInput]: e})
        }
    } 
    const addNewUserHandler=()=>{
        setMessage({})
        if(Object.values(data).some((value) => !value)){
            setErrorFront('*Data is missing, fill in all data')
        }else if(!data.mail.includes('@')){
            setErrorFront('*Mail no valid')
        }else if(verifyPassword){
            setErrorFront('')
        }else{
            setErrorFront('')
            postNewUser(data)
            .then(res=>{
                if(!res.success){
                    if(res.res === "Mail is being used with another account"){
                        setErrorFront(res.res)
                    }else{
                        res.res.map(obj=>setMessage({...message, [obj.path[0]]: obj.message}))
                    }  
                }
            })
        }
    }
    const verifyPasswordHandler= (e)=>{
        setErrorFront('')
        e.nativeEvent.text !== data.password ? setVerifyPassword(true) : setVerifyPassword(null)
    }

    return(
        <TouchableWithoutFeedback onPress={()=>{Keyboard.dismiss()}}>
            <SafeAreaView style={styles.mainSign}>
                <ImageBackground source={require('../assets/fondoerror.jpg')} style={styles.mainImg}>
                    <View style={styles.forms}>
                        <Text>Sign up! It is fast and easy.</Text>
                        <Text>Already have an account? Sign In</Text>
                        <View>
                            <Text>{errorFront}</Text>
                        </View>
                        {message.name && <Text>{message.name}</Text>}
                        <TextInput style={!message.name ? styles.input : styles.borderError} placeholder='First Name' onChangeText={(e)=>addDataUserHandler(e,'name')}/>
                        {message.lastName && <Text>{message.lastName}</Text>}
                        <TextInput style={!message.lastName ? styles.input : styles.borderError} placeholder='Last Name' onChangeText={(e)=>addDataUserHandler(e,'lastName')}/>
                        {message.mail && <Text>{message.mail}</Text>}
                        <TextInput style={!message.lastName ? styles.input : styles.borderError} placeholder='E-mail' onChangeText={(e)=>addDataUserHandler(e,'mail')}/>
                        {message.password && <Text>{message.password}</Text>}
                        {verifyPassword && <Text>Passwords does not match</Text>}
                        <TextInput style={(message.password || verifyPassword) ? styles.borderError : styles.input} secureTextEntry={true} placeholder='Password at least 5 characters' onChangeText={(e)=>addDataUserHandler(e,'password')}/>
                        {verifyPassword && <Text>Passwords does not match</Text>}
                        <TextInput style={!verifyPassword ? styles.input : styles.borderError} secureTextEntry={true} placeholder='Repeat Password' onChangeText={(e)=>addDataUserHandler(e,'verifyPassword')} onEndEditing={verifyPasswordHandler}/>
                        {message.src && <Text>{message.src}</Text>}
                        <TextInput style={!message.src ? styles.input : styles.borderError} placeholder='Url' onChangeText={(e)=>addDataUserHandler(e,'src')}/>
                        <ModalSelector
                            style={styles.input}
                            data={country}
                            initValue="Select Coutry"
                            supportedOrientations={['landscape']}
                            accessible={true}
                            scrollViewAccessibilityLabel={'Scrollable options'}
                            onChange={(option)=> setData({...data, country:option.label})}>
                            <TextInput
                                editable={false}
                                placeholder="Select Coutry"
                                value={data.country} />
                        </ModalSelector>
                        <Text style={styles.call} onPress={addNewUserHandler}>Sign Up</Text>
                    </View>
                </ImageBackground>
            </SafeAreaView>
        </TouchableWithoutFeedback>
    )
}

const mapStateToProps=(state)=>{
    return{
        countries:state.user.countries,
    }
}
const mapDispatchToProps={
    postNewUser:userActions.postNewUser
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)

const styles = StyleSheet.create({
    mainSign:{
        flex:1
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
    borderError:{
        width:'95%',
        backgroundColor:'#fff',
        borderRadius:15,
        height: 35,
        margin: 5,
        borderWidth: 1,
        padding: 10,
        paddingLeft:25,
        borderColor:'red'
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
    }
})

