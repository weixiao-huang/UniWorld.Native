/**
 * Created by huangwx on 11/04/2017.
 */

import React, { Component } from 'react';
import { View, StyleSheet, ScrollView, Text, Alert, TextInput, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import I18n from 'react-native-i18n'
import styles from '../../../../common/styles'
import Picker from 'react-native-picker'

import Button from '../../../../components/StyleButton'
import LabelBox from './TextBox'
import InputItem from '../../../../components/InputItem'

import { UserLogout, GoToLogin, SetUserInfo, EditUserInfo } from '../../../../store/actions'

const mapStateToProps = state => ({
  userInfo: state.user.userInfo,
  isEditing: state.user.isEditing
})

@connect(mapStateToProps, dispatch => ({dispatch}))
export default class UserInfo extends Component {
  constructor(props) {
    super(props)
    const { name, department, signature } = this.props.userInfo
    this.state = {
      isEditing: false,
      name,
      gender: '',
      department,
      year: '',
      signature
    }
  }
  edit = () => {
    this.setState({isEditing: true})
  }
  _save = () => {
    this.setState({isEditing: false})
    const data = {
      name: this.state.name,
      gender: this.state.gender || this.props.userInfo.gender,
      department: this.state.department,
      year: this.state.year || this.props.userInfo.year,
      signature: this.state.signature
    }
    this.props.dispatch(SetUserInfo(data))
    this.props.dispatch(EditUserInfo(data))
  }

  save = () => {
    Alert.alert(
      I18n.t('Me.info.Edit.title'),
      I18n.t('Me.info.Edit.content'),
      [
        {text: I18n.t('confirm'), onPress: () => this._save()},
        {text: I18n.t('cancel'), onPress: () => {}},
      ]
    )
  }

  _logout = () => {
    this.props.dispatch(GoToLogin)
    this.props.dispatch(UserLogout)
  }
  logout = () => {
    Alert.alert(
      I18n.t('Me.info.Logout.title'),
      I18n.t('Me.info.Logout.content'),
      [
        { text: I18n.t('confirm'), onPress: () => {this._logout()} },
        { text: I18n.t('cancel'), onPress: () => {} }
      ]
    )
  }

  _showGenderPicker = () => {
    const gender = this.state.gender === '' ? this.props.userInfo.gender : this.state.gender
    const genderText = gender === true ? I18n.t('Gender.male') : gender === false ? I18n.t('Gender.female') : I18n.t('Gender.null')
    Picker.init({
      pickerData: [I18n.t('Gender.male'), I18n.t('Gender.female'), I18n.t('Gender.null')],
      selectedValue: [genderText],
      // pickerTitleText: I18n.t('NewRoom.input.label.selectTitle'),
      onPickerConfirm: value => {
        const gender = value[0] === I18n.t('Gender.male') ?
          true : value[0] === I18n.t('Gender.female') ?
            false : null
        this.setState({gender})
      },
      onPickerCancel: pickedValue => {
        // console.log('area', pickedValue)
      },
      onPickerSelect: pickedValue => {
        // console.log('area', pickedValue)
      }
    })
    Picker.show()
  }

  _showYearPicker = () => {
    Picker.init({
      pickerData: [2011, 2012, 2013, 2014, 2015, 2016],
      selectedValue: [this.state.year],
      // pickerTitleText: I18n.t('NewRoom.input.label.selectTitle'),
      onPickerConfirm: year => {
        this.setState({year: year[0]})
      },
      onPickerCancel: pickedValue => {
        // console.log('area', pickedValue)
      },
      onPickerSelect: pickedValue => {
        // console.log('area', pickedValue)
      }
    })
    Picker.show()
  }

  render () {
    const { username, university } = this.props.userInfo
    const { name, department, year, signature } = this.props.userInfo

    const gender = this.state.gender === '' ? this.props.userInfo.gender : this.state.gender
    const genderText = gender === true ? I18n.t('Gender.male') : gender === false ? I18n.t('Gender.female') : I18n.t('Gender.null')

    return (
      <ScrollView style={[styles.flex1, localStyles.container]}>
        <View style={[styles.flex4]}>

          {/* Block 1 */}
          <View style={[styles.flex1, localStyles.wrap]}>
            <InputItem textStyle={localStyles.wrap__item__title} title={I18n.t('Me.info.phone')}>
              <Text style={[styles.fullFlexWidth]}>{username}</Text>
            </InputItem>
            <InputItem textStyle={localStyles.wrap__item__title} title={I18n.t('Me.info.name')}>
              <Text style={[styles.fullFlexWidth, localStyles.wrap__item__edit]}>{name}</Text>
            </InputItem>
            <InputItem textStyle={localStyles.wrap__item__title} title={I18n.t('Me.info.gender')}>
              {this.state.isEditing ?
                <TouchableOpacity onPress={this._showGenderPicker} style={[styles.fullFlexWidth]}>
                  <Text style={[this.state.gender === '' ? {color: '#c7c7cd'} : {color: 'black'}]}>
                    {genderText}
                  </Text>
                </TouchableOpacity> :
                <Text style={[styles.fullFlexWidth]}>
                  {genderText}
                </Text>
              }
            </InputItem>
          </View>

          {/* Block 2 */}
          <View style={[localStyles.wrap]}>
            <InputItem textStyle={localStyles.wrap__item__title} title={I18n.t('Me.info.school')}>
              <Text style={[styles.fullFlexWidth]}>{university.name_ch}</Text>
            </InputItem>
            <InputItem textStyle={localStyles.wrap__item__title} title={I18n.t('Me.info.department')}>
              {this.state.isEditing ?
                <TextInput
                  style={[styles.fullFlexWidth, localStyles.wrap__item__edit]}
                  placeholder={department}
                  onChangeText={department => this.setState({department})}
                /> :
                <Text style={[styles.fullFlexWidth, localStyles.wrap__item__edit]}>{department}</Text>
              }
            </InputItem>
            <InputItem textStyle={localStyles.wrap__item__title} title={I18n.t('Me.info.grade')}>
              {this.state.isEditing ?
                <TouchableOpacity onPress={this._showYearPicker} style={[styles.fullFlexWidth]}>
                  <Text style={[this.state.year ? {color: 'black'} : {color: '#c7c7cd'}]}>
                    {this.state.year ? this.state.year : year}
                  </Text>
                </TouchableOpacity> :
                <Text style={[styles.fullFlexWidth]}>
                  {year}
                </Text>
              }
            </InputItem>
          </View>

          {/* Block 3 */}
          <View style={[localStyles.wrap]}>
            <InputItem textStyle={localStyles.wrap__item__title} title={I18n.t('Me.info.nickname')}>
              {this.state.isEditing ?
                <TextInput
                  style={[styles.fullFlexWidth, localStyles.wrap__item__edit]}
                  placeholder={name}
                  onChangeText={name => this.setState({name})}
                /> :
                <Text style={[styles.fullFlexWidth, localStyles.wrap__item__edit]}>{name}</Text>
              }
            </InputItem>
            <InputItem textStyle={localStyles.wrap__item__title} title={I18n.t('Me.info.signature')}>
              {this.state.isEditing ?
                <TextInput
                  style={[styles.fullFlexWidth, localStyles.wrap__item__edit]}
                  placeholder={signature}
                  onChangeText={signature => this.setState({signature})}
                /> :
                <Text style={[styles.fullFlexWidth, localStyles.wrap__item__edit]}>{signature}</Text>
              }
            </InputItem>
          </View>
        </View>

        {/* Edit Button */}
        <View style={[styles.flex1, localStyles.buttonBox]}>
          <Button
            title={this.state.isEditing ? I18n.t('save') : I18n.t('Me.info.edit')}
            onPress={this.state.isEditing ? this.save : this.edit}
            inlineStyle={[localStyles.edit, localStyles.button]}
            color="black"
          />
          {this.state.isEditing ?
            <Button
              title={I18n.t('cancel')}
              onPress={() => {
                this.setState({isEditing: false, name, gender, department, year, signature})
              }}
              inlineStyle={[localStyles.logout, localStyles.button]}
              color="black"
            />
            : null
          }
          <Button
            title={I18n.t('Me.info.logout')}
            onPress={this.logout}
            inlineStyle={[localStyles.logout, localStyles.button]}
            color="black"
          />
        </View>
      </ScrollView>
    )
  }
}

const buttonHeight = 40
const buttonRadius = 3
const localStyles = StyleSheet.create({
  wrap: {
    backgroundColor: 'white',
    marginBottom: 10,
    justifyContent: 'center',
  },
  wrap__item__edit: {
    fontSize: 14
  },
  wrap__item__title: {
    color: '#95a8e2',
    fontSize: 14,
    paddingHorizontal: 10,
    paddingVertical: 5,
    fontWeight: 'normal'
  },
  container: {
    backgroundColor: '#eee'
  },
  buttonBox: {
    justifyContent: 'flex-end'
  },
  button: {
    height: buttonHeight,
    borderRadius: buttonRadius,
    borderTopWidth: 1,
    borderTopColor: '#eee'
  },
  edit: {
    backgroundColor: 'white',
  },
  logout: {
    backgroundColor: '#eee'
  }
})
