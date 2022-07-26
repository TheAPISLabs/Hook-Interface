import './index.css'

import { Nav } from '@douyinfe/semi-ui'
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

import Logo from '../../assets/images/logo/HookLogo.png'
import Logos from '../../assets/images/logo/HookLogoText.png'

export default function NavigationBar() {
  const [isClolapse, setIsClolapse] = useState(false)
  const handleCollapse = (e: boolean) => {
    setIsClolapse(e)
  }
  const history = useHistory()
  return (
    <Nav
      className="NavBar"
      bodyStyle={{ height: 320 }}
      defaultOpenKeys={['user', 'union']}
      onSelect={(data) => console.log('trigger onSelect: ', data)}
      onClick={(data) => console.log('trigger onClick: ', data)}
      onCollapseChange={handleCollapse}
    >
      <Nav.Header logo={isClolapse ? <img src={Logo} /> : <img src={Logos} />} />
      <Nav.Item indent={false} itemKey={'union'} text={'Games'} icon={<div className="iconfont">&#xe606;</div>} />
      <Nav.Item itemKey={'user'} text={'WalletScan'} icon={<div className="iconfont">&#xe618;</div>} />{' '}
      <Nav.Item
        itemKey={'union-management'}
        text={'MarketData'}
        icon={<div className="iconfont">&#xe615;</div>}
        onClick={() => {
          history.push({ pathname: '/marketdata' })
        }}
      />{' '}
      <Nav.Item itemKey={'unions'} text={'Trending'} icon={<div className="iconfont">&#xe605;</div>} />
      <Nav.Footer
        collapseButton={true}
        collapseText={() => {
          return 'Expand the sidebar'
        }}
      />
    </Nav>
  )
}
