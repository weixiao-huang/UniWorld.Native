import React, { PropTypes } from 'react'

import {
  MainScrollView,
} from './style'

import ThumbUps from './ThumbUps'
import ThumbDowns from './ThumbDowns'

const Reputation = ({ thumbUps, thumbDowns }) => (
  <MainScrollView>
    <ThumbUps thumbUps={thumbUps} />
    <ThumbDowns thumbDowns={thumbDowns} />
  </MainScrollView>
)

Reputation.propTypes = {
  thumbUps: PropTypes.number.isRequired,
  thumbDowns: PropTypes.number.isRequired,
}

export default Reputation
