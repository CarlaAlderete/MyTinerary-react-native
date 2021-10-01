import React, {useState, useEffect} from 'react'
import {connect} from 'react-redux'
import citiesActions from "../redux/actions/citiesActions"
import {ImageBackground, Text, SafeAreaView, StyleSheet,FlatList, TextInput, View, Image, Pressable} from 'react-native'

const CardCity=({newCities,filterCities,getCities,navigation})=>{
    const [loading, setLoading] = useState({condition:true, text:''})
    
    useEffect(()=>{
        if(!newCities.length){
            getCities()
            .then(res=>{
                if(res.success){
                    setLoading({...loading, condition:false})
                }else{
                    setLoading({...loading, text:'Oop! '+res.res, back:'Back to Home'})
            }
        })
        }else{
            filterCities('')
            setLoading({...loading, condition:false})
        }
    },[])

    const chooseCityHandler = (e) => filterCities(e)

    if(loading.condition){
        return (
            <View style={styles.mainCities}>
                {loading.text === ''
                ?<Image  style={styles.loading} source={require('../assets/loading.gif')}/>
                :<Text>{loading.text}</Text>}
            </View>
            )
        }

    return(
        <SafeAreaView style={styles.mainCities}>
            <View style={styles.divInput}>
                <Text style={styles.h3}>Destinations</Text>
                <Text style={styles.p}>In our tours we try to show you the best of each area for our clients in a unique LGTBIQ+ experience.</Text>
                <TextInput style={styles.input} placeholder='Search for a city' onChangeText={chooseCityHandler}/>
            </View>
            <View className='citiesGr'>
                {!newCities.length 
                ? <Text>Sorry, there are no hits.</Text> 
                :<FlatList
                    data={newCities}
                    keyExtractor={item => item._id}
                     renderItem={({item}) => (
                        <Pressable onPress={()=>navigation.navigate('City',{id:item._id, photo:item.photo})}>
                            <View style={styles.divCityImg}>
                                <ImageBackground source={{uri:`https://mytinerary-ca.herokuapp.com/assets/${item.photo}`}} style={styles.cityImg} imageStyle={{borderRadius:20}}>
                                <View style={styles.divtextCity}>
                                        <Text style={styles.textCity}>{`${item.city.toUpperCase()} - ${item.country.toUpperCase()}`}</Text>
                                </View>
                                </ImageBackground>
                            </View>
                        </Pressable>
                )}
                />}
            </View>  
        </SafeAreaView>
    )
}
const mapStateToProps=(state)=>{
    return {
        newCities:state.cities.filteredCity
    }
}
const mapDispatchToProps ={
    getCities:citiesActions.getAllCities,
    filterCities:citiesActions.filterCities
}
export default connect(mapStateToProps, mapDispatchToProps)(CardCity)

const styles = StyleSheet.create({
    loading:{
        width:300,
        height:300
    },
    mainCities:{
        flex:1,
        alignItems:'center'
    },
    divInput:{
        width:'91%',
        marginTop:12,
        alignItems:'center',
    },
    h3:{
        marginBottom:8,
        fontSize:25
    },
    p:{
        textAlign:'center',
        fontSize:15,
        marginBottom:3
    },
    divCityImg:{
        width:380,
        height:300,
        marginTop:10,
        marginBottom:5,
        borderRadius:22,
        borderColor:'#000',
        borderWidth:2,
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,
        elevation: 8,
    },
    cityImg:{
        width:'100%',
        height:'100%',
        alignItems:'center',
        justifyContent:'flex-end'
    },
    input: {
        width:'95%',
        backgroundColor:'#fff',
        borderRadius:15,
        height: 35,
        margin: 5,
        borderWidth: 1,
        padding: 10,
        paddingLeft:25,
    },
    textCity:{
        color: 'black',
        fontWeight: 'bold',
        fontSize: 28,
        textTransform:'uppercase',
        textAlign:'center'
    },
    divtextCity:{
        marginBottom:10,
        backgroundColor:'#D3D0C96E',
        width:'100%'
    },
})