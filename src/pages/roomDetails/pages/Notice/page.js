import React, { Component } from 'react'
import EmptyView from '@/components/EmptyView'
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
          <EmptyView style={{ height: 80 }} />
        </MainScrollView>
        {this.state.showModal ?
          <NoticeModal
            cancel={this.cancel}
            token={this.props.token}
            roomId={this.props.roomId}
            action={this.props.SendAnnouncementAction}
          /> :
          (isHost && <ButtonArea rightFunc={this.show} />)
        }
      </MainView>
    )
  }
}
