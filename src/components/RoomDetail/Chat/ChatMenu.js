import React, { Component } from 'react'
import { StyleSheet, View, ListView, Text, Image, Button } from 'react-native'
import { connect } from 'react-redux'
import I18n from 'react-native-i18n'
import styles from '../../../common/styles'

export default class ChatMenu extends Component {
    pressNotice(){

    }

     pressQuesstionnaires(){
        
    }

     pressImage(){
        
    }
    render() {
        return (
            <View style={[localStyles.menu]}>
                <MenuItem pressItem={pressNotice} icon='https://api.theuniworld.net/static/icon/trumpet.png' itemText='公告' />
                <MenuItem pressItem={pressQuesstionnaires} icon='https://api.theuniworld.net/static/icon/trumpet.png' itemText='问卷' />
                <MenuItem pressItem={pressImage} icon='https://api.theuniworld.net/static/icon/trumpet.png' itemText='图片' />
            </View>
        )
    }
}

class MenuItem extends Component {
    render() {
        <Button style={[localStyles.menuItem]} OnPress={this.props.pressItem} title=''>
            <Image style={[localStyles.itemImage]} source={require(this.props.icon)} />
            <Text style={[localStyles.itemText]}>{this.prop.itemText}</Text>
        </Button>
    }
}

const localStyles = StyleSheet.create({
    menu:{
        position: 'absolute',
        bottom:0,
    },
    menuItem:{
        flexDirection: 'column', 
    },
    itemImage:{
        resizeMode: 'cover',
        width: '20%',
        height: '10%',
    },
    itemText:{
        fontSize: 16,
    }
})