import React, { Component, PropTypes } from 'react'
import { StyleSheet, View, Text, Image, TouchableOpacity, TextInput, Button, Modal } from 'react-native'
import styles from '../../../common/styles'
import I18n from 'react-native-i18n'
import InputModal from '../../InputModal'
import { connect } from 'react-redux'

import { SendAnnouncement } from '../../../store/actions'


const mapStateToProps = state => ({
  roomId: state.room.roomInfo.id
})

@connect(mapStateToProps, dispatch => ({ dispatch }))
export default class NoticeModal extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      description: '',
      is_announcement: true,
    }
  }
  _pressNotice(){
    this.setState({
      is_announcement: true,
    })
  }
  _pressQuestionnaires(){
    this.setState({
      is_announcement: false,
    })
  }
  async _submit(){
    console.log(this.state)
    if (this.state.title && this.state.description) {
      await this.props.dispatch(SendAnnouncement(this.state)(this.props.roomId))
      console.log(this.state)
      this.setState({
        title: '',
        description: ''
      })
      this.props.cancel()
    }
  }
  render(){
    return(
    <Modal transparent={true} visible={true}>
      <View style={localStyles.upperBg}/>
      <View style={[styles.flex1, localStyles.menu]}>
        {this.state.is_announcement?
        <View style={localStyles.header}>
          <View style={{flexDirection:'row',alignItems:'center'}}>
            <Image source={require('../../../assets/icon/trumpet.png')} style={localStyles.titleIcon}/>
            <Text style={[localStyles.headerText,{color: '#332f5e'}]}>{I18n.t('Room.Notice.notice')}</Text>
          </View>
          <TouchableOpacity onPress={this.props.cancel.bind(this)}>
            <Text style={[localStyles.headerText,{color: '#bcbcbc'}]}>{I18n.t('cancel')}</Text>
          </TouchableOpacity>
        </View>:
        <View style={localStyles.header}>
          <View style={{flexDirection:'row',alignItems:'center'}}>
            <Image source={require('../../../assets/icon/fill.png')} style={localStyles.titleIcon}/>
            <Text style={[localStyles.headerText,{color: '#332f5e'}]}>{I18n.t('Room.Notice.questionnaires')}</Text>
          </View>
          <TouchableOpacity onPress={this.props.cancel}>
            <Text style={[localStyles.headerText,{color: '#bcbcbc'}]}>{I18n.t('cancel')}</Text>
          </TouchableOpacity>
        </View>
        }
        <View style={localStyles.inputArea}>
          <Text style={[localStyles.headerText,{color: '#332f5e'}]}>{I18n.t('title')}</Text>
          <TextInput
            onChangeText={title=> this.setState({ title })}
            // multiline={true}
            autoFocus={true}
            blurOnSubmit={false}
            value={this.state.title}
            placeholder={I18n.t('Room.Notice.notice')}
            style={[{height:40},localStyles.input]}
            //onFocus={() => { _listView.scrollTo({ y: 0, animated: true }) }}
          />
          <Text style={[localStyles.headerText,{color: '#332f5e'}]}>{I18n.t('Room.Notice.content')}</Text>
          <TextInput
            onChangeText={description=> this.setState({ description })}
            multiline={true}
            autoFocus={false}
            blurOnSubmit={false}
            value={this.state.description}
            style={[{height: 160},localStyles.input]}
            placeholder={I18n.t('Room.Notice.defaultText1')}
            // onFocus={() => { _listView.scrollTo({ y: 0, animated: true }) }}
          />
        </View>
        <View style={[localStyles.btnWrap]}>
          {this.state.is_announcement?
          <TouchableOpacity style={[styles.flex1,localStyles.selectItem,{backgroundColor:'white'}]} >
            <Image source={require('../../../assets/icon/trumP.png')} style={localStyles.icon}/>
          </TouchableOpacity>:
          <TouchableOpacity style={[styles.flex1,localStyles.selectItem,{backgroundColor:'#ec5367'}]} onPress={this._pressNotice.bind(this)}>
            <Image source={require('../../../assets/icon/trumW.png')} style={localStyles.icon}/>
          </TouchableOpacity>
          }
          {!this.state.is_announcement?
          <TouchableOpacity style={[styles.flex1,localStyles.selectItem,{backgroundColor:'white'}]}>
            <Image source={require('../../../assets/icon/fillP.png')} style={localStyles.icon}/>
          </TouchableOpacity>:
          <TouchableOpacity style={[styles.flex1,localStyles.selectItem,{backgroundColor:'#ec5367'}]} onPress={this._pressQuestionnaires.bind(this)}>
            <Image source={require('../../../assets/icon/fillW.png')} style={localStyles.icon}/>
          </TouchableOpacity>
          }
        <TouchableOpacity style={[styles.flex1,localStyles.selectItem,{backgroundColor:'#fdae57'}]} onPress={this._submit.bind(this)}>
          <Text style={localStyles.submitText}>{I18n.t('submit')}</Text>
        </TouchableOpacity>
        </View>
      </View>
    </Modal>
    )
  }
}

const localStyles = StyleSheet.create({
  upperBg:{
    backgroundColor:'#333333',
    width:"100%",
    height:'56%',
    opacity:0.5
  },
  menu:{
    position:'absolute',
    bottom:0,
    width: '100%',
    // height:'45%'
  },
  input:{
    fontSize: 16,
    // height:40,
    width:'100%'
  },
  header:{
    justifyContent:'space-between',
    flexDirection:'row',
    backgroundColor: "#eee",
    height:43,
    padding:10,

  },
  titleIcon:{
    width: 16,
    height: 16,
    resizeMode: 'cover',
    marginRight: 10
  },
  headerText:{
    //lineHeight: 43,
    fontSize: 16,
    fontWeight: '600'
  },
  cancel:{
    //position:'absolute',
    //right:0,
  },
  inputArea:{
    backgroundColor:'white',
    paddingLeft:10,
    height:200
  },
  btnWrap:{
    flexDirection:'row',
    // backgroundColor:'#ec5367',
    height: 50
  },
  selectItem:{
    alignItems:'center',
    justifyContent:'center'
  },
  icon:{
    width: 16,
    height: 16,
    resizeMode: 'cover',
  },
  submitText:{
    color: 'white'
  }
})

