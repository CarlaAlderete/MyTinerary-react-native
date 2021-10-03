import React from 'react'
import { View, Text, StyleSheet, ImageBackground, SafeAreaView} from 'react-native'
import Carousel from 'react-native-snap-carousel'

const MyCarousel =()=>{
    const carouselItems = [
        {photo:'https://i.postimg.cc/6QQ6P1yy/copenhagen.jpg',city: 'Copenhagen'},
        {photo:'https://i.postimg.cc/3xYxXwhj/Boracay.jpg', city: 'Boracay'},
        {photo:'https://i.postimg.cc/1RdFrw7G/Rio.jpg', city: 'Rio de Janeiro'},
        {photo:'https://i.postimg.cc/4yHmS22z/Reykjavik.jpg',city: 'Reykjavik'},
        {photo:'https://i.postimg.cc/7Z9YmyPF/amsterdam.jpg',city: 'Amsterdam'},
        {photo:'https://i.postimg.cc/13GNSTmB/londres.jpg',city: 'London'},
        {photo:'https://i.postimg.cc/JhKDDkBB/Mykonos.jpg',city: 'Mykonos'},
        {photo:'https://i.postimg.cc/xTbzx8BW/toronto.jpg',city: 'Toronto'},
        {photo:'https://i.postimg.cc/sg49m1h3/telaviv.jpg',city: 'Tel aviv'},
        {photo:'https://i.postimg.cc/3NzDrQ0S/ny.jpg',city: 'New York'},
        {photo:'https://i.postimg.cc/MGzfpDXS/sanfrancisco.jpg',city: 'San Francisco'},
        {photo:'https://i.postimg.cc/fTXv38Wt/ibiza.jpg', city:'Ibiza'},
        {photo:'https://i.postimg.cc/cJ51GMnT/baires.jpg', city:'Buenos Aires'}
    ]
    const _renderItem =({item, index})=>{
        return (
            <ImageBackground source={{uri:(item.photo)}} style={styles.cardImg} imageStyle={{borderRadius: 20}}>
                <View style={styles.divtextCity}>
                    <Text style={styles.textCity}>{item.city}</Text>
                </View>
            </ImageBackground>
            )
        }
   
    return(
        <SafeAreaView>
            <ImageBackground source={require('../assets/fondo2.png')} style={styles.carouselConteiner}>
                <View>
                    <Text style={styles.h3}>Popular  MyTineraries</Text>
                </View>
                <Carousel
                  layout={'tinder'}
                  data={carouselItems}
                  sliderWidth={400}
                  itemWidth={400}
                  renderItem={_renderItem}
                  loop={true}
                  style={styles.divCarousel}
                  autoplay={true}
                  />
            </ImageBackground>
          </SafeAreaView>
    )
}

export default MyCarousel

const styles = StyleSheet.create({
    carouselConteiner:{
        padding:15,
        paddingTop:20,
        paddingBottom:25,
        marginBottom:20,
        marginTop:25,
    },
    h3:{
        textAlign:'center',
        marginBottom:10,
        fontSize:35,
        fontFamily:'Acme_400Regular'
    },
    divCarousel:{
        marginBottom:10,
        marginTop:10,
    },
    cardImg:{
        borderRadius: 20, 
        borderWidth: 2,
        borderColor:'#000',
        height:550,
        alignItems: 'center',
        justifyContent:'flex-end',
    },
    divtextCity:{
        marginBottom:10,
        backgroundColor:'#D3D0C96E',
        width:'100%'
    },
    textCity:{
        color: 'black',
        fontWeight: 'bold',
        fontSize: 35,
        textTransform:'uppercase',
        textAlign:'center'
    },
})