import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './redux/reducers/rootReducer'
import thunk from 'redux-thunk'
import Cities from './screens/Cities'

const globalStore = createStore(rootReducer, applyMiddleware(thunk))

const App = ()=>{
  return(
    <Provider store={globalStore}>
      <Cities/>
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