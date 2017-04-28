/**
 * Created by huangwx on 11/04/2017.
 */

import React, { Component, PropTypes } from 'react';
import { View, Text, TextInput, Switch } from 'react-native'
import { connect } from 'react-redux'
import Picker from 'react-native-picker'
import I18n from 'react-native-i18n'
import _ from 'lodash'
import styles from '../../../common/styles'

import InputItem from '../../../components/InputItem'
import LabelItem from '../../../components/LabelItem'

import { FetchInitialLabels, AddLabel, SetNewRoomData } from '../../../store/actions'

function replaceKeysDeep(obj, replaceKey) {
  const replacedKey = 'children'
  const newKey = obj[replaceKey]
  if (_.isArray(obj)) {
    return _.transform(obj, (result, value, key) => {
      result[key] = _.isObject(value) ? replaceKeysDeep(value, replaceKey) : value
    })
  } else {
    if (Object.keys(obj[replacedKey]).length > 0) {
      return _.transform(obj, (result, value, key) => { // transform to a new object
        const currentKey = key === replacedKey ? newKey : key
        if (key === replacedKey || !isNaN(parseInt(key))) {
          result[currentKey] = _.isObject(value) ? replaceKeysDeep(value, replaceKey) : value
        }
      })
    } else return obj[replaceKey]
  }
}

const mapStateToProps = state => ({
  initialLabels: state.initial.labels,
  newRoom: state.newRoom
})

@connect(mapStateToProps, dispatch => ({dispatch}))
export default class InputArea extends Component {
  constructor(props) {
    super(props)
    this.state = {
      initialLabels: this._createInitialLabels('name_ch')
    }
  }
  static propTypes = {
    onChangeTitle: PropTypes.func.isRequired
  }
  // componentWillMount() {
  //   this.props.dispatch(FetchInitialLabels)
  // }

  _createInitialLabels(name) {
    let data = []
    const labels = Object.values(replaceKeysDeep(this.props.initialLabels.children[1], name))[0]
    for (let firstLayer of labels) {
      const obj = {}
      const key = Object.keys(firstLayer)[0]
      obj[key] = []
      for (let secondLayer of firstLayer[key]) {
        if (typeof(secondLayer) === 'string') {
          // secondLayer = Object.keys(secondLayer)[0]
          secondLayer = { [secondLayer]: [''] }
        }
        obj[key].push(secondLayer)
      }
      data.push(obj)
    }
    return data
  }

  _showLabelPicker() {
    Picker.init({
      pickerData: this.state.initialLabels,
      // selectedValue: ['河北', '唐山', '古冶区'],
      pickerTitleText: I18n.t('NewRoom.input.label.selectTitle'),
      onPickerConfirm: pickedValue => {
        console.log('area', pickedValue)
        const label = pickedValue.pop()
        this.props.dispatch(AddLabel(label ? label : pickedValue.pop()))
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
    return (
      <View style={{marginTop: 30, marginBottom: 20}}>
        <InputItem title={I18n.t('NewRoom.input.name.title')}>
          <TextInput
            maxLength={50}
            style={[styles.flex1, styles.contentFontSize]}
            placeholder={I18n.t('NewRoom.input.name.placeholder')}
            onChangeText={this.props.onChangeTitle}
            defaultValue={this.props.newRoom.title}
          />
        </InputItem>
        <InputItem
          title={I18n.t('NewRoom.input.label.title')}
          inlineStyle={{alignItems: 'flex-start'}}
        >
          <LabelItem
            onPress={this._showLabelPicker.bind(this)}
          />
        </InputItem>
        <InputItem title={I18n.t('NewRoom.input.match.title')}>
          <Text style={[styles.flex1, styles.gray, styles.contentFontSize]}>
            {I18n.t('NewRoom.input.match.placeholder')}
          </Text>
          <Switch
            style={{marginRight: 10}}
            onValueChange={is_matchroom => this.props.dispatch(SetNewRoomData({is_matchroom}))}
            value={this.props.newRoom.is_matchroom}
          />
        </InputItem>
      </View>
    )
  }
}

