import {StyleSheet} from 'react-native'

export default StyleSheet.create({
    mainWelcome:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#7070704d',
    },
    logoGr:{
        width:'90%',
        height:'50%',
        alignItems:'center',
        padding:10,
    },
    icon:{
        width: 100,
        height: 200,
        resizeMode: 'contain',
    },
    logoGrText:{
        textAlign:'center',
        color:'#fff',
        fontWeight:'bold',
        fontSize:25,
    },
    call:{
        backgroundColor:'#5855551e',
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 5,
        paddingTop: 5,
        borderWidth:2,
        borderColor: '#585555b6',
        borderRadius:15,
        fontWeight: 'bold',
        margin:2,
        width:80,
        textAlign:'center'
    }
})