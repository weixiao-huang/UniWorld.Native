import { StackNavigator } from 'react-navigation'

import Login from '../pages/login'
import HomeTab from './components/home'

const AppRouteConfigs = {
  login: {
    screen: Login,
    navigationOptions: {
      title: 'Login',
    },
  },
  homeTab: {
    screen: HomeTab,
    navigationOptions: {
      title: 'HomeTab',
    },
  },
}

const StackNavigatorConfigs = {
  headerMode: 'screed',
  initialRouteName: 'homeTab',
}

export default StackNavigator(AppRouteConfigs, StackNavigatorConfigs)
