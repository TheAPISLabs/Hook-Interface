import './index.css'

import { Col, Row } from '@douyinfe/semi-ui'

import { isMobile } from '../GameDetails/components/until.js'
import BuyAxie from './components/BuyAxie'
import Earn from './components/Earn.js'
// import { useHistory } from 'react-router-dom'
import Player from './components/GamePlayer'
import ReactToEarn from './components/ReactToEarn.js'
import Votes from './components/votes'
// import TrendingGames from './components/TrendingGames'
// import Twitter from './components/Twitter'
// import React, { useEffect, useState } from 'react'
export default function AllGame() {
  const game = JSON.parse(localStorage.getItem('game') || '{}')
  // const history = useHistory()
  // if (!game) {
  //   history.push({
  //     pathname: '/admin/game',
  //   })
  //   return null
  // }
  return (
    //     <Skeleton placeholder={placeholder} loading={false} active>
    <>
      {isMobile() ? (
        <div className="grid">
          <Row gutter={{ xs: 24, sm: 24, md: 24, lg: 24, xl: 24, xxl: 24 }}>
            <Col xs={24} sm={24} md={24} lg={24} xl={24}>
              <Player game={game} />
            </Col>
          </Row>
          <Row gutter={{ xs: 24, sm: 24, md: 24, lg: 24, xl: 24, xxl: 24 }}>
            <Col xs={24} sm={24} md={24} lg={24} xl={24}>
              <ReactToEarn gpId={game.top[0].gpId} />
            </Col>
          </Row>
          <Row gutter={{ xs: 24, sm: 24, md: 24, lg: 24, xl: 24, xxl: 24 }}>
            <Col xs={24} sm={24} md={24} lg={24} xl={24}>
              <Votes game={game} />
              <Earn></Earn>
            </Col>
          </Row>
          <Row gutter={{ xs: 24, sm: 24, md: 24, lg: 24, xl: 24, xxl: 24 }}>
            <Col xs={24} sm={24} md={24} lg={24} xl={24}>
              <BuyAxie address={game.top[0].tokenHash}></BuyAxie>
            </Col>
          </Row>
        </div>
      ) : (
        <div className="grid">
          <Row gutter={{ xs: 24, sm: 24, md: 24, lg: 24, xl: 24, xxl: 24 }}>
            <Col xs={16} sm={16} md={16} lg={16} xl={16}>
              <Player game={game} />
            </Col>
            <Col xs={8} sm={8} md={8} lg={8} xl={8}>
              <ReactToEarn gpId={game.top[0].gpId} />
            </Col>
          </Row>
          <Row gutter={{ xs: 24, sm: 24, md: 24, lg: 24, xl: 24, xxl: 24 }}>
            <Col xs={16} sm={16} md={16} lg={16} xl={16}>
              <Votes game={game} />
              <Earn></Earn>
            </Col>
            <Col xs={8} sm={8} md={8} lg={8} xl={8}>
              <BuyAxie address={game.top[0].tokenHash}></BuyAxie>
            </Col>
          </Row>
        </div>
      )}
    </>

    //   </Skeleton>
  )
}
