import './index.css'

import { Nav } from '@douyinfe/semi-ui'
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'

import Logo from '../../assets/images/logo/HookLogo.png'
import Logos from '../../assets/images/logo/HookLogoText.png'
import { isMobile } from '../../pages/GameDetails/components/until.js'
import PassCard from './component/PassCard'

export default function NavigationBar() {
  const [isClolapse, setIsClolapse] = useState(false)
  const handleCollapse = (e: boolean) => {
    setIsClolapse(e)
  }
  useEffect(() => {
    if (isMobile()) {
      setIsClolapse(true)
    }
  }, [])
  const history = useHistory()
  return (
    <div style={{ minHeight: '100vh', height: '100%' }}>
      {isMobile() ? (
        <Nav
          className="NavBar"
          bodyStyle={{ height: 720 }}
          defaultOpenKeys={['user', 'union']}
          onSelect={(data) => console.log('trigger onSelect: ', data)}
          onClick={(data) => console.log('trigger onClick: ', data)}
          onCollapseChange={handleCollapse}
          defaultIsCollapsed={true}
        >
          <Nav.Header logo={isClolapse ? <img src={Logo} /> : <img src={Logos} />} />
          <Nav.Item
            indent={false}
            itemKey={'union'}
            text={'Games'}
            icon={<div className="iconfont">&#xe606;</div>}
            onClick={() => {
              history.push({ pathname: '/layout/game' })
            }}
          />
          {/* <Nav.Item itemKey={'user'} text={'WalletScan'} icon={<div className="iconfont">&#xe618;</div>} />{' '} */}
          <Nav.Item
            itemKey={'union-management'}
            text={'MarketData'}
            icon={<div className="HouseIcon iconfont">&#xe615;</div>}
            onClick={() => {
              history.push({ pathname: '/layout/marketdata' })
            }}
          />{' '}
          <Nav.Item
            itemKey={'unions'}
            text={'Trending'}
            icon={<div className="iconfont">&#xe605;</div>}
            onClick={() => {
              history.push({ pathname: '/layout/portfolioTrack' })
            }}
          />
          <div className={isClolapse ? 'PassCardHid' : 'PassCardShow'}>
            <PassCard />
          </div>
          <Nav.Footer
            collapseButton={true}
            collapseText={() => {
              return <></>
            }}
          />
        </Nav>
      ) : (
        <Nav
          className="NavBar"
          bodyStyle={{ height: 720 }}
          defaultOpenKeys={['user', 'union']}
          onSelect={(data) => console.log('trigger onSelect: ', data)}
          onClick={(data) => console.log('trigger onClick: ', data)}
          onCollapseChange={handleCollapse}
        >
          <Nav.Header logo={isClolapse ? <img src={Logo} /> : <img src={Logos} />} />
          <Nav.Item
            indent={false}
            itemKey={'union'}
            text={'Games'}
            icon={<div className="iconfont">&#xe606;</div>}
            onClick={() => {
              history.push({ pathname: '/layout/game' })
            }}
          />
          {/* <Nav.Item itemKey={'user'} text={'WalletScan'} icon={<div className="iconfont">&#xe618;</div>} />{' '} */}
          <Nav.Item
            itemKey={'union-management'}
            text={'MarketData'}
            icon={<div className="iconfont HouseIcon">&#xe615;</div>}
            onClick={() => {
              history.push({ pathname: '/layout/marketdata' })
            }}
          />{' '}
          <Nav.Item
            itemKey={'unions'}
            text={'Trending'}
            icon={<div className="iconfont">&#xe605;</div>}
            onClick={() => {
              history.push({ pathname: '/layout/portfolioTrack' })
            }}
          />
          <div className={isClolapse ? 'PassCardHid' : 'PassCardShow'}>
            <PassCard />
          </div>
          <Nav.Footer
            collapseButton={true}
            collapseText={() => {
              return 'Expand the sidebar'
            }}
          />
        </Nav>
      )}
    </div>
  )
}
