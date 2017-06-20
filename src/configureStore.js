import { applyMiddleware, compose } from 'redux'
import Reactotron from 'reactotron-react-native'
import createSagaMiddleware, { END } from 'redux-saga'
import { createLogger } from 'redux-logger'
import { persistStore, autoRehydrate } from 'redux-persist'
import { AsyncStorage } from 'react-native'

import rootReducer from './index-reducer'

const middlewares = []

// create our new saga monitor
const sagaMonitor = Reactotron.createSagaMonitor()

// configure saga middleware
const sagaMiddleware = createSagaMiddleware({ sagaMonitor })
middlewares.push(sagaMiddleware)

if (process.env.NODE_ENV === 'development') {
  const logger = createLogger()
  middlewares.push(logger)
}
// const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);

export default (initialState) => {
  // const store = createStoreWithMiddleware(rootReducer, initialState);

  /* eslint-disable no-underscore-dangle */
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = Reactotron.createStore(
    rootReducer,
    initialState,
    composeEnhancers(
      applyMiddleware(...middlewares),
      autoRehydrate(),
    ),
  )
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  /* eslint-enable */

  // install saga run
  store.runSaga = sagaMiddleware.run
  store.close = () => store.dispatch(END)
  const opt = {
    storage: AsyncStorage,
    transform: [],
  }
  persistStore(store, opt)
  return store
}
