import React, { Component, Fragment } from 'react'
import { SafeAreaView, StatusBar } from 'react-native'
import { Provider } from 'react-redux'
import kernel from '@kernel'
import { Persistor } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'

const { data, router } = kernel

const {
  store,
  persistor
}: {
  store: any
  persistor: Persistor
} = data

const AppLayout = router.IndexLayout()

class App extends Component {
  constructor(props: any) {
    super(props)
  }

  shouldComponentUpdate(): boolean {
    return false
  }

  render() {
    return (
      <Fragment>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <SafeAreaView style={{ flex: 1 }}>
              <StatusBar barStyle={'dark-content'} />
              <AppLayout isAuthenticated={true} />
            </SafeAreaView>
          </PersistGate>
        </Provider>
      </Fragment>
    )
  }
}

export default App
