import React from 'react'
import { StyleSheet, ScrollView, ImageBackground} from 'react-native'
import Hero from '../components/Hero'
import CardCity from '../components/CardCity'

const Cities = ()=>{
    return(
        <ImageBackground source={require('../assets/fondomain2.png')} style={styles.mainCities}>
            <ScrollView>
                <Hero photo={'tres.jpg'}/>
                <CardCity/>
            </ScrollView>
        </ImageBackground>
    )
}

export default Cities

const styles = StyleSheet.create({
    mainCities:{
        flex:1
    }
})