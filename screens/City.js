import React, {useState, useEffect} from 'react'
import {ImageBackground, Text, StyleSheet, FlatList, View, ScrollView, ImageBackgroundBase} from 'react-native'
import {connect} from 'react-redux'
import citiesActions from '../redux/actions/citiesActions'
import itinerariesActions from '../redux/actions/itinerariesActions'
import Itinerary from '../components/Itinerary'
import Hero from '../components/Hero'

const City=({route,getOneCity,getItineraries,itineraries,city,navigation})=>{

    useEffect(()=>{
        getOneCity(route.params.id)
        getItineraries(route.params.id)
    },[])

    const itinerariesByCity = !itineraries.length 
    ? <View style={styles.divnullItineraries}>
        <ImageBackground style={styles.nullItineraries} source={require('../assets/fondoerror.jpg')} imageStyle={{borderRadius:18}}>
            <View style={styles.divText}>
                <Text style={styles.text}>There are not itinerary yet!</Text>
            </View>
        </ImageBackground>
      </View>
    : <FlatList
        data={itineraries}
        keyExtractor={item => item._id}
        renderItem={({item}) => <Itinerary itinerary={item} navigation={navigation}/>}/>

    return(
        <ScrollView>
            <Hero photo={route.params.photo}/>
            <Text style={styles.h3}>{city.city}</Text>
            <View style={styles.cardCh}>
                <ImageBackground source={{uri:`https://mytinerary-ca.herokuapp.com/assets/${city.photoDescription}`}} style={styles.imgDescrip}></ImageBackground> 
            </View>
            <Text style={styles.p}>{city.description}</Text>
            <Text style={styles.h3}>Here are some of our Itineraries!</Text>
            {itinerariesByCity}
        </ScrollView>
    )
}
const mapStateToProps= (state)=>{
    return{
        city: state.cities.city,
        itineraries: state.itineraries.itineraries
    }
}
const mapDispatchToProps={
    getOneCity:citiesActions.getOneCity,
    getItineraries:itinerariesActions.getItineraries
}
export default connect(mapStateToProps, mapDispatchToProps)(City)

const styles = StyleSheet.create({
    h3:{
        textAlign:'center',
        margin:7,
        fontSize:35,
        fontFamily:'Acme_400Regular'
    },
    divnullItineraries:{
        width:'90%',
        alignSelf:'center',
        borderRadius:20,
        borderWidth:2,
        borderColor:'black',
        marginBottom:25
    },
    nullItineraries:{
        width:'100%',
        height:300,
        justifyContent:'flex-end'
    },
    divText:{
        backgroundColor:'#D3D0C96E',
        width:'100%',
        padding:5,
        marginBottom:20,
    },
    text:{
        fontSize:25,
        textAlign:'center'
    },
    cardCh:{
        alignSelf:'center',
        width:325,
        height:325,
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
    imgDescrip:{
        width:'100%',
        height:'100%'
    },
    p:{
        textAlign:'center',
        fontSize:17,
        paddingVertical:10,
        paddingHorizontal:30,
        fontFamily:'Roboto_400Regular'
    },
})