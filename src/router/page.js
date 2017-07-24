import { StackNavigator } from 'react-navigation'
import Login from '../pages/login'
import RoomInfo from '../pages/roomInfo'
import RoomDetails from '../pages/roomDetails'
import UserInfo from '../pages/userInfo'
import HomeTab from './pages/home'
import Register from '../pages/register'
import FindPassword from '../pages/findPassword'
import RegisterInfo from '../pages/registerInfo'
import ChannelPage from '../pages/channelPage'
import Agreement from '../pages/agreement'

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
  agreement: {
    screen: Agreement,
    navigationOptions: {
      title: 'Agreemet',
      header: null,
    },
  },
  channelPage: {
    screen: ChannelPage,
    navigationOptions: {
      title: 'ChannelPage',
      ...commonSettings,
    },
  },
  registerInfo: {
    screen: RegisterInfo,
    navigationOptions: {
      title: 'RegisterInfo',
      header: null,
    },
  },
}

const StackNavigatorConfigs = {
  initialRouteName: 'login',
}

export default StackNavigator(AppRouteConfigs, StackNavigatorConfigs)
