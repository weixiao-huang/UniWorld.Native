import React from 'react'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import configureStore from './configureStore'
import rootSaga from './index-sagas'
import UniWorld from './uniworld'

const store = configureStore()
store.runSaga(rootSaga)

const theme = {
  main: '#ec5367',
  gray: '#f2f0f4',
  textGray: '#c7c7cd',
  size: '14px',
  secondary: '12px',
}

export default () => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <UniWorld />
    </ThemeProvider>
  </Provider>
)
