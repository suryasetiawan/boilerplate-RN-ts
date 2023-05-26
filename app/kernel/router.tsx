import React from 'react'
import { connect } from 'react-redux'
import { NavigationContainer } from '@react-navigation/native'
import routes from '@app/routes'

const AppNavigator = routes

type MyProps = {}
type AppState = {
  isRehydrated: boolean
  isAuthenticated: boolean
}

const IndexLayout = () => {
  class AppLayout extends React.Component<MyProps, AppState> {
    render() {
      return (
        <NavigationContainer>
          <AppNavigator />
        </NavigationContainer>
      )
    }
  }
  return connect((state: any) => ({
    authData: state.authData
  }))(AppLayout)
}

export default {
  IndexLayout
}
