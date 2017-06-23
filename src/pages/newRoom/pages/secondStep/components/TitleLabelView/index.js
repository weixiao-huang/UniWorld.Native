import React, { PropTypes } from 'react'
import I18n from '@/locales'
import InputItem from '@/components/InputItem'
import Label from '@/components/Label'

import {
 MainView,
 TitleText,
 LabelView,
} from './style'

const TitleLabelView = ({ title, labels }) => (
  <MainView>
    <InputItem
      title={I18n.t('NewRoom.input.name.title')}
      titleWidth="75px"
    >
      <TitleText>
        {title}
      </TitleText>
    </InputItem>
    <InputItem
      title={I18n.t('NewRoom.input.label.title')}
      titleWidth="75px"
    >
      <LabelView>
        {labels.map(item => (
          <Label key={item} title={item} />
        ))}
      </LabelView>
    </InputItem>
  </MainView>
)

TitleLabelView.propTypes = {
  title: PropTypes.string.isRequired,
  labels: PropTypes.arrayOf(
    PropTypes.string.isRequired,
  ).isRequired,
}

export default TitleLabelView
