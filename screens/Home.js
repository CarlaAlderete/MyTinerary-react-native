import React from 'react'
import { View, Text, StyleSheet, ImageBackground, ScrollView, Image, SafeAreaView} from 'react-native'
import MyCarousel from '../components/MyCarousel'

const Home = ({navigation})=>{
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
        <SafeAreaView style={styles.mainHomeContain}>
            <ImageBackground source={require('../assets/fondomain2.png')} style={styles.mainHome}>
                <ScrollView>
                    {infoContenido}
                    <MyCarousel/>
                    <View style={styles.divCall}>
                        <Image source={require('../assets/download.gif')} style={styles.imgCall}/>
                        <View style={styles.textCall}>
                            <Text style={styles.h3}>Where do you fit in?</Text>
                            <Text style={styles.p}>Check out our cities, share your favorite places and help keep cities up to date for everyone.</Text>
                            <Text style={styles.call} onPress={()=>navigation.navigate('Cities')}>Press here</Text>
                        </View>
                        <Image source={require('../assets/Transvida.gif')} style={styles.imgCall}/>
                    </View>
                </ScrollView>
            </ImageBackground>
        </SafeAreaView>
    )
}

export default Home

const styles= StyleSheet.create({
    mainHomeContain:{
        flex:1,
    },
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
        textAlign:'center',
        marginBottom:5,
        fontSize:25,
    },
    p:{
        textAlign:'center',
        fontSize:15,
    },
    divCall:{
        alignItems:'center'
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
        margin:10, 
        textAlign:'center',
    },
    textCall:{
        margin:15,
    },
    imgCall:{
        width:250,
        height:250,
        margin:20
    }
})