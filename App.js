import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import Welcome from './screens/Welcome'
import Home from './screens/Home'

const App = ()=>{
  return(
    // <Welcome/>
    <Home/>
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