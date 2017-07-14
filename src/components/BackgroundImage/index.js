/**
 * Created by huangwx on 10/04/2017.
 */
import React from 'react'
import { StyleSheet, Image, ViewPropTypes } from 'react-native'

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover',
  },
})

const BackgroundImage = ({ children, bgUrl, inlineStyle }) => (
  <Image
    source={bgUrl}
    style={[styles.backgroundImage, inlineStyle]}
  >
    {children}
  </Image>
)

BackgroundImage.defaultProps = {
  inlineStyle: {},
}

BackgroundImage.propTypes = {
  inlineStyle: ViewPropTypes.style,
}

export default BackgroundImage
