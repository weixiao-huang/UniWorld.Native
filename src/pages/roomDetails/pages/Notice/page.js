import React, { Component } from 'react'

import {
  MainView,
  MainScrollView,
} from './style'

import NoticeItem from './components/NoticeItem'
import NoticeModal from './components/NoticeModal'
import ButtonArea from './components/ButtonArea'

export default class Notice extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showModal: false,
    }
  }

  cancel = () => {
    this.setState({
      showModal: false,
    })
    console.log(this.state.showModal)
  }

  show = () => {
    this.setState({
      showModal: true,
    })
  }

  render() {
    const { isHost } = this.props
    return (
      <MainView>
        <MainScrollView>
          {this.props.questionnaires.map(item => (
            <NoticeItem key={item.id} item={item} />
          ))}
        </MainScrollView>
        {this.state.showModal ?
          <NoticeModal cancel={this.cancel} /> :
          (isHost && <ButtonArea rightFunc={this.show} />)
        }
        <ButtonArea rightFunc={this.show} />
      </MainView>
    )
  }
}
