import React, {useEffect, useState} from 'react'
import {connect} from 'react-redux'
import {Text,Image,ImageBackground,View,StyleSheet,Dimensions,ScrollView} from 'react-native'
import itinerariesActions from '../redux/actions/itinerariesActions'
import Carousel, {ParallaxImage} from 'react-native-snap-carousel'
import Comments from '../components/Comments'

const Activity=({route,getActivitiesByItinerary})=>{
    const [activities, setActivities] = useState([])
    const [loading, setLoading] = useState(true)
    const { width: screenWidth } = Dimensions.get('window')

    useEffect(()=>{
        getActivitiesByItinerary(route.params.itineraryId)
        .then(res=>{
            if(res.success){
                setActivities(res.res)
                setLoading(false)
            }else{
                console.log(res)
            }
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    const _renderItem =({item, index}, parallaxProps)=>{
        return (
            <View style={styles.item}>
                <ParallaxImage
                    source={{ uri: item.src }}
                    containerStyle={styles.cardImg}
                    parallaxFactor={0.4}
                    {...parallaxProps}
                />
                <Text style={styles.textCityh3} numberOfLines={2}>{item.name}</Text>
                <Text style={styles.textCityP} numberOfLines={3}>{item.description}</Text>
            </View>
            )
    }
    if(loading){
        return <Image source={require('../assets/loading.gif')} style={styles.loading}/>
    }
    return (
        <ScrollView>
            <Carousel
                sliderWidth={screenWidth}
                sliderHeight={550}
                itemWidth={screenWidth - 60}
                data={activities}
                renderItem={_renderItem}
                hasParallaxImages={true}
                loop={true}
                autoplay={true}
                style={styles.itemGr}
            />
            <Comments itineraryId={route.params.itineraryId}/>
        </ScrollView>
    )
}
const mapDispatcToProps={
    getActivitiesByItinerary:itinerariesActions.getActivitiesByItinerary
}

export default connect(null, mapDispatcToProps)( Activity) 

const styles=StyleSheet.create({
    mianActivity:{
        flex:1,
        backgroundColor:'red'
    },
    loading:{
        flex:1,
        padding:30,
        alignSelf:'center',
        resizeMode:'contain'
    },
    item:{
        marginTop:15,
        marginBottom:'28%',
        height: 550,
    },
    cardImg:{
        height:'100%',
        alignItems:'flex-end',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent:'flex-end',
        borderWidth:2,
        borderColor:'#000'
    },
    divtextCity:{
        width:'100%',
        justifyContent:'center',
        backgroundColor:'#D3D0C96E',
        marginBottom:10,
    },
    textCityh3:{
        fontSize:30,
        textTransform:'uppercase',
        textAlign:'center',
        fontFamily:'Acme_400Regular'
    },
    textCityP:{
        fontSize:18,
        textAlign:'center',
        fontFamily:'Roboto_400Regular'
    }

})