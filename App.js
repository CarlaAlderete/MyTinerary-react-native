import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { createStore, applyMiddleware } from 'redux'
import {Provider} from 'react-redux'
import rootReducer from './redux/reducers/rootReducer'
import thunk from 'redux-thunk'
import Welcome from './screens/Welcome'
import Home from './screens/Home'
import Cities from './screens/Cities'
import SignIn from './screens/SignIn'

const globalStore = createStore(rootReducer, applyMiddleware(thunk))

const App = ()=>{
  return(
    <Provider store={globalStore}>
      <SignIn/>
    </Provider>
  )
}

export default App

const styles = StyleSheet.create({
  main:{
    flex:1,
    backgroundColor:'#000',
    alignItems:'center',
    justifyContent:'center'
  },
  h1:{
    color:'red',
    fontSize:30
  }
})