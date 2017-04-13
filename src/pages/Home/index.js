/**
 * Created by huangwx on 11/04/2017.
 */

import React, { Component } from 'react';

import { TabNavigator, DrawerNavigator } from 'react-navigation'
import World from './World'
import NewRoom from './NewRoom'
import Smile from './Smile'
import RoomList from './RoomList'
import Me from './Me'


export default TabNavigator({
  World: { screen: World },
  NewRoom: { screen: NewRoom },
  Smile: { screen: Smile },
  RoomList: { screen: RoomList },
  Me: { screen: Me }
})


