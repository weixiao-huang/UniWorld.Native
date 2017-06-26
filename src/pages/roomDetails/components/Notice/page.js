import React, { Component } from 'react'
import styled from 'styled-components/native'

import NoticeItem from './NoticeItem'
import NoticeModal from './NoticeModal'
import ButtonArea from './ButtonArea'

const MainView = styled.View`
  flex: 1;
`
const MainScrollView = styled.ScrollView`

`

export default class Notice extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showModal: false,
      isHost: this.props.isHost ? this.props.isHost : false,
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
    return (
      <MainView>
        <MainScrollView>
          {this.props.questionnaires.map(item => (
            <NoticeItem key={item.id} item={item} />
          ))}
        </MainScrollView>
        {this.state.showModal ? <NoticeModal cancel={this.cancel} /> :
            (this.state.isHost ? <ButtonArea rightFunc={this.show} /> : null)}
      </MainView>
    )
  }
}
