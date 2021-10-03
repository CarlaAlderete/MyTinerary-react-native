import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage'

const userActions={
    singInUser:(data)=>{
        return async(dispatch, getState)=>{
            try{
                let res = await axios.post('https://mytinerary-ca.herokuapp.com/api/user/signin', data)
                if(res.data.success){
                    await AsyncStorage.setItem('token', res.data.res.token) 
                    dispatch({type:'SIGN_IN_USER', payload:res.data.res})
                    return({success:true})
                }else{
                    return({success:false, res:res.data.res})
                }
            }catch(err){
                return({success:false, res:'Oops! There is an error, try again later'})
            }
        }
    },
    postNewUser:(data)=>{
        return async(dispatch, getState)=>{
            try{
                let res = await axios.post('https://mytinerary-ca.herokuapp.com/api/user/signup', data)
                if(res.data.success){
                    // await AsyncStorage.setItem('token', response.data.res.token)
                    dispatch({type:'SIGN_IN_USER', payload:res.data.res})
                    return({success:true})
                }else{
                    return({success:false, res:res.data.res})
                }
            }catch(err){
                return({success:false, res:'Oops! There is an error, try again later'})
            }
        }
    },
    signOut:()=>{
        return async(dispatch, getState)=>{
            await AsyncStorage.clear()
            dispatch({type:'SIGN_OUT_USER'})
        }
    },
    forcedSignIn:(data)=>{
        console.log(data)
        return async(dispatch,getState)=>{
            try{
                let res = await axios.get('https://mytinerary-ca.herokuapp.com/api/user/signin',{
                    headers:{
                        Authorization: 'Bearer '+ data
                    }
                })
                dispatch({type:'SIGN_IN_USER',payload:{name:res.data.name, photo:res.data.photo, id:res.data.id, token:data}})
            }catch(err){
                dispatch({type:'SIGN_OUT_USER'})
            }
            
        }
    }
}
export default userActions



    

