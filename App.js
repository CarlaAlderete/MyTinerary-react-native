import React from 'react'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './redux/reducers/rootReducer'
import thunk from 'redux-thunk'
import {NavigationContainer} from '@react-navigation/native'
import MainNavStack from './navigation/MainNavStack'

const globalStore = createStore(rootReducer, applyMiddleware(thunk))

const App = ()=>{
  return(
    <Provider store={globalStore}>
      <NavigationContainer>
        <MainNavStack/>
      </NavigationContainer>
    </Provider>
  )
}

export default App