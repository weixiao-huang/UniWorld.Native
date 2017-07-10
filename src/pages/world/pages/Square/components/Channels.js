import React, { Component } from 'react'
import styled from 'styled-components/native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {
  NavigateToChannelPage,
} from '@/router/actions'

const MainView = styled.View`
  flexDirection: row;
  paddingTop: 15px;
  justifyContent: space-around;
  paddingBottom: 10px;
  borderBottomColor: #E7E7EB;
  borderBottomWidth: 1px;
`
const ChannelItem = styled.TouchableOpacity`
  flexDirection: column;
  alignItems: center;
  width: 90px;
`
const ChannelIcon = styled.Image`
  width: 49px;
  height: 49px;
  borderRadius: 24.5px;
`
const ChannelText = styled.Text`
  fontSize: 13px;
  paddingTop: 9px;
`

const mapDispatchToProps = dispatch => ({
  navigateToChannelPageAction: bindActionCreators(NavigateToChannelPage, dispatch),
})

@connect(() => ({}), mapDispatchToProps)
export default class Channels extends Component {

  naviToChannelPage = (id) => () => {
    console.log('navigate to ChannelPage')
    this.props.navigateToChannelPageAction(id)
  }

  render() {
    return (
      <MainView>
        {this.props.channels && this.props.channels.map((channel) => (
          <ChannelItem key={channel.id} onPress={this.naviToChannelPage(channel.id)}>
            <ChannelIcon source={{ url: channel.icon }} />
            <ChannelText>{channel.title}</ChannelText>
          </ChannelItem>)
        )}
      </MainView>
    )
  }
}
