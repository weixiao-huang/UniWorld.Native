import { StackNavigator } from 'react-navigation'
import Login from '../pages/login'
import RoomInfo from '../pages/roomInfo'
import RoomDetails from '../pages/roomDetails'
import UserInfo from '../pages/userInfo'
import HomeTab from './pages/home'
import Register from '../pages/register'
import FindPassword from '../pages/findPassword'
import NewRoom from '../pages/newRoom'
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
    screen: Login,
    navigationOptions: {
      title: 'Login',
      header: null,
    },
  },
  homeTab: {
    screen: HomeTab,
    navigationOptions: {
      title: 'Home',
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
      header: null,
    },
  },
  findPassword: {
    screen: FindPassword,
    navigationOptions: {
      title: 'FindPassword',
      header: null,
    },
  },
}

const StackNavigatorConfigs = {
  initialRouteName: 'login',
}

export default StackNavigator(AppRouteConfigs, StackNavigatorConfigs)
