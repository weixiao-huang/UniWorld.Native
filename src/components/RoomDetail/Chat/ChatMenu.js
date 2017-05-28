import React, { Component } from 'react'
import { StyleSheet, View, ListView, Text, Image, Button } from 'react-native'
import { connect } from 'react-redux'
import I18n from 'react-native-i18n'
import styles from '../../../common/styles'

const Icon={
    notice:'./././assets/icon/trumpet.png',
    quesstionnaires:'./././assets/icon/trumpet.png',
    image:'./././assets/icon/trumpet.png'
}
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
                <MenuItem pressItem={this.pressNotice} icon={Icon.notice} itemText='公告' />
                <MenuItem pressItem={this.pressQuesstionnaires} icon={Icon.quesstionnaires} itemText='问卷' />
                <MenuItem pressItem={this.pressImage} icon={Icon.image} itemText='图片' />
            </View>
        )
    }
}

class MenuItem extends Component {
    render() {
        <Button style={[localStyles.menuItem]} OnPress={this.props.pressItem} title='123'>
            <Image style={[localStyles.itemImage]} source={{uri: this.props.icon}} />
            <Text style={[localStyles.itemText]}>{this.props.itemText}</Text>
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