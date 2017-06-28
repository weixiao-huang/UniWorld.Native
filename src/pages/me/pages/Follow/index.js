import React, { PropTypes } from 'react'
import I18n from '@/locales'

import Avatar from '@/components/Avatar'

import {
  MainScrollView,
  MainTitleText,
  MainContentView,
  AvatarWrapView,
  AvatarView,
  AvatarText,
} from './style'

const length = 7

const Follow = ({ follows }) => (
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
  </MainScrollView>
)

Follow.propTypes = {
  follows: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
    }),
  ).isRequired,
}

export default Follow
