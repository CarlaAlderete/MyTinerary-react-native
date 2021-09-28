import React from 'react'
import { View, Text, StyleSheet, ImageBackground, ScrollView} from 'react-native'
import MyCarousel from '../components.js/MyCarousel'

const Home = ()=>{
    const info = [
        { foto:require('../assets/remo.jpg'),h3: 'Why us?', text:'A short-term rental service by and for gay travelers is needed to help provide a comfortable and safe experience'},
        { foto:require('../assets/hotel.jpg'), h3: 'The best destinations', text:'We have information on all the selected destinations with the best activities for your satisfaction'},
        { foto:require('../assets/party.jpg'), h3: 'Dates and activities', text:'We have updated all the activities of the LGBTIQ + community in each city and the LGBTIQ + pride marches so you can live a different experience'},
    ]

    const infoContenido =info.map((obj, index) =>{
        return(
            <View key={index} style={styles.cardGr}>
                <View style={styles.cardCh}>
                    <ImageBackground source={obj.foto} style={styles.card}></ImageBackground>
                </View>
                <View style={styles.cardInfo}>
                    <Text style={styles.h3}>{obj.h3}</Text>
                    <Text style={styles.p}>{obj.text}</Text>
                </View>
            </View> 
        )
    })

    return(
        <ImageBackground source={require('../assets/fondomain2.png')} style={styles.mainHome}>
            <ScrollView>
                {infoContenido}
                <MyCarousel/>
            </ScrollView>
            {/* <MyCarousel/> */}
            {/* <CallAction/> */}
        </ImageBackground>
    )
}

export default Home

const styles= StyleSheet.create({
    mainHome:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    cardGr:{
        alignItems:'center',
        justifyContent:'center',
        padding:15,
    },
    cardCh:{
        borderWidth: 10,
        borderBottomWidth:40,
        borderColor:'#fff',
        shadowColor: "#cac9c9b7",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,
        elevation: 8,
        margin:10, 
    },
    card:{
        width:280,
        height:280,
        resizeMode: 'contain', 
    },
    cardInfo:{
        width:'90%',
        alignItems:'center',
        justifyContent:'center',
    },
    h3:{
        marginBottom:5,
        fontSize:25,
    },
    p:{
        textAlign:'center',
        fontSize:15,
    }
})

// .cardInfo{
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     width: 40vw;
//     height: 25vw;
//     text-align: center;
//     color:#000;
//     font-size: 1.5vw;
// }
// .cardInfo h3{
//     font-size: 3.5vw;
//     font-family: 'Acme', sans-serif;
// }