/**
 * Created by huangwx on 26/04/2017.
 */

import React, { Component, PropTypes } from 'react'
import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import styles from '../../../common/styles'
import { GoToUser, FetchUser } from '../../../store/actions'

const mapStateToProps = state => ({
  myId: state.user.userInfo.id
})

@connect(mapStateToProps, dispatch => ({ dispatch }))
export default class ChatItem extends Component {
  constructor(props){
    super(props)
    // this.state = {
    //   timeShow : null
    // }
  }
  static propTypes = {
    sender: PropTypes.object.isRequired,
    content: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired,
  }
  _mine = () => (
    this.props.myId === this.props.sender.id
  )
  user = async () => {
    await this.props.dispatch(FetchUser(this.props.sender.id))
    this.props.dispatch(GoToUser(this.props.sender.id))
  }

  // async componentWillMount(){
  //   if (!global.chatTime) {
  //     global.chatTime = new Date()
  //     console.log(global.chatTime)
  //   }
  //   if (this.props.time) {
  //     console.log(this.props.time)
  //     console.log(global.chatTime)
  //     mesTime = new Date(this.props.time)
  //     if (mesTime - global.chatTime > 600000 || mesTime - global.chatTime < -600000) {
  //       await this.setState({
  //         timeShow: mesTime.toTimeString().split(':').splice(0, 2).join(':')
  //       })
  //       console.log("ttttttttttttttttttttt")
  //       console.log(mesTime.toTimeString().split(':').splice(0, 2).join(':'))
  //       console.log(this.state)
  //       global.chatTime = this.props.time
  //     }
  //   }
  // }

  render() {
    return (
      <View
        style={[
          styles.fullFlexWidth,
          localStyles.container,
          this._mine() ? localStyles.rowReverse : null,
          this.props.index > 0 ? { marginTop: 0 } : null
        ]}
      >
        {/*{this.state.timeShow ? <View style={[localStyles.timeWrap, styles.alignCenter]}>
          <Text style={[localStyles.timeWrapText]}>
            {this.state.timeShow}
          </Text>
        </View> : <View style={[localStyles.timeWrap, styles.alignCenter]}>
          <Text style={[localStyles.timeWrapText]}>
            678
          </Text>
        </View>}*/}

        <View style={[styles.rowFlex, styles.alignCenter, localStyles.sender, this._mine() ? localStyles.rowReverse : null]}>
          <TouchableOpacity onPress={this.user}>
            <Image style={[localStyles.avatar__img]} source={{ uri: this.props.sender.avatar }} />
          </TouchableOpacity>
          <View
            style={[
              localStyles.sender__triangle,
              this._mine() ? { transform: [{ rotate: '90deg' }], borderBottomColor: '#d5d9f0', marginTop: 0, marginRight: 5 } : null]
            }
          >
          </View>
        </View>
        <View style={[styles.fullFlexWidth, this._mine() ? { justifyContent: 'flex-end', marginRight: -3 } : null]}>
          <View style={[localStyles.content]}>
            {this._mine() ? null :
              <Text style={[localStyles.content__title]}>{this.props.sender.name}</Text>
            }
            {this.props.type ? <View style={[localStyles.content__text, this._mine() ? { backgroundColor: '#d5d9f0' } : null]}>
              <Image style={[localStyles.content__image]} source={{ uri: this.props.image }} />
            </View> :
              <View style={[localStyles.content__text, this._mine() ? { backgroundColor: '#d5d9f0' } : null]}>
                <Text>{this.props.content}</Text>
              </View>
            }
          </View>
        </View>

      </View>
    )
  }
}

const labelWidth = 5
const size = 42
const labelBgColor = 'white'
const localStyles = StyleSheet.create({
  rowReverse: {
    flexDirection: 'row-reverse'
  },
  container: {
    alignItems: 'flex-start',
    margin: 20,
  },
  timeWrap: {
    width: 150,
    height: 100,
    backgroundColor:"#ec5367"
  },
  sender: {
  },
  content: {
    alignItems: 'flex-start'
  },
  content__title: {
    fontSize: 12,
    marginBottom: 2
  },
  avatar__img: {
    width: size,
    height: size,
    borderRadius: size / 2
  },
  content__text: {
    marginTop: 4,
    backgroundColor: 'white',
    padding: 8,
    marginLeft: -3,
    borderRadius: 5
  },
  content__image: {
    resizeMode: 'cover',
    width: 160,
    height: 200
  },
  sender__triangle: {
    marginTop: 20,
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: labelWidth,
    borderRightWidth: labelWidth,
    borderBottomWidth: labelWidth,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: labelBgColor,
    transform: [
      { rotate: '-90deg' }
    ]
  }

})
