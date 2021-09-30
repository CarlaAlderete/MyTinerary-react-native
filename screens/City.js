import React, {useState, useEffect} from 'react'
import {ImageBackground, Text, StyleSheet, FlatList, View, ScrollView, ImageBackgroundBase} from 'react-native'
import {connect} from 'react-redux'
import citiesActions from '../redux/actions/citiesActions'
import itinerariesActions from '../redux/actions/itinerariesActions'
import Itinerary from '../components/Itinerary'
import Hero from '../components/Hero'

const City=({route,getOneCity,getItineraries,itineraries,city})=>{
    console.log(route.params.photo)

    useEffect(()=>{
        getOneCity(route.params.id)
        getItineraries(route.params.id)
    },[])

    const itinerariesByCity = !itineraries.length 
    ? <ImageBackground style={styles.nullItineraries} source={require('../assets/fondoerror.jpg')}>
        <Text>There are not itinerary yet!</Text>
      </ImageBackground>
    : <FlatList
        data={itineraries}
        keyExtractor={item => item._id}
        renderItem={({item}) => <Itinerary/>}/>

    return(
        <ScrollView>
            <Hero photo={route.params.photo}/>
            <View style={styles.mainCity}>
                <Text>{city.city}</Text>
                <View style={styles.cardCh}>
                    <ImageBackground source={{uri:`https://mytinerary-ca.herokuapp.com/assets/${city.photoDescription}`}} style={styles.imgDescrip}></ImageBackground> 
                </View>
                <Text>{city.description}</Text>
                <Text>Here are some of our Itineraries!</Text>
                {itinerariesByCity}
            </View>
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
    mainCity:{
        flex:1,
        alignContent:'center',
        justifyContent:'center'
    },
    nullItineraries:{
        width:250,
        height:250
    },
    cardCh:{
        width:300,
        height:300,
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
})


        



//             
//      
//                 <div className='cityOnly' style={{backgroundImage:`url("/assets/fondomain2.png")`,}}>
//                     
//                     <div className='descrGr'>
//                         <p data-aos="fade-right">{this.props.city.description}</p>
//                         <div className='descr' data-aos="fade-left" style={{backgroundImage:`url("/assets/${this.props.}")`,}}></div>
//                     </div>
//                     
//                    
//                    
//                 </div>
//               
//             
//         )
//     }
// }

// 