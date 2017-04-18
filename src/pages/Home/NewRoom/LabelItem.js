/**
 * Created by huangwx on 16/04/2017.
 */

import React, { Component, PropTypes } from 'react';
import { View, Text, TouchableOpacity, TextInput, Switch, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import autobind from 'autobind-decorator'

import styles from '../../../common/styles'
import I18n from 'react-native-i18n'

import { RemoveLabel } from '../../../store/actions'

import Label from './Label'

const mapStateToProps = state => ({
  labels: state.newRoom.labels
})

@connect(mapStateToProps, dispatch => ({dispatch}))
export default class LabelItem extends Component {
  static propTypes = {
    onPress: PropTypes.func.isRequired,
  }

  @autobind
  removeLabel(index) {
    return () => {
      this.props.dispatch(RemoveLabel(index))
    }
  }

  render() {
    return (
      <View style={[styles.flex1]}>
        <TouchableOpacity onPress={this.props.onPress}>
          <Text style={[styles.contentFontSize, localStyles.button]}>
            {I18n.t('NewRoom.input.label.placeholder')}
          </Text>
        </TouchableOpacity>
        {this.props.labels.length > 0
          ? <View style={[styles.rowFlex, styles.flexWrap]}>
              {this.props.labels.map((item, index) => {
                return (
                  <Label onPress={this.removeLabel(index)} key={index} title={item}/>
                )
              })}
            </View>
          : null
        }
      </View>
    )
  }
}


const localStyles = StyleSheet.create({
  container: {
    borderColor: '#f2f0f4',
    borderBottomWidth: 1,
    paddingBottom: 10
  },
  button: {
    color: '#c7c7cd',
    paddingTop: 10,
    paddingBottom: 10
  },
  title: {
    color: '#6d698b',
    padding: 10,
    marginLeft: 10,
    marginRight: 10,
    fontWeight: 'bold'
  }
})
