import './index.css'

import { Col, Row } from '@douyinfe/semi-ui'

import Player from './components/player'
// import React, { useEffect, useState } from 'react'
export default function MarketData() {
  return (
    //     <Skeleton placeholder={placeholder} loading={false} active>
    <div className="grid">
      <Row gutter={{ xs: 24, sm: 24, md: 24, lg: 24, xl: 24, xxl: 24 }}>
        <Col xs={16} sm={16} md={16} lg={16} xl={16}>
          <Player />
        </Col>
        <Col xs={8} sm={8} md={8} lg={8} xl={8}>
          {/* <Trending /> */}
        </Col>
      </Row>
    </div>
    //   </Skeleton>
  )
}
