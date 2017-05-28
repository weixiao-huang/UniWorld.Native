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
        <ScrollView style={{height: 700}}>
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
                <TextInput
                style={[localStyles.inputWrap]}
                defaultValue={this.state.nickname}
                onChangeText={nickname => this.setState({nickname})}
              />
              </View>
            <View style={[localStyles.wrap]}>
              <Picker
                selectedValue={this.state.language}
                onValueChange={(lang)=>this.setState({language:lang})}>
                <Picker.Item
                  label="male"
                  value={I18n.t('SignInfo.second.male')}
                />
                <Picker.Item
                  label="female"
                  value={I18n.t('SignInfo.second.female')}
                />
              </Picker>
            </View>
            <View>
              <TextInput
                style={[localStyles.inputWrap]}
                defaultValue={this.state.gender}
                onChangeText={sex => this.setState({gender})}
              />
            </View>
            <View style={[localStyles.wrap]}>
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
              </View>
              <View>
                <TextInput
                  style={[localStyles.inputWrap]}
                  defaultValue={this.state.birthday}
                  onChangeText={birthday => this.setState({birthday})}
                />
              </View>
              <View style={[localStyles.wrap]}>
                <TextInput
                  style={styles.flex1}
                  defaultValue={this.state.department}
                  onChangeText={department => this.setState({department})}
                />
              </View>
              <View style={[localStyles.wrap]}>
                <TextInput
                  style={[localStyles.inputWrap]}
                  defaultValue={this.state.grade}
                  onChangeText={grade => this.setState({grade})}
                />
              </View>
              <View style={[localStyles.wrap]}>
                <TextInput
                  style={[localStyles.inputWrap]}
                  defaultValue={this.state.signature}
                  onChangeText={signature => this.setState({signature})}
                />
              </View>
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
    fontSize: 15
  },
  inputWrap:{
    paddingTop:4,
    width:'100%',
    height:25,
    // backgroundColor:'#3555b6'

  }
})
