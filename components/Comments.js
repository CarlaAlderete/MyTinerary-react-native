import React, {useState, useEffect} from 'react'
import {connect} from 'react-redux'
import {Text, TextInput,View,StyleSheet} from 'react-native'
import AwesomeAlert from 'react-native-awesome-alerts'
import {Icon} from 'react-native-elements'
import itinerariesActions from '../redux/actions/itinerariesActions'
import EveryComment from './EveryComment'

const Comments=({getComments,addComment,editComment,userToken,userId,itineraryId})=>{
    const [text, setText] = useState('')
    const [newComments, setNewComments] = useState([])
    const [error, setError]= useState('')
    const [showAlert, setShowAlert] = useState(false)

    useEffect(()=>{
        getComments(itineraryId)
        .then(res=>setNewComments(res.res))
        .catch(err=>console.log(err))
    },[])

    const toWriteHandler=(e)=> setText(e)
    const everyComment =newComments.map(obj =><EveryComment key={obj._id} comment={obj} user={userId} userToken={userToken} deleteCommentHandler={()=>deleteCommentHandler(obj._id)}/>)

    const addCommentHandler=()=>{
        setText('')
        if(text){
            addComment(userToken,itineraryId,text)
            .then(res=>{
                if(res.success){
                    setNewComments([...newComments, res.res[res.res.length -1]])
                }else{
                    setError('Oops! There was a problem, try later')
            }})
        }
    }
    const deleteCommentHandler=(id)=>{
        editComment(id ,userToken)
        .then(res=>{
            if(res.success){
                setNewComments(res.res)
            }else{
                setError("Oops! There's a problem, try later")
            }
        })
    }
    return(
        <View style={styles.commentContain}>
            <View>
                {everyComment}
            </View>
            <View style={styles.sendError}>
                <Text>{error}</Text>
            </View>
            <View style={styles.send}>
                <TextInput placeholder={!userToken ? 'Create an account and add your comment' : 'Add a comment...'} value={text} editable={userToken ? true : false} style={styles.inputcomment} onChangeText={toWriteHandler}/>
                <Icon
                    name='paper-plane'
                    type='font-awesome'
                    color='black'
                    onPress={!userToken ? ()=>setShowAlert(true) : addCommentHandler}
                />
            </View>
            <AwesomeAlert
                show={showAlert}
                showProgress={false}
                animatedValue={0,5}
                title="Sign In to comment"
                closeOnTouchOutside={true}
                closeOnHardwareBackPress={false}
                showCancelButton={true}
                showConfirmButton={true}
                cancelText="Cancel"
                confirmText="Sign In"
                confirmButtonColor="#2BC900"
                cancelButtonColor='#C90000'
                onCancelPressed={() => setShowAlert(false)}
                onConfirmPressed={() => navigation.navigate('SignIn')}
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
const mapStateToProps=(state)=>{
    return{
        userToken:state.user.user.token,
        userId:state.user.user.id
    }
}
const mapDispatchToProps ={
    getComments:itinerariesActions.getComments,
    addComment:itinerariesActions.addComment,
    editComment:itinerariesActions.editComment
}
export default connect(mapStateToProps,mapDispatchToProps)(Comments)

const styles=StyleSheet.create({
    commentContain:{
        width:'95%',
        marginTop:0,
        marginBottom:10,
        marginHorizontal:10,
        padding:5,
        alignSelf:'center'
    },
    send:{
        flexDirection:'row',
        width:'100%',
        alignItems:'center'
    },
    inputcomment:{
        flex:1,
        marginRight:5,
        borderWidth:2,
        borderColor: '#000',
        borderRadius:15,
        padding:3,
        paddingLeft:10
    },
    sendError:{
        height:18
    }
})