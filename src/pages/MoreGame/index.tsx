import './index.css'

import { Col, Row } from '@douyinfe/semi-ui'
import React from 'react'
import styled from 'styled-components/macro'

import SandBox from './components/SandBox'
import Shuffling from './components/Shuffling'
export default function MoreGame() {
  const MoreGameBox = styled.div`
    width: 100%;
  `
  return (
    <MoreGameBox>
      <Row gutter={{ xs: 24, sm: 24, md: 24, lg: 24, xl: 24, xxl: 24 }}>
        <Col xs={24} sm={24} md={24} lg={24} xl={24}>
          <Shuffling />
        </Col>
        <Col xs={24} sm={24} md={24} lg={24} xl={24}>
          <SandBox />
        </Col>
      </Row>
    </MoreGameBox>
  )
}
