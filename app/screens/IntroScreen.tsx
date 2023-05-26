import React, { Component } from 'react'
import { View, Text } from 'react-native'

class IntroScreen extends Component {
  constructor(props: any) {
    super(props)
  }

  shouldComponentUpdate(): boolean {
    return false
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'black'
        }}>
        <Text style={{ fontSize: 24, color: 'white' }}>v0.0.5</Text>
      </View>
    )
  }
}

export default IntroScreen
