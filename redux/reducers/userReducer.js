const userReducer = (state= {user:{name:null,photo:null,token:null,id:null}} ,action) =>{
    switch(action.type){
        case'SIGN_IN_USER':
        return{
            ...state,
            user:action.payload
        }
        // case'SIGN_OUT_USER':
        // localStorage.removeItem('token')
        // return{
        //     ...state,
        //     user:{name:'', photo:'', token:'',id:''}
        // }
        // case'FORCED_SIGN_IN':
        // return{
        //     ...state,
        //     user:action.payload
        // }
        default: return state
    }
}
export default userReducer