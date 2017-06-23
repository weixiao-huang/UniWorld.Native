import React, { Component } from 'react'
import I18n from '@/locales'

import coverImg from '@/img/customCreate.png'

import {
  MainScrollView,
  MainView,
  CoverImage,
} from './style'


export default class ThirdStep extends Component {
  render() {
    return (
      <MainScrollView>
        <MainView>
          <CoverImage source={coverImg} />
        </MainView>
      </MainScrollView>
    )
  }
}
