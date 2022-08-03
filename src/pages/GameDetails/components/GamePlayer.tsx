import '../index.css'

import React from 'react'
import styled from 'styled-components/macro'

import Player from '../../game/compoment/player'
export default function GamePlayers(props: any) {
  const { game } = props
  const GamePlayersBox = styled.div`
    height: 996px;
  `
  const PlayersTitle = styled.div`
    color: rgba(255, 255, 255, 1);
    font-size: 24px;
    font-weight: 500;
    text-align: left;
  `
  const GamePlayers = styled.div`
    margin-top: 28px;
    height: 936px;
    border-radius: 32px;
    background: rgba(17, 28, 68, 1);
  `
  const GameType = styled.div`
    width: 92px;
    height: 26px;
    border-radius: 8px;
    background: rgba(127, 186, 122, 1);
    color: rgba(255, 255, 255, 1);
    font-size: 13px;
    font-weight: 400;
    text-align: center;
    line-height: 26px;
  `
  return (
    <GamePlayersBox>
      <PlayersTitle>Overview</PlayersTitle>
      <GamePlayers>
        <Player src={game.videos[0].url}> </Player>
        <GameType>Premium</GameType>
      </GamePlayers>
    </GamePlayersBox>
  )
}
