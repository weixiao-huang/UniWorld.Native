/**
 * Created by huangwx on 11/04/2017.
 */

import React, { Component } from 'react';
import { Image, StyleSheet, View, Text, ScrollView, TextInput, TouchableOpacity, Switch } from 'react-native'
import { connect } from 'react-redux'

import Picker from 'react-native-picker'
import ImagePicker from 'react-native-image-picker'
import Icon from 'react-native-vector-icons/Entypo'

import I18n from 'react-native-i18n'
import autobind from 'autobind-decorator'
import _ from 'lodash'

import { SetNewRoomData } from '../../../store/actions'

import styles from '../../../common/styles'

import NewRoomButton from '../../../components/StyleButton'
import InputItem from '../../../components/InputItem'
import DateTimePicker from './DateTimePicker'
import Label from '../../../components/Label'

const mapStateToProps = state => ({
  newRoom: state.newRoom
})

@connect(mapStateToProps, dispatch => ({dispatch}))
export default class SecondStep extends Component {
  constructor(props) {
    super(props)
    const date = new Date()
    const dateFormat = '' // `${date.getYear() + 1900}-${date.getMonth()+1}-${date.getDate()}-${date.getHours()}-${date.getMinutes()}`
    this.state = {
      ...this.props.newRoom
    }
  }

  @autobind
  _showPicker() {
    const threshold = 30
    Picker.init({
      pickerData: ['NL'].concat(Object.keys(Array.from(new Array(threshold+1))).slice(2)),
      pickerTitleText: I18n.t('NewRoom.input.second.max.pickerTitle'),
      onPickerConfirm: max_participants => {
        this.setState({max_participants: parseInt(max_participants[0])})
      }
    })
    Picker.show()
  }

  @autobind
  _showUpload() {
    const options = {
      title: I18n.t('NewRoom.input.second.Cover.uploadTitle')
    }
    ImagePicker.showImagePicker(options, res => {
      console.log('Response = ', res)
      if (res.didCancel) {
        console.log('User cancelled image picker')
      }
      else if (res.error) {
        console.log('ImagePicker Error: ', res.error)
      }
      else if (res.customButton) {
        console.log('User tapped custom button: ', res.customButton)
      }
      else {
        const cover = { uri: res.uri }
        // You can also display the image using data:
        // this.setState({ cover: 'data:image/jpeg;base64,' + res.data })

        this.setState({cover: cover.uri})
      }
    })
  }

