import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { IntroScreen } from '@utils/const/screens'

// import IntroScreenMingle from '@screens/IntroScreenMingle'

const Stack = createNativeStackNavigator()

function routes() {
  return (
    <Stack.Navigator
      // initialRouteName={'IntroScreen'}
      screenOptions={{ headerShown: false }}>
      <Stack.Screen name={IntroScreen.name} component={IntroScreen.component} />
    </Stack.Navigator>
  )
}

export default routes
