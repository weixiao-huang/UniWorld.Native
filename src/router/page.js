import { StackNavigator } from 'react-navigation'

import Login from '@/pages/login'
import RoomInfo from '@/pages/roomInfo'
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
  roomInfo: {
    screen: RoomInfo,
    navigationOptions: {
      title: 'RoomInfo',
    },
  },
}

const StackNavigatorConfigs = {
  headerMode: 'none',
  initialRouteName: 'login',
}

export default StackNavigator(AppRouteConfigs, StackNavigatorConfigs)
