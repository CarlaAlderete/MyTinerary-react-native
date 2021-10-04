import React, {useState, useEffect} from 'react'
import {ImageBackground, Text, View, StyleSheet, Image,Alert} from 'react-native'
import { connect } from 'react-redux'
import {Icon} from 'react-native-elements'
import itinerariesActions from '../redux/actions/itinerariesActions'
import AwesomeAlert from 'react-native-awesome-alerts'
import { set } from 'react-native-reanimated'

const Itinerary =({itinerary,changeOneItineraryLike,user1,userId,usertoken,navigation})=>{
    const {name, photo, user, description, info, like, _id}=itinerary
    const [likeIcon, setLikeIcon] = useState ({cant:like.length, condition:''})
    const [showAlert, setShowAlert] = useState(false)

    useEffect(()=>{
        like.includes(userId) ? setLikeIcon({...likeIcon, condition:true}) : setLikeIcon({...likeIcon, condition:false})
    },[userId])

    const pushLikeHandler=()=>{
        if(usertoken){
            changeOneItineraryLike(_id, usertoken)
            .then(res=>{
                likeIcon.condition === false ? setLikeIcon({cant:res.res.length, condition:true}) : setLikeIcon({cant:res.res.length, condition:false})
            })
        }else{
            setShowAlert(true)
        }
    }
    const twitter = info.hashtag.map(obj => <Text key={obj} style={styles.hashtag}>#{obj} </Text>)
    const icon = [...Array(parseInt(info.price))].map((obj, index) => <Image source={require('../assets/money.png')} key={index} style={styles.dollar}/>)
    return(
        <View style={styles.mainItinerary}>
            <View style={styles.divItinerary}>
                <ImageBackground source={{uri:`https://mytinerary-ca.herokuapp.com/assets/${photo}`}} style={styles.imgItinerary} imageStyle={{borderRadius:20}}></ImageBackground>
                <View style={styles.itineraryHeader}>
                    <View style={styles.users}>
                        <ImageBackground style={styles.photoUser} imageStyle={{borderRadius:50}} source={{uri:`https://mytinerary-ca.herokuapp.com/assets/${user.photo}`}}></ImageBackground>
                        <Text>{user.name}</Text>
                    </View>
                    <View style={styles.infoHeader}>
                        <View style={styles.tittle}>
                            <Text style={styles.h2}>{name}</Text>
                            {!likeIcon.condition 
                            ? <Icon
                            name='heart-alt'
                            type='fontisto'
                            color='black'
                            onPress={pushLikeHandler}/>
                            : <Icon
                            name='heart'
                            type='fontisto'
                            color='red'
                            onPress={pushLikeHandler}/>}
                            <Text style={styles.like}>{likeIcon.cant}</Text>
                        </View>
                        <View style={styles.detalle}>
                            <View style={styles.detalles}>
                                <Text>Price:</Text>
                                <View style={styles.dollars}>
                                    {icon}
                                </View>
                            </View>
                            <Text>Time:{'  🕗'+info.time+'hrs'}</Text>
                        </View>
                    </View>
                </View>
                <View>
                    <Text style={styles.textDescrip}>{description}</Text>
                    <View style={styles.hashtags}>
                        {twitter}
                    </View>
                </View>
                <Text style={styles.call} onPress={()=>navigation.navigate('Activity',{itineraryId:_id})}>Activity</Text>
            </View>
            <AwesomeAlert
                show={showAlert}
                showProgress={false}
                animatedValue={0,5}
                title="Sing In to like"
                closeOnTouchOutside={true}
                closeOnHardwareBackPress={false}
                showCancelButton={true}
                showConfirmButton={true}
                cancelText="Cancel"
                confirmText="Sing In"
                confirmButtonColor="#2BC900"
                cancelButtonColor='#C90000'
                onCancelPressed={() => setShowAlert(false)}
                onConfirmPressed={() => {
                    setShowAlert(false)
                    navigation.navigate('SignIn')}}
                confirmButtonStyle={{
                    color:'black'
                }}
                titleStyle={{
                    fontFamily:'Acme_400Regular',
                    fontSize:30
                }}
            />
        </View>
    )
}
const mapStateToProps= (state)=>{
    return{
        usertoken:state.user.user.token,
        userId:state.user.user.id,
    }
}
const mapDispatchToProps={
    changeOneItineraryLike:itinerariesActions.changeOneItineraryLike
}
export default connect(mapStateToProps, mapDispatchToProps)(Itinerary)
const styles=StyleSheet.create({
    mainItinerary:{
        paddingVertical:10,
        width:'100%',
        alignItems:'center'
    },
    divItinerary:{
        padding:5,
        borderColor:'black',
        borderRadius:20,
        borderWidth:2,
        width:'90%',
        alignItems:'center'
    },
    imgItinerary:{
        width:'100%',
        height:300,
    },
    itineraryHeader:{
      flexDirection:'row',
      alignItems:'center',
      marginVertical:6,
      paddingVertical:10,
      width:'100%',
      paddingHorizontal:5,
      justifyContent:'space-between'
    },
    infoHeader:{
        flex:1,
        paddingLeft:10
    },
    users:{
        alignItems:'center'
    },
    photoUser:{
        width:65,
        height:65,
    },
    tittle:{
        flex:1,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
    h2:{
        fontSize:25,
        marginRight:5,
        fontFamily:'Roboto_700Bold'
    },
    like:{
        fontSize:30
    },
    dollars:{
        flexDirection:'row'
    },
    dollar:{
        width:25,
        height:25,
        marginLeft:5,
    },
    detalle:{
        marginLeft:10,
        paddingVertical:3,
        justifyContent:'space-around',
        alignItems:'flex-start'
    },
    detalles:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
    textDescrip:{
        fontSize:25,
        paddingLeft:8,
        fontFamily:'Roboto_400Regular'
    },
    hashtags:{
        flexDirection:'row',
        justifyContent:'flex-start'
    },
    hashtag:{
        fontSize:15,
        paddingHorizontal:5,
        paddingVertical:5
    },
    call:{
        backgroundColor:'#5855551e',
        paddingVertical:6,
        borderWidth:2,
        borderColor: '#585555b6',
        borderRadius:15,
        fontWeight: 'bold',
        margin:2,
        width:'80%',
        textAlign:'center'
    }
})