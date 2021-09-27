import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import Welcome from './screens/Welcome'

const App = ()=>{
  return(
    <Welcome/>
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