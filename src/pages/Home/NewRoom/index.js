/**
 * Created by huangwx on 11/04/2017.
 */

import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation'
import { connect } from 'react-redux'

import FirstStep from './FirstStep'
import SecondStep from './SecondStep'
import ThirdStep from './ThirdStep'

const Router = StackNavigator({
  First: {
    screen: FirstStep,
    navigationOptions: {
      title: 'First'
    }
  },
  Second: {
    screen: SecondStep,
    navigationOptions: {
      title: 'Second'
    }
  },
  Third: {
    screen: ThirdStep,
    navigationOptions: {
      title: 'Third'
    }
  },
}, {
  headerMode: 'screen',
  initialState: 'First'
})

import { SetCommonData } from '../../../store/actions'

const mapStateToProps = state => ({
  token: state.auth.token
})


@connect(mapStateToProps, dispatch => ({dispatch}))
export default class NewRoom extends Component {
  componentWillMount() {
    if (!this.props.token) this.props.dispatch(SetCommonData('showLoginDialog', true))
  }
  render() {
    return (
      <Router/>
    )
  }
}
