import './index.css'

import { Col, Row } from '@douyinfe/semi-ui'

// import { useHistory } from 'react-router-dom'
import Player from './components/GamePlayer'
import ReactToEarn from './components/ReactToEarn'
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
    <div className="grid">
      <Row gutter={{ xs: 24, sm: 24, md: 24, lg: 24, xl: 24, xxl: 24 }}>
        <Col xs={15} sm={15} md={15} lg={15} xl={15}>
          <Player game={game} />
        </Col>
        <Col xs={9} sm={9} md={9} lg={9} xl={9}>
          <ReactToEarn gpId={game.top[0].gpId} />
        </Col>
      </Row>
      <Row gutter={{ xs: 24, sm: 24, md: 24, lg: 24, xl: 24, xxl: 24 }}>
        <Col xs={16} sm={16} md={16} lg={16} xl={16}></Col>
        <Col xs={8} sm={8} md={8} lg={8} xl={8}></Col>
      </Row>
    </div>
    //   </Skeleton>
  )
}
