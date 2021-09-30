import React from 'react'
import { StyleSheet, ScrollView, ImageBackground} from 'react-native'
import Hero from '../components/Hero'
import CardCity from '../components/CardCity'

const Cities = ({navigation})=>{
    return(
        <ImageBackground source={require('../assets/fondomain2.png')} style={styles.mainCities}>
            <ScrollView>
                <Hero photo={'https://i.postimg.cc/C1zZjntx/tres.jpg'}/>
                <CardCity navigation={navigation}/>
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