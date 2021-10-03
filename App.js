import React from 'react'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './redux/reducers/rootReducer'
import thunk from 'redux-thunk'
import {NavigationContainer} from '@react-navigation/native'
import Navigator from './navigation/MainNavStack'
import { AppLoading } from 'expo-app-loading'
import { useFonts } from 'expo-font'
import {Roboto_400Regular,Roboto_700Bold} from '@expo-google-fonts/roboto'
import {Acme_400Regular} from '@expo-google-fonts/acme'


const globalStore = createStore(rootReducer, applyMiddleware(thunk))

const App = ({tokenUser, forcedSignIn})=>{
  let [fontsLoaded] = useFonts({
    Acme_400Regular,
    Roboto_700Bold,
    Roboto_400Regular
  })
  
  if (!fontsLoaded) {
    return null
  }
  return(
    <Provider store={globalStore}>
      <NavigationContainer>
        <Navigator/>
      </NavigationContainer>
    </Provider>
  )
 
}
export default App
