import { applyMiddleware, createStore } from 'redux'

import thunk from 'redux-thunk'
import logger from 'redux-logger'
import authMiddleware from '@kernel/middleware/authMiddleware'
import persistMiddleware from '@kernel/middleware/persistMiddleware'
import activityMiddleware from '@kernel/middleware/activityMiddleware'
import { persistStore, persistReducer } from 'redux-persist'
import AsyncStorage from '@react-native-async-storage/async-storage'

import reducers from '@store'

const persistConfig = {
  key: 'root',
  storage: AsyncStorage
}

const middlewares: Array<any> = [
  thunk,
  __DEV__ && logger,
  authMiddleware,
  persistMiddleware,
  activityMiddleware
].filter(Boolean)

const persistedReducer = persistReducer(persistConfig, reducers)
const store = createStore(persistedReducer, applyMiddleware(...middlewares))
const persistor = persistStore(store)

export default {
  store,
  persistor
}
