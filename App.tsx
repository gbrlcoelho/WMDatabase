import React from 'react'
import {StatusBar} from 'react-native'
import {Home} from './src/screens/Home'

const App = () => {
  return (
    <>
      <StatusBar backgroundColor={'transparent'} translucent barStyle={'light-content'} />
      <Home />
    </>
  )
}

export default App
