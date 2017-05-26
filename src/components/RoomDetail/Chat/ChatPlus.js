import React, { Component } from 'react'
import { StyleSheet, View, ListView, Text, Image } from 'react-native'
import { connect } from 'react-redux'
import I18n from 'react-native-i18n'
import styles from '../../../common/styles'

export default class ChatPlus extends Component {
    render(){
        return(
            <View style={[localStyles.plus]}>
                <Text>+</Text>
            </View>
        )
    }
}