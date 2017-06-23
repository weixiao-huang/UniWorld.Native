import { StackNavigator } from 'react-navigation'

import Login from '@/pages/login'
import RoomInfo from '@/pages/roomInfo'
import UserInfo from '@/pages/userInfo'
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
  userInfo: {
    screen: UserInfo,
    navigationOptions: {
      title: 'UserInfo',
    },
  },
}

const StackNavigatorConfigs = {
  headerMode: 'none',
  initialRouteName: 'login',
}

export default StackNavigator(AppRouteConfigs, StackNavigatorConfigs)