  @autobind
  next() {
    this.props.navigation.navigate('Third')
    this.props.dispatch(SetNewRoomData(this.state))
  }
  render() {
    return (
      <ScrollView>
        <View style={[styles.fullFlex, styles.grayBackground, {paddingTop: 20}]}>

          {/* Header Image */}
          <View>
            <Image style={localStyles.header} source={require('../../../assets/customCreate2.png')}/>
          </View>
          <Text style={localStyles.title}>{I18n.t('NewRoom.input.second.title')}</Text>


          {/* Name & Labels */}
          <View style={[localStyles.wrap]}>
            <InputItem title={I18n.t('NewRoom.input.name.title')}>
              <Text style={[styles.flex1]}>{this.state.title}</Text>
            </InputItem>
            <InputItem title={I18n.t('NewRoom.input.label.title')}>
              <View style={[styles.fullFlexWidth, styles.flexWrap, {alignItems: 'center'}]}>
                {[...this.state.labels].map((item, index) => {
                  return (
                    <Label key={index} title={item}/>
                  )
                })}
              </View>
            </InputItem>
          </View>


          {/* Cover */}
          <View style={[localStyles.wrap]}>
            <InputItem title={I18n.t('NewRoom.input.second.Cover.title')}>
              <View style={[styles.fullFlexWidth, localStyles.cover]}>
                <Text style={{color: '#c7c7c7'}}>{I18n.t('NewRoom.input.second.Cover.placeholder')}</Text>
                <TouchableOpacity onPress={this._showUpload}>
                  <Image source={this.state.cover ? this.state.cover : ''} style={[localStyles.cover__image]}>
                    <Icon name="camera" size={20}/>
                  </Image>
                </TouchableOpacity>
              </View>
            </InputItem>
          </View>


          {/*Required*/}
          <View style={[localStyles.wrap]}>
            <View style={[localStyles.wrap__title]}>
              <Image style={[localStyles.wrap__icon]} source={require('../../../assets/icon/logoBlue.png')}/>
              <Text style={[{color: '#3555b6'}, localStyles.wrap__title__text]}>Required</Text>
            </View>
            <InputItem title={I18n.t('NewRoom.input.second.intro.title')}>
              <TextInput
                style={[styles.flex1, styles.contentFontSize]}
                placeholder={I18n.t('NewRoom.input.second.intro.placeholder')}
                multiline={true}
                defaultValue={this.state.intro}
                onChangeText={intro => this.setState({intro})}
              />
            </InputItem>
            <DateTimePicker
              title={I18n.t('NewRoom.input.second.start.title')}
              date={this.state.date_time_start}
              onDateChange={date_time_start => this.setState({date_time_start})}/>
            <DateTimePicker
              title={I18n.t('NewRoom.input.second.end.title')}
              date={this.state.date_time_end}
              onDateChange={date_time_end => this.setState({date_time_end})}/>
            <InputItem title={I18n.t('NewRoom.input.second.location.title')}>
              <TextInput
                style={[styles.flex1]}
                placeholder={I18n.t('NewRoom.input.second.location.placeholder')}
                defaultValue={this.state.location_string}
                onChangeText={location_string => this.setState({location_string})}
              />
            </InputItem>
            <InputItem title={I18n.t('NewRoom.input.second.max.title')}>
              <TouchableOpacity style={[styles.flex1]} onPress={this._showPicker}>
                <Text style={[styles.contentFontSize, _.isNumber(this.state.max_participants) || isNaN(this.state.max_participants) ? {color: 'black'} : {color: '#c9c9c9'}]}>
                  {this.state.max_participants ? this.state.max_participants : I18n.t('NewRoom.input.second.max.placeholder')}
                </Text>
              </TouchableOpacity>
            </InputItem>
          </View>


          {/* Options */}
          <View style={[localStyles.wrap]}>
            <View style={[localStyles.wrap__title]}>
              <Image style={[localStyles.wrap__icon]} source={require('../../../assets/icon/logoRed.png')}/>
              <Text style={[{color: '#ec5367'}, localStyles.wrap__title__text]}>{I18n.t('NewRoom.input.second.options')}</Text>
            </View>
            <InputItem title={I18n.t('NewRoom.input.second.private.title')}>
              <Text style={[styles.flex1, styles.gray, styles.contentFontSize]}>
                {I18n.t('NewRoom.input.second.private.placeholder')}
              </Text>
              <Switch
                style={{marginRight: 10}}
                onValueChange={isPrivate => this.setState({isPrivate})}
                value={this.state.isPrivate}
              />
            </InputItem>
            <InputItem title={I18n.t('NewRoom.input.second.welcome.title')}>
              <TextInput
                style={[styles.flex1]}
                placeholder={I18n.t('NewRoom.input.second.welcome.placeholder')}
                defaultValue={this.state.welcome}
                onChangeText={welcome => this.setState({welcome})}
              />
            </InputItem>
            <InputItem title={I18n.t('NewRoom.input.second.expense.title')}>
              <TextInput
                style={[styles.flex1]}
                placeholder={I18n.t('NewRoom.input.second.expense.placeholder')}
                onChangeText={expense => this.setState({expense})}
                defaultValue={this.state.expense}
              />
            </InputItem>
            <InputItem title={I18n.t('NewRoom.input.second.rewards.title')}>
              <TextInput
                style={[styles.flex1]}
                placeholder={I18n.t('NewRoom.input.second.rewards.placeholder')}
                onChangeText={rewards => this.setState({rewards})}
                defaultValue={this.state.rewards}
              />
            </InputItem>
          </View>

          <View style={[styles.fullFlexWidth, {marginLeft: 20, marginRight: 20}]}>
            <NewRoomButton
              title={I18n.t('NewRoom.button')}
              onPress={this.next}
              inlineStyle={localStyles.button}
            />
          </View>
        </View>
      </ScrollView>
    )
  }
}

const coverSize = 60
const localStyles = StyleSheet.create({
  cover: {
    margin: 4,
    marginRight: 14,
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  cover__image: {
    width: coverSize,
    height: coverSize,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: coverSize / 2,
    borderWidth: 1,
    borderColor: '#cecccf'
  },
  wrap: {
    marginTop: 10,
    marginBottom: 14
  },
  header: {
    height: 150,
    resizeMode: 'contain'
  },
  wrap__icon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
  wrap__title: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 14,
    paddingBottom: 10
  },
  wrap__title__text: {
    fontSize: 18,
    paddingLeft: 10
  },
  title: {
    color: '#95a8e2',
    fontSize: 18,
    padding: 18,
  },
  max: {
    color: '#c9c9c9'
  },
  button: {
    marginTop: 5,
    marginBottom: 20,
    backgroundColor: '#ec5367',
    borderRadius: 5,
    padding: 15
  }
})
