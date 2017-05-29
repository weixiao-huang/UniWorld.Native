import React from 'react'
import { Provider } from 'react-redux'
import configureStore from './configureStore'
import rootSaga from './index-sagas'
import UniWorld from './uniworld'

const store = configureStore()
store.runSaga(rootSaga)

export default () => (
  <Provider store={store}>
    <UniWorld />
  </Provider>
)
