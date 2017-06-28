import { StackNavigator } from 'react-navigation'

import FirstStep from './pages/firstStep'
import SecondStep from './pages/secondStep'
import ThirdStep from './pages/thirdStep'

const Router = StackNavigator({
  First: {
    screen: FirstStep,
    navigationOptions: {
      title: 'First',
    },
  },
  Second: {
    screen: SecondStep,
    navigationOptions: {
      title: 'Second',
    },
  },
  Third: {
    screen: ThirdStep,
    navigationOptions: {
      title: 'Third',
    },
  },
}, {
  headerMode: 'screen',
  initialState: 'First',
})

export default Router
