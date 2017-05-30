/**
 * Created by ZZF on 2017/5/23.
 */
import React, {Component} from 'react';
import {
  Image,
  StyleSheet,
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Switch,
  ActivityIndicator,
  KeyboardAvoidingView
} from 'react-native'
import {connect} from 'react-redux'
import I18n from 'react-native-i18n'
import {SetSignInfoData} from '../../store/actions'
import styles from '../../common/styles'
import SignInfoButton from '../../components/StyleButton'
import InputItem from '../../components/BackgroundImage'
import BackgroundImage from '../../components/BackgroundImage'

const mapStateToProps = state=>({
  signInfo: state.signInfo
})

@connect(mapStateToProps, dispatch =>({dispatch}))
export default class ThirdPage extends Component{
  constructor(props){
    super(props)
    this.state = {
      labels: []
    }
  }
  render () {
    return (
      <View>
        <Text>test</Text>
      </View>
    )
  }
}
