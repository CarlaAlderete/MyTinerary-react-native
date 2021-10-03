import React, {useState, useEffect} from 'react'
import {connect} from 'react-redux'
import {ImageBackground, StyleSheet, Text, View} from 'react-native'
import itinerariesActions from '../redux/actions/itinerariesActions'
import { TextInput } from 'react-native-gesture-handler'
import {Icon} from 'react-native-elements'

const EveryComment = ({editComment,user,comment,userToken,deleteCommentHandler})=>{
    const {text, userId,_id}=comment
    const [newText, setNewText]=useState({comment:text , edit:false, editcomment:text})
    const [edit, setEdit]= useState(false)
    const [enable, setEnable] = useState({edit:false, delete:false})
    const [error, setError] = useState('')

    useEffect(()=>{
        user === userId._id ? setEdit(true) : setEdit(false)
    },[user])

    const enableEditHandler=(icon)=>{
        icon === 'cruz' && setEnable({delete:false, edit:false})
        icon === 'pencil' && setEnable({delete:true, edit:true})
        setError('')
    }
    const editText=(e)=>{
        setNewText({...newText, edit: !edit})
        setNewText({...newText, editcomment:e})
        setError('')
    }
    const enableDeleteHandler=()=>{
        setEnable({...enable, delete:true})
        setError('')
    }
    const editCommentHandler=(text)=>{
        editComment(_id, userToken, text)
        .then(res=>{
            if(res.success){
                let obj = res.res.find(obj => obj._id === _id)
                setNewText({comment:obj.text , edit:false, editcomment:obj.text})
                setEnable({delete:false, edit:false})
                setError('')
            }else{
                setError("Oops! There's a problem, try later")
            }
        })
    }
  
    const editComments= !edit ? null 
        :<View style={styles.option}>
            {(!enable.edit && enable.delete) && <Text>Sure?</Text>}
            {(!enable.delete && !enable.edit) && <Icon name='trash' type='font-awesome'  color='black' onPress={enableDeleteHandler}/>}
            {enable.edit && <Icon name='check-circle-o' type='font-awesome'  color='black' onPress={()=>editCommentHandler(newText.editcomment)}/>}
            {(enable.edit || enable.delete) && <Icon name='times-circle-o' type='font-awesome'  color='black' onPress={()=>enableEditHandler('cruz')}/>}
            {(!enable.edit && enable.delete) && <Icon name='check-circle-o' type='font-awesome'  color='black' onPress={deleteCommentHandler}/>}
            {(!enable.edit && !enable.delete) && <Icon name='pencil' type='font-awesome'  color='black' onPress={()=>enableEditHandler('pencil')}/>}
        </View>

    return(
        <View style={styles.everyComment}>
            <ImageBackground style={styles.userComment} source={{uri:`${userId.src}`}} imageStyle={{borderRadius:50}}></ImageBackground>
            <View style={!edit ? styles.commentTextGr : styles.userCommentTextGr}>
                <View>
                    <Text>{userId.name} {userId.lastName}</Text>
                    <View>
                        {!enable.edit && <Text>{newText.comment}</Text>}
                        {enable.edit && <TextInput defaultValue={newText.comment} onChangeText={editText} disabled={!enable}/>}
                    </View>
                </View>
                {editComments}
            </View>
            <Text>{error}</Text>
        </View>
    )
}
const mapDispatchToProps={
    editComment:itinerariesActions.editComment
}
export default connect(null,mapDispatchToProps)(EveryComment)

const styles=StyleSheet.create({
    everyComment:{
        flexDirection:'row',
        padding:10,
    },
    userComment:{
        width:50,
        height:50,
        marginRight:5
    },
    commentTextGr:{
        flex:1,
        maxWidth:'92%',
        backgroundColor:'#9393942c',
        borderRadius:30,
        alignItems:'flex-start',
        paddingLeft:20,
        paddingTop:5,
        flexDirection:'row'
    },
    userCommentTextGr:{
        flex:1,
        maxWidth:'92%',
        backgroundColor:'#f848db2c',
        borderRadius:30,
        alignItems:'center',
        justifyContent:'space-between',
        paddingLeft:20,
        paddingTop:5,
        flexDirection:'row'
    },
    option:{
        flexDirection:'row',
        width:'40%',
        marginRight:10,
        justifyContent:'space-evenly'
    }
})