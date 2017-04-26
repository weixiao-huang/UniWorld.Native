/**
 * Created by huangwx on 18/04/2017.
 */

import React, { Component } from 'react'
import { StyleSheet, View, ScrollView, Text, TouchableOpacity, Image, Modal } from 'react-native'
import { connect } from 'react-redux'
import I18n from 'react-native-i18n'
import styles from '../../../common/styles'

import NoticeItem from './NoticeItem'
import InputItem from '../../../components/InputItem'

const mapStateToProps = state => ({
  questionnaires: state.room.questionnaires.questionnaires
})

@connect(mapStateToProps)
export default class Notice extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showModal: false
    }
  }
  render() {
    return (
      <View style={[styles.flex1]}>
        <ScrollView>
          {this.props.questionnaires.map((item, index) => (
            <View key={index}>
              <NoticeItem questionnaire={item}/>
            </View>
          ))}
        </ScrollView>
        {/*<View style={{marginTop: 22}}>*/}
          {/*<Modal*/}
            {/*animationType="slide"*/}
            {/*transparent={true}*/}
            {/*visible={this.state.showModal}*/}
            {/*onRequestClose={() => {console.log("Modal has been closed.")}}*/}
          {/*>*/}
            {/*<TouchableOpacity style={[styles.flex1, styles.flexCenter]} onPress={() => this.setState({showModal: false})}>*/}
              {/*<View style={[styles.whiteBackground]}>*/}
              {/*</View>*/}
            {/*</TouchableOpacity>*/}
          {/*</Modal>*/}
        {/*</View>*/}
        <View style={[styles.fullFlexWidth, styles.flexCenter, localStyles.footer]}>
          <TouchableOpacity
            style={[styles.flexCenter, localStyles.star]}
          >
            <Text style={[localStyles.footer__text]}>
              {I18n.t('Room.Notice.Footer.edit')}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.flexCenter, styles.fullFlexWidth, localStyles.join]}
            onPress={() => this.setState({showModal: true})}
          >
              <Image style={[localStyles.footer__icon]} source={require('../../../assets/Logo.png')}/>
              <Text style={[localStyles.footer__text]}>
                {I18n.t('Room.Notice.Footer.new')}
              </Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const localStyles = StyleSheet.create({
  star: {
    flex: 1,
    backgroundColor: '#3555b6'
  },
  join: {
    flex: 2,
    backgroundColor: '#ec5367'
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    width: '100%'
  },
  footer__icon: {
    width: 20,
    height: 20
  },
  footer__text: {
    padding: 16,
    color: 'white',
    fontSize: 17
  }
})
