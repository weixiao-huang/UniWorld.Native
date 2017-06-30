import React, { Component } from 'react'
import Animation from 'lottie-react-native'
import loading from '@/animations/loading.json'

import {
  MainView,
  AnimationView,
} from './style'

export default class AnimatedScreen extends Component {
  componentDidMount() {
    if (this.animation) this.animation.play();
  }

  render() {
    return (
      <MainView>
        <AnimationView>
          <Animation
            ref={(animation) => { this.animation = animation }}
            style={{ width: '100%', height: 150 }}
            source={loading}
            loop
          />
        </AnimationView>
      </MainView>
    )
  }
}
