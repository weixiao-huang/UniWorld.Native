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
  KeyboardAvoidingView
} from 'react-native'
import { connect } from 'react-redux'

import I18n from 'react-native-i18n'
import { EditUserInfo } from '../../store/actions'

import styles from '../../common/styles'

import SignInfoButton from '../../components/StyleButton'
import InputItem from '../../components/InputItem'
import BackgroudImage from '../../components/BackgroundImage'
import DatePicker from 'react-native-datepicker'
import Picker from 'react-native-picker'

const mapStateToProps = state =>({
    userInfo: state.signInfo
})
@connect(mapStateToProps, dispatch =>({dispatch}))
export default class SecondPage extends Component{
  constructor(props){
    super(props)
    this.state={
      isuploading:false,
      disabled:false,
      signInfo:{
        nickname:null,
        gender:null,
        birthday:null,
        deparment:null,
        grade:null,
        signature:null,
      },
      agreement:false
    }
  }

  _isCompleted = () => {

  }
  next = () =>{
    this.props.dispatch(EditUserInfo(this.state))
    this.setState({disabled:true})
    setTimeout(()=>this.setState({disabled:false}),1000)
//   this.props.navigation.navigate(Third)
  }

  _showGenderPicker() {
    Picker.init({
      pickerData: ['male','female','lsbt'],
      // selectedValue: ['河北', '唐山', '古冶区'],
      pickerTitleText: I18n.t('SignInfo.second.gender'),
      onPickerConfirm: pickedValue => {
       this.setState({
         signInfo: {
           ...this.state.signInfo,
           gender: pickedValue
         }
       })
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
  _showGradePicker() {
    Picker.init({
      pickerData: [2012,2013,2014,2015,2016,2017],
      pickerFontSize:14,
      pickerTitleText: I18n.t('SignInfo.second.grade'),
      onPickerConfirm: pickedValue => {
        this.setState({
          signInfo: {
            ...this.state.signInfo,
            grade:pickedValue
          }
        })
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


  render(){
    return(
      <KeyboardAvoidingView behavior={'position'}>
        <ScrollView style={{height: 700}}>
        {!this.state.agreement?<View>
          <BackgroudImage
            bgUrl={require('../../assets/image/signInfoBg.png')}
            style={{height: 700}}
          >
            <View style={[styles.fullFlex, styles.grayBackground, {paddingTop:50}]}>
              <Image style={localStyles.header} source={require('../../assets/image/signInfo2.png')}/>
            </View>
            <Text style={[styles.fullflex, localStyles.title]}>{I18n.t('SignInfo.second.title')}</Text>

            <View style={{paddingTop:40}}>
              <View style={[localStyles.wrap]}>
                <Text style={localStyles.inputTitle}>
                  {I18n.t('SignInfo.second.nickname')}
                </Text>
                <TextInput
                  style={[localStyles.inputWrap]}
                  defaultValue={this.state.nickname}
                  onChangeText={nickname =>
                    this.setState({
                      signIngo:{
                        ...this.signInfo,
                        nickname:nickname
                        }
                  })}
                  placeholder={I18n.t('SignInfo.second.nickname')}
                />
              </View>
              <View style={[localStyles.wrap]}>
                <Text style={localStyles.inputTitle}>
                    {I18n.t('SignInfo.second.gender')}
                </Text>
                <TouchableOpacity onPress={this._showGenderPicker.bind(this)}>
                  <Text
                    style={localStyles.inputWrap}
                  >
                    {this.state.signInfo.gender?
                    this.state.signInfo.gender:
                    <Text style={{color:'#bcbcbc'}}>{I18n.t('SignInfo.second.gender')}</Text>
                    }
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={[localStyles.wrap]}>
                <Text style={localStyles.inputTitle}>
                  {I18n.t('SignInfo.second.birthday')}
                </Text>
                  <DatePicker
                    mode = "date"
                    date = {this.state.birthday}
                    style={[localStyles.inputWrap]}
                    placeholder ={I18n.t('SignInfo.second.birthday')}
                    format="YYYY-MM-DD"
                    minDate="1960-01-01"
                    maxDate="2020-01-01"
                    confirmBtnText="Confirm"
                    cancelBtnText="Cancel"
                    showIcon={false}
                    customStyles={{
                      dateInput:{
                        alignItems: 'flex-start',
                        borderWidth:0,
                        fontSize:14
                      },
                      dateIcon:{
                        marginLeft: 50
                      }
                    }}
                    onDateChange={birthday=>{
                        this.setState({
                          signInfo:{
                            ...this.state.signInfo,
                            birthday:birthday
                          }
                        })
                      }
                    }
                  />
                </View>
                <View style={[localStyles.wrap]}>
                  <Text style={[localStyles.inputTitle]}>
                      {I18n.t('SignInfo.second.grade')}
                  </Text>
                  <TouchableOpacity onPress={this._showGradePicker.bind(this)}>
                    <Text
                      style={localStyles.inputWrap}
                    >
                      {this.state.signInfo.grade?
                      this.state.signInfo.grade:
                      <Text style={{color:'#bcbcbc'}}>{I18n.t('SignInfo.second.grade')}</Text>}
                    </Text>
                  </TouchableOpacity>
                </View>
                <View style={[localStyles.wrap]}>
                  <Text style={localStyles.inputTitle}>
                    {I18n.t('SignInfo.second.department')}
                  </Text>
                  <TextInput
                    style={localStyles.inputWrap}
                    defaultValue={this.state.department}
                    placeholder={I18n.t('SignInfo.second.department')}
                    onChangeText={department =>
                      this.setState({
                        signInfo:{
                          ...this.state.signInfo,
                          department:department
                        }
                      })}
                  />
                </View>
                <View style={[localStyles.wrap]}>
                  <Text style={localStyles.inputTitle}>
                    {I18n.t('SignInfo.second.signature')}
                  </Text>
                  <TextInput
                    style={[localStyles.inputWrap]}
                    defaultValue={this.state.signature}
                    placeholder={I18n.t('SignInfo.second.signature')}
                    onChangeText={signature =>
                      this.setState({
                        signInfo:{
                          ...this.state.signInfo,
                          signature:signature
                          }
                      })}
                  />
                </View>
              </View>

              <View>
                <TouchableOpacity
                  onPress= {()=>{this.setState({agreement:true})}}
                  style = {localStyles.agreementButton}
                >
                  <Text>
                    {I18n.t('SignInfo.second.agreement')}
                  </Text>
                </TouchableOpacity>
              </View>

            <View style={[styles.fullFlexWidth, {marginLeft: 20, marginRight:20, marginBottom:30}]}>
              <SignInfoButton
                disabled={!this._isCompleted()}
                title={I18n.t('SignInfo.second.continue')}
                onPress={this.next}
                inlineStyle={[localStyles.button,(this.state.signInfo.nickname &&
    this.state.signInfo.nickname.length > 0 &&
    this.state.signInfo.nickname.length <30)?localStyles.active:localStyles.disabled]}
              />
            </View>
          </BackgroudImage>
          </View> :
          <View>
              <View>
                <Text
                  style = {[localStyles.agreement]}
                >
                  {I18n.t('SignInfo.second.agreement')}agreement
                </Text>
              </View>
              <View style={[styles.fullFlexWidth, {marginLeft: 20, marginRight:20}]}>
                  <SignInfoButton
                    title={I18n.t('SignInfo.second.back')}
                    onPress={()=>{this.setState({'signInfo.agreement':false})}}
                    inlineStyle={[localStyles.button,localStyles.active]}
                  />
              </View>
          </View>
        }
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
    marginRight: 20,
    // backgroundColor:'black',
    height:48,
    borderBottomColor:'#3555b6',
    borderBottomWidth:1
  },
  header: {
    height: 115,
    resizeMode: 'contain',
    backgroundColor:'transparent'
  },
  title: {
    color: '#3555B6',
    fontSize: 16,
    paddingTop: 22,
    alignItems:'center',
    justifyContent:'center',
    textAlign:'center',
    fontWeight: 'bold',
    backgroundColor:'transparent'
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
    paddingTop: 0,
    paddingBottom: 0,
    borderBottomWidth: 0,
  },
  inputTitle: {
    marginTop: 0,
    marginLeft: 0,
    marginRight:0,
    lineHeight: 15,
    color: '#3555B6',
    fontSize: 15,
    backgroundColor:'transparent'
  },
  inputWrap:{
    paddingTop:4,
    width:'100%',
    height:25,
    backgroundColor:'transparent',
    fontSize:14
  },
  agreement:{
    paddingTop:40,
    textAlign:'center'
  },
  agreementButton:{
    alignItems: 'center',
    backgroundColor:'transparent',
  }
})
