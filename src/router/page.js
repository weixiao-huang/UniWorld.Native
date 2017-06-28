import { StackNavigator } from 'react-navigation'

import Login from '../pages/login'
import RoomInfo from '../pages/roomInfo'
import RoomDetails from '../pages/roomDetails'
import UserInfo from '../pages/userInfo'
import HomeTab from './components/home'
import Register from '../pages/register'
import FindPassword from '../pages/findPassword'
import RegisterInfo from '../pages/RegisterInfo'

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

const AppRouteConfigs = {
  login: {
    screen: RegisterInfo,
    navigationOptions: {
      title: 'Login',
      header: null,
    },
  },
  homeTab: {
    screen: HomeTab,
    navigationOptions: {
      title: 'HomeTab',
      header: null,
      ...commonSettings,
    },
  },
  roomInfo: {
    screen: RoomInfo,
    navigationOptions: {
      title: 'RoomInfo',
      ...commonSettings,
    },
  },
  roomDetails: {
    screen: RoomDetails,
    navigationOptions: {
      title: 'RoomDetails',
      ...commonSettings,
    },
  },
  userInfo: {
    screen: UserInfo,
    navigationOptions: {
      title: 'UserInfo',
      ...commonSettings,
    },
  },
  register: {
    screen: Register,
    navigationOptions: {
      title: 'Register',
      ...commonSettings,
    },
  },
  findPassword: {
    screen: FindPassword,
    navigationOptions: {
      title: 'FindPassword',
      ...commonSettings,
    },
  },
}

const StackNavigatorConfigs = {
  initialRouteName: 'login',
}

export default StackNavigator(AppRouteConfigs, StackNavigatorConfigs)
