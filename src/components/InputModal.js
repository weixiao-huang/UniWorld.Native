import React, { Component, PropTypes } from 'react'
import { StyleSheet, View, ScrollView, Text, TouchableOpacity, TextInput, Image, Button } from 'react-native'
import I18n from 'react-native-i18n'
import styles from '../common/styles'
import InputItem from './InputItem'


export default class InputModal extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      content: ''
    }
  }
  render(){
    return(
      <View style={[styles.flex1, localStyles.modal]}>
        <View style={localStyles.header}>
        <Text style={[localStyles.headerText,{color: '#332f5e'}]}>{this.props.title}</Text>
        <TouchableOpacity onPress={this.props.cancel}>
          <Text style={[localStyles.headerText,{color: '#bcbcbc'}]}>{I18n.t('cancel')}</Text>
          </TouchableOpacity>
        </View>
        <View style={localStyles.inputArea}>
          <Text style={[localStyles.headerText,{color: '#332f5e'}]}>{this.props.name}</Text>
          <TextInput
            onChangeText={title=> this.setState({ title })}
            // multiline={true}
            autoFocus={true}
            blurOnSubmit={false}
            value={this.state.title}
            placeholder='hello'
            style={[{height:40},localStyles.input]}
            //onFocus={() => { _listView.scrollTo({ y: 0, animated: true }) }}
          />
          <Text style={[localStyles.headerText,{color: '#332f5e'}]}>{this.props.content}</Text>
          <TextInput
            onChangeText={content=> this.setState({ content })}
            multiline={true}
            autoFocus={true}
            blurOnSubmit={false}
            value={this.state.content}
            style={[{height: 160},localStyles.input]}
            // onFocus={() => { _listView.scrollTo({ y: 0, animated: true }) }}
          />
        </View>
        <Button onPress={this.props.sendFunction} title={this.props.sendTitle}/>
      </View>
    )
  }
}

const localStyles = StyleSheet.create({
  modal:{
    position:'absolute',
    bottom:0,
    width: '100%'
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
  }

})
