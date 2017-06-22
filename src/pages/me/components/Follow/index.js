import React, { PropTypes } from 'react'

import {
  MainView,
  MainTitleText,
  MainContentView,
} from './style'

const Follow = ({ follows }) => (
  <MainView>
    <MainTitleText>Follow</MainTitleText>
    <MainContentView>
    </MainContentView>
  </MainView>
)

Follow.propTypes = {
  follows: PropTypes.array.isRequired,
}

export default Follow
