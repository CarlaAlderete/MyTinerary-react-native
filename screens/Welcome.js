import React from 'react'
import { View, Text, StyleSheet, Image} from 'react-native'
import { Video, AVPlaybackStatus } from 'expo-av'


const Welcome =({navigation})=>{
    return(
        <View style={styles.mainWelcome}>
            <View style={styles.logoGr}>
                <Image source={require('../assets/logo.png')} style={styles.icon}/>
                <Text style={styles.logoGrText}>Find your perfect trip, designed by insiders who know and love their cities!</Text>
            </View>
            <Text style={styles.call} onPress={()=>navigation.navigate('Home')}>GO</Text>
            <Video source={require('../assets/videoHero3.mp4')}
                style={styles.backgroundVideo}
                useNativeControls={false}
                resizeMode="Video.RESIZE_MODE_CONTAIN"
                shouldPlay
                posterSource={require('../assets/videoFondo.jpeg')}
                isLooping />
        </View>
    )
}

export default Welcome

const styles = StyleSheet.create({
    backgroundVideo:{
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        zIndex:-1
    },
    mainWelcome:{
        flex:1,
        alignItems:'center',
        justifyContent:'space-between',
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
        color:'#4F4E4E',
        fontSize:25,
        fontFamily:'Roboto_700Bold'
    },
    call:{
        fontFamily:'Roboto_400Regular',
        fontSize:20,
        backgroundColor:'grey',
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 5,
        paddingTop: 5,
        borderWidth:2,
        borderColor: '#585555b6',
        borderRadius:15,
        marginBottom:25,
        width:90,
        textAlign:'center'
    }
})