/* eslint-disable react/prop-types */
import { isMobile } from 'pages/GameDetails/components/until'
import React from 'react'
import { useHistory } from 'react-router-dom'

import Players from '../../game/compoment/player'
// eslint-disable-next-line prettier/prettier
export default function SwiperItem ({ src, gameStudio, gameUserIcon, genres, name, game }) {
  const GameData = {
    copyright: 'Game Studio',
    generes: 'Game generes ',
  }
  const history = useHistory()
  return (
    <div
      style={{
        backgroundColor: 'rgba(17,28,68,1)',
        borderRadius: '23px',
        paddingBottom: '32px',
        width: '100%',
        height: '720px',
      }}
    >
      <div style={{ borderRadius: '22px', overflow: 'hidden', height: isMobile() ? '349px' : '26vw' }}>
        <Players borderRadius="32px" divht={{ sm: '140vw', md: '26vw' }} ht="100%" wd="100%" src={src}></Players>
      </div>
      <div
        style={{
          position: 'relative',
          bottom: '1px',
          padding: 0,
        }}
      >
        <div
          style={{
            fontSize: '2vw',
            textAlign: 'left',
            fontWeight: 500,
            color: '#fff',
            marginTop: '2.6vw',
            padding: '0 1vw',
            lineHeight: '1.2vw',
            alignItems: 'center',
          }}
          className="font-Inter-SemiBold"
        >
          {name}
        </div>

        <div
          style={{
            marginTop: '1.3vw',
            padding: '0 1vw',
            alignItems: 'center',
            display: 'flex',
          }}
        >
          <img
            style={{
              borderRadius: '50%',
              width: '1.1vw',
              height: '1.1vw',
              marginRight: '0,4vw',
            }}
            src={gameUserIcon}
            alt=""
          />
          <span
            style={{
              fontWeight: '400',
              fontSize: '0.6vw',
              lineHeight: '1.1vw',
              color: ' #B2B3BD',
            }}
          >
            <span style={{ marginRight: 0 }}>{gameStudio}®</span>
            <span style={{ color: '#fff', margin: '0 6px', fontSize: '16px' }}>·</span>
            {genres}
          </span>
        </div>
        <div
          style={{
            variant: 'brand',
            width: '82.9vw',
            backgroundColor: '#6c5DD3',
            height: '14.7vw',
            // height: '54px',
            fontWeight: 500,
            fontSize: '3.72vw',
            borderRadius: '16px',
            // marginTop: '6.4vw',
            display: 'none',
          }}
          onClick={() => {
            localStorage.setItem('game', JSON.stringify(game))
            history.push({
              pathname: '/admin/profile/gameDetail',
            })
          }}
          _hover={{
            bgColor: 'rgba(108,93,211 ,0.6)',
          }}
        >
          View
        </div>
      </div>
    </div>
  )
}
