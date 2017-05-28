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
  TextInput,
  TouchableOpacity,
  Switch,
  ActivityIndicator,
  KeyboardAvoidingView,
  Picker
} from 'react-native'
import { connect } from 'react-redux'

import I18n from 'react-native-i18n'
import { SetSignInfoData } from '../../store/actions'

import styles from '../../common/styles'

import SignInfoButton from '../../components/StyleButton'
import InputItem from '../../components/InputItem'
import BackgroudImage from '../../components/BackgroundImage'
import DatePicker from 'react-native-datepicker'

const mapStateToProps = state =>({
    signInfo: state.signInfo
})

@connect(mapStateToProps, dispatch =>({dispatch}))
export default class SecondPage extends Component{
  constructor(props){
    super(props)
    this.state={
      isuploading:false,
      disabled:false,
      nickname:'',
      gender:0,
      birthday:'1199-11-11',
      deparment:'ee',
      grade:'1',
      signature:'1111'
    }
  }

  _isCompleted = () => (
    this.state.nickname.length > 0 &&
    this.state.nickname.length <30
  )
  next = () =>{
    this.props.dispatch(SetSignInfoData(this.state))
//   this.props.navigation.navigate(Third)
  }
  render(){
    return(
      <KeyboardAvoidingView behavior={'position'}>
        <ScrollView>
          <BackgroudImage
          bgUrl={require('../../assets/image/signInfoBg.png')}
          >
            <View style={[styles.fullFlex, styles.grayBackground, {paddingTop:50}]}>
              <Image style={localStyles.header} source={require('../../assets/image/signInfo2.png')}/>
            </View>
            <Text style={[styles.fullflex, localStyles.title]}>{I18n.t('SignInfo.second.title')}</Text>

            <View style={localStyles.wrap}>
              <InputItem
                title={I18n.t('SignInfo.second.nickname')}
                inlineStyle = {[localStyles.transparent, localStyles.input_flex]}
                textStyle = {localStyles.inputTitle}
                style = {{underlineColorAndroid : 'blue'}}
                underlineColorAndroid = 'blue'
              >
                <TextInput
                  style={[styles.flex1, {borderColor: 'white'}]}
                  defaultValue={this.state.nickname}
                  onChangeText={nickname => this.setState({nickname})}
                />
                </InputItem>
              <InputItem
                title = {I18n.t('SignInfo.second.gender')}
                inlineStyle = {[localStyles.transparent, localStyles.input_flex]}
                textStyle = {localStyles.inputTitle}
              >
                <Picker
                  selectedValue={this.state.language}
                  onValueChange={(lang)=>this.setState({language:lang})}>
                  <Picker.Item label=""/>
                </Picker>
              </InputItem>
              <InputItem
                title = {I18n.t('SignInfo.second.gender')}
                inlineStyle = {[localStyles.transparent, localStyles.input_flex]}
                textStyle = {localStyles.inputTitle}
              >
                <TextInput
                  style={[styles.flex1]}
                  defaultValue={this.state.gender}
                  onChangeText={sex => this.setState({gender})}
                />
              </InputItem>
              <InputItem
                title = {I18n.t('SignInfo.second.birthday')}
                inlineStyle = {[localStyles.transparent, localStyles.input_flex]}
                textStyle = {localStyles.inputTitle}
                >
                <DatePicker
                  mode = "date"
                  date = {this.state.birthday}
                  style={{width:200}}
                  placeholder ={I18n.t('SighInfo.second.birthday')}
                  format="YYYY-MM-DD"
                  minDate="1960-01-01"
                  maxDate="2020-01-01"
                  confirmBtnText="Confirm"
                  cancelBtnText="Cancel"
                  showIcon={false}
                  customStyles={{
                    dateInput:{
                      borderWidth:0
                    }
                  }}
                  onDateChange={birthday=>this.setState({birthday})}
                />
              </InputItem>
              <InputItem
                title = {I18n.t('SignInfo.second.birthday')}
                inlineStyle = {[localStyles.transparent, localStyles.input_flex]}
                textStyle = {localStyles.inputTitle}
              >
                <TextInput
                  style={[styles.flex1]}
                  defaultValue={this.state.birthday}
                  onChangeText={birthday => this.setState({birthday})}
                />
              </InputItem>
              <InputItem
                title = {I18n.t('SignInfo.second.department')}
                inlineStyle = {[localStyles.transparent, localStyles.input_flex]}
                textStyle = {localStyles.inputTitle}
              >
                <TextInput
                  style={styles.flex1}
                  defaultValue={this.state.department}
                  onChangeText={department => this.setState({department})}
                />
              </InputItem>
              <InputItem
                title = {I18n.t('SignInfo.second.grade')}
                inlineStyle = {[localStyles.transparent, localStyles.input_flex]}
                textStyle = {localStyles.inputTitle}
              >
                <TextInput
                  style={[styles.flex1]}
                  defaultValue={this.state.grade}
                  onChangeText={grade => this.setState({grade})}
                />
              </InputItem>
              <InputItem
                title = {I18n.t('SignInfo.second.signature')}
                inlineStyle = {[localStyles.transparent, localStyles.input_flex]}
                textStyle = {localStyles.inputTitle}
              >
                <TextInput
                  style={[styles.flex1]}
                  defaultValue={this.state.signature}
                  onChangeText={signature => this.setState({signature})}
                />
              </InputItem>
            </View>

            <View style={[styles.fullFlexWidth, {marginLeft: 20, marginRight:20}]}>
              <SignInfoButton
                disabled={!this._isCompleted()}
                title={I18n.t('SignInfo.second.nextButton')}
                onPress={this.next}
                inlineStyle={[localStyles.button,this._isCompleted()?localStyles.active:localStyles.disabled]}
              />
            </View>
          </BackgroudImage>
        </ScrollView>
      </KeyboardAvoidingView>
    )
  }
}

const coverSize = 60
const localStyles = StyleSheet.create({
  cover: {
    margin: 4,
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  wrap: {
    marginTop: 2,
    marginBottom: 14,
    marginLeft: 20,
    marginRight: 20
  },
  header: {
    height: 115,
    resizeMode: 'contain',
  },
  title: {
    color: '#3555B6',
    fontSize: 16,
    paddingTop: 22,
    alignItems:'center',
    justifyContent:'center',
    textAlign:'center',
    fontWeight: 'bold'
  },
  button: {
    marginTop: 22,
    marginBottom: 20,
    borderRadius: 5,
    padding: 15
  },
  active: {
    backgroundColor: '#ec5367',
  },
  disabled: {
    backgroundColor: '#cbcbcb'
  },
  transparent: {
    backgroundColor: 'transparent'
  },
  input_flex: {
    flexDirection: 'column',
    alignItems: 'stretch',
    borderColor: '#3555B6',
    paddingTop: 5,
    paddingBottom: 0,

  },
  inputTitle: {
    marginTop: 18,
    marginLeft: -10,
    color: '#3555B6',
    fontSize: 15
  }
})
