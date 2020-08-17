import 'react-native-gesture-handler';

import React,{Component} from 'react'
import {Provider} from 'react-redux'

import {store} from "./src/store"

import { NavigationContainer } from '@react-navigation/native';

import AppStack from './src/navigation/AppStack'

class App extends Component {
  render(){
    return <Provider store={store} >
      <NavigationContainer>
        <AppStack/>
      </NavigationContainer>
    </Provider>
  }
}

export default App
