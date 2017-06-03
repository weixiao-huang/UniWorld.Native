/**
 * Created by huangwx on 11/04/2017.
 */

import React, { Component } from 'react';
import { Image, StyleSheet, View, Text, ScrollView, TextInput, TouchableOpacity, Switch, ActivityIndicator, KeyboardAvoidingView } from 'react-native'
import { connect } from 'react-redux'

import Picker from 'react-native-picker'
import ImagePicker from 'react-native-image-picker'
import ImageCropPicker from 'react-native-image-crop-picker'
import Icon from 'react-native-vector-icons/Entypo'

import I18n from 'react-native-i18n'
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
      isUploading: false,
      ...this.props.newRoom
    }
  }

  _showPicker = () => {
    const threshold = 30
    Picker.init({
      pickerData: (Object.keys(Array.from(new Array(threshold+1))).slice(2)),
      pickerTitleText: I18n.t('NewRoom.input.second.max.pickerTitle'),
      onPickerConfirm: max_participants => {
        this.setState({max_participants: parseInt(max_participants[0])})
      }
    })
    Picker.show()
  }

  _showCropPicker = () => {
    ImageCropPicker.openPicker({
      width: 400,
      height: 300,
      cropping: true
    }).then(image => {
      this.setState({
          cover: image.path, // 'data:image/jpeg;base64,' + res.data, //  cover.uri,
        })
    }, err => {
      console.log('取消')
    })
  }

  _showUpload = () => {
    const options = {
      title: I18n.t('NewRoom.input.second.Cover.uploadTitle'),
      cancelButtonTitle: 'Cancel',
      takePhotoButtonTitle: 'Take Photo...',
      chooseFromLibraryButtonTitle: 'Choose from Library...',
      returnBase64Image: true,
      returnIsVertical: false
    }
    this.setState({isUploading: true})
    ImagePicker.showImagePicker(options, res => {
      if (res.didCancel) {
        console.log('User cancelled image picker')
        this.setState({isUploading: false})
      }
      else if (res.error) {
        console.log('ImagePicker Error: ', res.error)
        this.setState({isUploading: false})
      }
      else if (res.customButton) {
        console.log('User tapped custom button: ', res.customButton)
        this.setState({isUploading: false})
      }
      else {
        const cover = { uri: res.uri }
        // You can also display the image using data:
        // this.setState({ cover: 'data:image/jpeg;base64,' + res.data })

        this.setState({
          cover: cover.uri, // 'data:image/jpeg;base64,' + res.data, //  cover.uri,
          isUploading: false
        })
      }
    })
  }

  _isCompleted = () => (
    this.state.description.length > 0 &&
    this.state.date_time_start.length > 0 &&
    this.state.date_time_end.length > 0 &&
    this.state.location_string.length > 0 &&
    _.isNumber(this.state.max_participants) || isNaN(this.state.max_participants)
  )

  next = () => {
    this.props.dispatch(SetNewRoomData(this.state))
    this.props.navigation.navigate('Third')
  }
  render() {
    console.log(this.state.cover)
    return (
      <KeyboardAvoidingView behavior={'position'}>
        <ScrollView>
          <View style={[styles.fullFlex, styles.grayBackground, {paddingTop: 20}]}>

            {/* Header Image */}
            <View>
              <Image style={localStyles.header} source={require('../../../assets/customCreate2.png')}/>
            </View>
            <Text style={localStyles.title}>{I18n.t('NewRoom.input.second.title')}</Text>


            {/* Name & Labels */}
            <View style={[localStyles.wrap]}>
              <InputItem title={I18n.t('NewRoom.input.name.title')} titleWidth={75}>
                <Text style={[styles.flex1]}>{this.state.title}</Text>
              </InputItem>
              <InputItem title={I18n.t('NewRoom.input.label.title')} titleWidth={75}>
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
              <InputItem title={I18n.t('NewRoom.input.second.Cover.title')} titleWidth={75}>
                <View style={[styles.fullFlexWidth]}>
                  <View style={[styles.flex1, localStyles.wrap__cover]}>
                    <TouchableOpacity  onPress={this._showCropPicker} style={[styles.fullFlexWidth, localStyles.cover]}>
                      <Text style={{color: '#c7c7c7'}}>{I18n.t('NewRoom.input.second.Cover.placeholder')}</Text>
                      <ActivityIndicator animating={this.state.isUploading}/>

                        {/*<Image source={this.state.cover ? this.state.cover : ''} style={[localStyles.cover__image]}>*/}
                        <Icon name="camera" size={20}/>
                        {/*</Image>*/}

                    </TouchableOpacity>
                    {this.state.cover ?

                      <View style={[styles.rowFlex, localStyles.wrap__cover__wrap]}>
                        <Image style={[localStyles.wrap__cover__wrap__img]} source={{uri: this.state.cover}}/>
                      </View>
                      : null
                    }
                  </View>
                </View>
              </InputItem>
            </View>


            {/*Required*/}
            <View style={[localStyles.wrap]}>
              <View style={[localStyles.wrap__title]}>
                <Image style={[localStyles.wrap__icon]} source={require('../../../assets/icon/logoBlue.png')}/>
                <Text style={[{color: '#3555b6'}, localStyles.wrap__title__text]}>Required</Text>
              </View>
              <InputItem title={I18n.t('NewRoom.input.second.intro.title')} titleWidth={75}>
                <TextInput
                  style={[styles.flex1, styles.contentFontSize,,localStyles.desInput]}
                  placeholder={I18n.t('NewRoom.input.second.intro.placeholder')}
                  multiline={true}
                  defaultValue={this.state.description}
                  onChangeText={description => this.setState({description})}
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
              <InputItem title={I18n.t('NewRoom.input.second.location.title')} titleWidth={75}>
                <TextInput
                  style={[styles.flex1]}
                  placeholder={I18n.t('NewRoom.input.second.location.placeholder')}
                  defaultValue={this.state.location_string}
                  onChangeText={location_string => this.setState({location_string})}
                />
              </InputItem>
              <InputItem title={I18n.t('NewRoom.input.second.max.title')} titleWidth={75}>
                <TouchableOpacity style={[styles.flex1]} onPress={this._showPicker}>
                  <Text style={[styles.contentFontSize, _.isNumber(this.state.max_participants) || isNaN(this.state.max_participants) ? {color: 'black'} : {color: '#c9c9c9'}]}>
                    {this.state.max_participants ? this.state.max_participants : 2}
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
              <InputItem title={I18n.t('NewRoom.input.second.private.title')} titleWidth={75}>
                <Text style={[styles.flex1, styles.gray, styles.contentFontSize]}>
                  {I18n.t('NewRoom.input.second.private.placeholder')}
                </Text>
                <Switch
                  style={{marginRight: 10}}
                  onValueChange={isPrivate => this.setState({isPrivate})}
                  value={this.state.isPrivate}
                />
              </InputItem>
              <InputItem title={I18n.t('NewRoom.input.second.welcome.title')} titleWidth={75}>
                <TextInput
                  style={[styles.flex1]}
                  placeholder={I18n.t('NewRoom.input.second.welcome.placeholder')}
                  defaultValue={this.state.welcome}
                  onChangeText={welcome => this.setState({welcome})}
                />
              </InputItem>
              <InputItem title={I18n.t('NewRoom.input.second.expense.title')} titleWidth={75}>
                <TextInput
                  style={[styles.flex1]}
                  placeholder={I18n.t('NewRoom.input.second.expense.placeholder')}
                  onChangeText={expense => this.setState({expense})}
                  defaultValue={this.state.expense}
                />
              </InputItem>
              <InputItem title={I18n.t('NewRoom.input.second.rewards.title')} titleWidth={75}>
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
                disabled={!this._isCompleted()}
                title={I18n.t('NewRoom.button')}
                onPress={this.next}
                inlineStyle={[localStyles.button, this._isCompleted() ? localStyles.active : localStyles.disabled]}
              />
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>

    )
  }
}

const coverSize = 60
const localStyles = StyleSheet.create({
  desInput:{
    height:150,
  },
  wrap__cover: {
    marginRight: 20
  },
  wrap__cover__wrap: {
    paddingTop: 10,
    paddingBottom: 20,
  },
  wrap__cover__wrap__img: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
  cover: {
    margin: 4,
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
    borderRadius: 5,
    padding: 15
  },
  active: {
    backgroundColor: '#ec5367',
  },
  disabled: {
    backgroundColor: '#cbcbcb'
  }
})
