import React from 'react'
import { Image, StyleSheet } from 'react-native'
import { TabNavigator } from 'react-navigation'

import World from '../../pages/world'
import NewRoom from '../../pages/newRoom'
import MyRoomList from '../../pages/myRoomList'
import Me from '../../pages/me'

const styles = StyleSheet.create({
  icon: {

  },
})

const setTabItem = (screen, label, icon) => ({
  screen,
  navigationOptions: {
    tabBarLabel: label,
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={icon}
        style={[styles.icon, { tintColor }]}
      />
    ),
  },
})

const RouteConfigs = {
  world: setTabItem(World, 'World', require('../img/world.png')),
  new: setTabItem(NewRoom, 'New Room', require('../img/new.png')),
  list: setTabItem(MyRoomList, 'My Room List', require('../img/myRoom.png')),
  me: setTabItem(Me, 'Me', require('../img/me.png')),
}

const TabNavigatorConfig = {
  tabBarOptions: {
    activeTintColor: '#444', // 文字和图片选中颜色
    inactiveTintColor: '#aaa', // 文字和图片默认颜色
    showIcon: true, // android 默认不显示 icon, 需要设置为 true 才会显示
    indicatorStyle: { height: 0 }, // android 中TabBar下面会显示一条线，高度设为 0 后就不显示线了， 不知道还有没有其它方法隐藏？？？
    style: {
      backgroundColor: '#eee', // TabBar 背景色
    },
    labelStyle: {
      fontSize: 12, // 文字大小
    },
  },
};

export default TabNavigator(RouteConfigs, TabNavigatorConfig)
