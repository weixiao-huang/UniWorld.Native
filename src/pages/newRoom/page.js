import { StackNavigator } from 'react-navigation'

import FirstStep from './pages/firstStep'
import SecondStep from './pages/secondStep'
import ThirdStep from './pages/thirdStep'

const commonSettings = {
  headerStyle: {
    backgroundColor: '#ec5367',
  },
  headerTitleStyle: {
    color: 'white',
  },
  headerBackTitleStyle: {
    color: '#e9e9ef',
  },
  gesturesEnabled: true,
  headerTintColor: '#e9e9ef',
}

const Router = StackNavigator({
  First: {
    screen: FirstStep,
    navigationOptions: {
      title: 'First',
      ...commonSettings,
    },
  },
  Second: {
    screen: SecondStep,
    navigationOptions: {
      title: 'Second',
      ...commonSettings,
    },
  },
  Third: {
    screen: ThirdStep,
    navigationOptions: {
      title: 'Third',
      ...commonSettings,
    },
  },
}, {
  headerMode: 'screen',
  initialState: 'First',
  ...commonSettings,
})

export default Router
