const userReducer = (state= {user:{name:null,photo:null,token:null,id:null}} ,action) =>{
    switch(action.type){
        case'SIGN_IN_USER':
        return{
            ...state,
            user:action.payload
        }
        case'SIGN_OUT_USER':
        return{
            ...state,
            user:{name:null, photo:null, token:null,id:null}
        }
        default: return state
    }
}
export default userReducer