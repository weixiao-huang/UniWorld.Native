import React, { Component } from 'react'
import PropTypes from 'prop-types'
import I18n from '@/locales'
import { TouchableOpacity } from 'react-native'
import Avatar from '@/components/Avatar'
import EmptyView from '@/components/EmptyView'
import {
  MainScrollView,
  MainTitleText,
  MainContentView,
  AvatarWrapView,
  AvatarView,
  AvatarText,
} from './style'

const length = 7

export default class Follow extends Component {

  constructor(props) {
    super(props)
    this.state = {
      show: false,
    }
  }
  render() {
    const { follows, blocks } = this.props
    return (
      <MainScrollView>
        <MainTitleText>{I18n.t('Me.follow.title')}</MainTitleText>
        <MainContentView>
          {follows.map(item => (
            <AvatarWrapView key={item.id}>
              <AvatarView>
                <Avatar id={item.id} avatar={item.avatar} size={68} />
              </AvatarView>
              <AvatarText>{
                item.name.length > length ?
                  `${item.name.slice(0, length)}...` :
                  item.name
              }</AvatarText>
            </AvatarWrapView>
          ))}
        </MainContentView>
        <EmptyView height={10} />
        <TouchableOpacity onPress={() => this.setState({ show: !this.state.show })}>
          <MainTitleText>{I18n.t('Me.follow.blocks')}</MainTitleText>
        </TouchableOpacity>
        {this.state.show && <MainContentView>
          {blocks.map(item => (
            <AvatarWrapView key={item.id}>
              <AvatarView>
                <Avatar id={item.id} avatar={item.avatar} size={68} />
              </AvatarView>
              <AvatarText>{
                item.name.length > length ?
                  `${item.name.slice(0, length)}...` :
                  item.name
              }</AvatarText>
            </AvatarWrapView>
          ))}
        </MainContentView>}
      </MainScrollView>
    )
  }
}

// Follow.propTypes = {
//   follows: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//       name: PropTypes.string.isRequired,
//       avatar: PropTypes.string.isRequired,
//     }),
//   ).isRequired,
// }

