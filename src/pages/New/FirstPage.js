/**
 * Created by ZZF on 2017/5/23.
 */
import React, { Component } from 'react';
import {
  Image,
  StyleSheet,
  View,
  Text,
  ScrollView,
  Dimensions,
  KeyboardAvoidingView
} from 'react-native'
import { connect } from 'react-redux'
import I18n from 'react-native-i18n'
import styles from '../../common/styles'

import SecondPageButton from '../../components/StyleButton'
import BackgroundImage from '../../components/BackgroundImage'


export default class FirstPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      disabled: false,
    }
  }

  next = () => {
    this.setState({ disabled: true })
    setTimeout(() => this.setState({ disabled: false }), 1000)
    this.props.navigation.navigate('Second')
  }


  render() {
    return (
      <ScrollView >
        <BackgroundImage
          bgUrl={require('../../assets/image/signInfoBg.png')}
          inlineStyle={{ height: Dimensions.get('window').height * 0.9 }}
        >
          <View style={[styles.flex1, localStyles.container, { paddingTop: 100 }]}>
            <Image style={[localStyles.cover, { marginBottom: 20 }]} source={require('../../assets/image/logoPink.png')} />
            <Text style={localStyles.subTitle}>{I18n.t('SignInfo.first.message1')}</Text>
            <Text style={localStyles.subTitle}>{I18n.t('SignInfo.first.message2')}</Text>
            <Text style={localStyles.subTitle}>{I18n.t('SignInfo.first.message3')}</Text>
          </View>
          <View style={[{ marginLeft: 20, marginRight: 20 }]}>
            <SecondPageButton
              disabled={this.state.disabled}
              title={I18n.t('SignInfo.first.nextButton')}
              onPress={this.next}
              inlineStyle={[localStyles.button, localStyles.active]}
            />
          </View>
        </BackgroundImage>
      </ScrollView>
    )
  }
}

const localStyles = StyleSheet.create({
  container: {
    alignItems: 'center',
    height: 100,
    flexDirection: 'column'
  },
  cover: {
    resizeMode: 'contain',
    height: 200,
  },
  subTitle: {
    color: '#95a8e2',
    fontSize: 16,
    padding: 5,
    fontWeight: '500',
    lineHeight: 24,
    backgroundColor: 'transparent'
  },
  title: {
    color: '#3e3974',
    fontSize: 28,
    padding: 16,
  },
  button: {
    // marginTop: 10,
    marginBottom: 30,
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
