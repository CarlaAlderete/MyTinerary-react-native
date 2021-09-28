import React from 'react'
import { View, Text, StyleSheet, ImageBackground, ScrollView} from 'react-native'

const Home = ()=>{
    const info = [
        { foto:require('../assets/remo.jpg'),h3: 'Why us?', text:'A short-term rental service by and for gay travelers is needed to help provide a comfortable and safe experience'},
        { foto:require('../assets/hotel.jpg'), h3: 'The best destinations', text:'We have information on all the selected destinations with the best activities for your satisfaction'},
        { foto:require('../assets/party.jpg'), h3: 'Dates and activities', text:'We have updated all the activities of the LGBTIQ + community in each city and the LGBTIQ + pride marches so you can live a different experience'},
    ]

    const infoContenido =info.map((obj, index) =>{
        return(
            <View key={index} style={styles.cardGr}>
                <ImageBackground source={obj.foto} style={styles.card}></ImageBackground>
                <View style={styles.cardInfo}>
                    <Text>{obj.h3}</Text>
                    <Text>{obj.text}</Text>
                </View>
            </View> 
        )
    })

    return(
        <ImageBackground source={require('../assets/fondomain2.png')} style={styles.mainHome}>
            <ScrollView>
                {infoContenido}
            </ScrollView>
            {/* <MyCarousel/>
            <CallAction/> */}
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
    card:{
        width:280,
        height:280,
        borderWidth: 10,
        borderBottomWidth:20,
        borderColor:'#fff',
        resizeMode: 'contain',
        margin:10, 
    },
    cardInfo:{
        width:'95%',
        alignItems:'center',
        justifyContent:'center',
    }
})
// width: 25vw;
//     height: 25vw;
//     border: 1vw solid #fff;
//     border-bottom: 3vw solid #fff;
//     box-shadow: 1px 1px 5px 5px #cac9c9b7;
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
// #impar{
//     order: 1;
// }
// .cardInfo h3{
//     font-size: 3.5vw;
//     font-family: 'Acme', sans-serif;
// }