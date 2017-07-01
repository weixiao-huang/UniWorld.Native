import React from 'react'
import styled from 'styled-components/native'
import { transferTimeFormatInside } from '@/utils'

const MainView = styled.View`
  align-items: center;
  padding:15px;
  flex-direction: row;
  background-color: white;
`

const LeftView = styled.View`
  border-width: 1px;
  margin-right: 10px;
  border-radius: 50px;
  border-color: #ff5757;
  width:50px;
  height:50px;
  justify-content: center;
  align-items: center;
`

const LeftText = styled.Text`
  font-size: 18px;
  color: #5053ca;
`
const RightView = styled.View`
`

const RightText = styled.Text`
  font-size: 18px;
  padding: 2px;
  color: #ff5757;
`


const Time = ({ start, end }) => {
  const showTime = transferTimeFormatInside([start, end])
  return (
    <MainView>
      <LeftView>
        <LeftText>短期</LeftText>
      </LeftView>
      <RightView>
        <RightText>{showTime}</RightText>
      </RightView>
    </MainView>
  )
}

export default Time
