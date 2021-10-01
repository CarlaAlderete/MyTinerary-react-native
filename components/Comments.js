import React, {useState, useEffect} from 'react'
import {connect} from 'react-redux'
import {Pressable, Text, TextInput,View} from 'react-native'
import itinerariesActions from '../redux/actions/itinerariesActions'

const Comments=({getComments,addComment,editComment,userToken,userId,itineraryId})=>{
    const [text, setText] = useState('')
    const [newComments, setNewComments] = useState([])
    const [error, setError]= useState('')

    useEffect(()=>{
        getComments(itineraryId)
        .then(res=>setNewComments(res.res))
        .catch(err=>console.log(err))
    },[])

    const toWriteHandler=(e)=> console.log('hola')
    // const everyComment =newComments.map(obj =><EveryComment key={obj._id} comment={obj} user={userId} userToken={userToken} deleteCommentHandler={deleteCommentHandler} userToken={userToken}/>)

    const everyComment =newComments.map(obj =><Text>soy un coment</Text>)

    console.log(newComments)

    return(
        <View>
            <Text>{error}</Text>
            <View>
                <View>
                    {everyComment}
                </View>
                <TextInput placeholder={!userToken ? 'Create an account and add your comment' : 'Add a comment...'} onChangeText={toWriteHandler}/>
                <Pressable onClick={toWriteHandler}>
                    <Text>hola</Text>
                </Pressable>
            </View>
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
// import EveryComment from './EveryComment'


// 

//     const addCommentHandler=()=>{
//         setText('')
//         if(text){
//             addComment(userToken,itineraryId,text)
//             .then(res=>{
//                 if(res.success){
//                     setNewComments([...newComments, res.res[res.res.length -1]])
//                 }else{
//                     setError('Oops! There was a problem, try later')
//             }})
//         }
//     }
//     const deleteCommentHandler=(id)=>{
//         editComment(id ,userToken)
//         .then(res=>{
//             if(res.success){
//                 setNewComments(res.res)
//             }else{
//                 setError("Oops! There's a problem, try later")
//             }
//         })
//     }
    
//     
//     return(

//     )
// }

// 