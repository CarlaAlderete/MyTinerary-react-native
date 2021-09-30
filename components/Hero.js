import React, { useState } from 'react'
import {Image, ImageBackground, StyleSheet} from 'react-native'

const Hero = ({photo})=>{

    return(
        <ImageBackground source={{uri: photo==='https://i.postimg.cc/C1zZjntx/tres.jpg' ? 'https://i.postimg.cc/C1zZjntx/tres.jpg' :`https://mytinerary-ca.herokuapp.com/assets/${photo}`}} style={styles.hero}>
            <Image source={require('../assets/logo.png')} style={styles.logo}/>
        </ImageBackground>
    )
}
export default Hero

const styles = StyleSheet.create({
    hero:{
        width:'100%',
        height:450,
        resizeMode:'cover',
        alignItems:'flex-end',
        justifyContent:'flex-end'
    },
    logo:{
        width:100,
        height:100,
        resizeMode: 'contain',
        margin:10
    },
})