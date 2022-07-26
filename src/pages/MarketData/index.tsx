/* eslint-disable react/jsx-key */
import './index.css'

import { Col, Row } from '@douyinfe/semi-ui'
import React from 'react'

import DeFi from './components/DeFi'
import DeFiTrending from './components/DeFiTrending'
import NFTTrending from './components/NFTTrending'
import Tabss from './components/Tabs'
import Trending from './components/TrendingAddresses'
export default function MarketData() {
  return (
    <>
      {' '}
      <div className="grid">
        <Row className="Tabss">
          <Tabss />
        </Row>
        <Row gutter={{ xs: 24, sm: 24, md: 24, lg: 24, xl: 24, xxl: 24 }}>
          <Col xs={16} sm={16} md={16} lg={16} xl={16}>
            <DeFi />
          </Col>
          <Col xs={8} sm={8} md={8} lg={8} xl={8} className="Trending">
            <Trending />
          </Col>
        </Row>
        <Row gutter={{ xs: 24, sm: 24, md: 24, lg: 24, xl: 24, xxl: 24 }} className="mt">
          <Col xs={12} sm={12} md={12} lg={12} xl={12}>
            <DeFiTrending />
          </Col>
          <Col xs={12} sm={12} md={12} lg={12} xl={12}>
            <NFTTrending />
          </Col>
        </Row>
      </div>
    </>
  )
}
