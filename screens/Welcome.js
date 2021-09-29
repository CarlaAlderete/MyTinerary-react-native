import React from 'react'
import { View, Text, StyleSheet, Image} from 'react-native'

const Welcome = ()=>{
    return(
        <View style={styles.mainWelcome}>
            <View style={styles.logoGr}>
                <Image source={require('../assets/logo.png')} style={styles.icon}/>
                <Text style={styles.logoGrText}>Find your perfect trip, designed by insiders who know and love their cities!</Text>
            </View>
            <Text style={styles.call}>GO</Text>
        </View>
    )
}

export default Welcome

const styles = StyleSheet.create({
    mainWelcome:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#7070704d',
    },
    logoGr:{
        width:'90%',
        height:'50%',
        alignItems:'center',
        padding:10,
    },
    icon:{
        width: 100,
        height: 200,
        resizeMode: 'contain',
    },
    logoGrText:{
        textAlign:'center',
        color:'#fff',
        fontWeight:'bold',
        fontSize:25,
    },
    call:{
        backgroundColor:'#5855551e',
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 5,
        paddingTop: 5,
        borderWidth:2,
        borderColor: '#585555b6',
        borderRadius:10,
        fontWeight: 'bold',
        margin:2,
    }
})