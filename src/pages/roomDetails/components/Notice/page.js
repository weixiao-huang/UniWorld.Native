import React from 'react'
import styled from 'styled-components/native'

import NoticeItem from './NoticeItem'
import NoticeModal from './NoticeModal'

const MainView = styled.View`
`
const MainScrollView = styled.ScrollView`
`

const Notice = ({ questionnaires }) => {

  return (
    <MainView>
      <MainScrollView>
      {questionnaires.map((item) => (
        <NoticeItem key={item.id} item={item} />
      ))}
        <NoticeModal />
      </MainScrollView>
    </MainView>
  )
}

export default Notice
