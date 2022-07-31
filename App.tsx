import React from 'react'
import {StatusBar, Text, View} from 'react-native'

const App = () => {
  return (
    <>
      <StatusBar backgroundColor={'transparent'} translucent barStyle={'light-content'} />
      <View>
        <Text>Hello World!</Text>
      </View>
    </>
  )
}

export default App
