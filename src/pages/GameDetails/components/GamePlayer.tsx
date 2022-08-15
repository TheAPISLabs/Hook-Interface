import '../index.css'

import React, { useEffect, useState } from 'react'
import styled from 'styled-components/macro'

import { formatNumber } from '../../../hook/untils'
import Player from '../../game/compoment/player'
export default function GamePlayers(props: any) {
  const { game } = props
  const [CoreData, setCoreData] = useState([])
  const [defiData, setDefiData] = useState([])
  const [BackersData, setBackersData] = useState([])
  useEffect(() => {
    setCoreData(game.nfts)
    setDefiData(game.defis)
    setBackersData(game.backers)
  }, [game.backers, game.defis, game.nfts])
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
  const GameName = styled.div`
    color: rgba(255, 255, 255, 1);
    font-size: 32px;
    font-weight: 500;
    text-align: left;
    margin-top: 23px;
  `
  const GameDuse = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 22px;
  `
  const GameNameLeft = styled.div`
    display: flex;
  `
  const GameHeaderImg = styled.img`
    width: 72px;
    height: 72px;
    margin-right: 34px;
    border-radius: 50%;
  `
  const GameDueText = styled.div``
  const BorerBox = styled.div`
    padding: 40px 55px 38px 35px;
    box-sizing: border-box;
    height: 273px;
    border-bottom: 1px solid #e4e4e442;
  `
  const TextDueBox = styled.div`
    display: flex;
  `
  const Gaming = styled.div`
    color: rgba(255, 255, 255, 1);
    font-size: 18px;
    font-weight: 500;
    text-align: left;
    margin-right: 10px;
  `
  const GameingIcon = styled.div`
    width: 26px;
    height: 26px;
    color: #3f8cff;
  `
  const Followers = styled.div`
    color: rgba(255, 255, 255, 1);
    font-size: 18px;
    font-weight: 500;
    text-align: left;
    margin-top: 25px;
    margin-right: 25px;
  `
  const Players = styled.div`
    color: rgba(255, 255, 255, 1);
    font-size: 18px;
    font-weight: 500;
    text-align: left;
    margin-top: 25px;
  `
  const PlayNow = styled.div`
    width: 202px;
    height: 56px;
    border-radius: 16px;
    opacity: 1;
    background: rgba(108, 93, 211, 1);
    color: rgba(255, 255, 255, 1);
    font-size: 14px;
    font-weight: 400;
    text-align: center;
    line-height: 56px;

    margin-top: 12px;
    :hover {
      cursor: pointer;
      opacity: 0.6;
    }
  `
  const CardBox = styled.div`
    padding: 21px 34px;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
  `
  const CoreAsset = styled.div``
  const CoreAssetText = styled.div`
    color: rgba(255, 255, 255, 1);
    font-size: 18px;
    font-weight: 500;
    text-align: left;
  `
  const Core = styled.div`
    width: 408px;
    display: flex;
    justify-content: space-between;
    margin-top: 17px;
  `
  const Asset = styled.div`
    position: relative;
    cursor: pointer;
  `
  const AssetImg = styled.img`
    width: 72px;
    height: 72px;
  `
  const AssetHover = styled.div``
  const BackersBox = styled.div`
    width: 288px;
    display: flex;
    justify-content: space-between;
    margin-top: 23px;
  `
  const Backers = styled.div`
    position: relative;
    cursor: pointer;
  `
  const BackersImg = styled.img`
    width: 48px;
    height: 48px;
    border-radius: 50%;
  `
  const BackersHover = styled.div``
  return (
    <GamePlayersBox>
      <PlayersTitle>Overview</PlayersTitle>
      <GamePlayers>
        <Player src={game.videos[0].url}> </Player>
        <BorerBox>
          <GameType> {game.version}</GameType>
          <GameName> {game.name}</GameName>
          <GameDuse>
            <GameNameLeft>
              <GameHeaderImg src={game.gameUserIcon}></GameHeaderImg>
              <GameDueText>
                <TextDueBox>
                  <Gaming>{game.gameStudio}</Gaming>
                  <GameingIcon className="iconfont">&#xe882;</GameingIcon>
                </TextDueBox>
                <TextDueBox>
                  <Followers>{formatNumber(game.twitterFollower)}followers</Followers>
                  <Players>{formatNumber(game.top[0].activeUsers)}players</Players>
                </TextDueBox>
              </GameDueText>
            </GameNameLeft>
            <PlayNow
              onClick={() => {
                window.open(game.gameUrl)
              }}
            >
              Play Now!
            </PlayNow>
          </GameDuse>
        </BorerBox>
        <CardBox>
          <CoreAsset>
            <CoreAssetText>Core Asset</CoreAssetText>
            <Core>
              {CoreData.map((item: any, index: any) => {
                return (
                  <Asset key={index} className="CoreNftImg">
                    <AssetImg src={item.imgUrl} />
                    <AssetHover className="CoreNftHover">{item.introductionCurrency}</AssetHover>
                  </Asset>
                )
              })}
              {defiData.map((item: any, index: any) => {
                return (
                  <Asset key={index} className="CoreNftImg">
                    <AssetImg src={item.imgUrl} />
                    <AssetHover className="CoreNftHover">{item.introductionCurrency}</AssetHover>
                  </Asset>
                )
              })}
            </Core>
          </CoreAsset>
          <CoreAsset>
            <CoreAssetText>Backers</CoreAssetText>
            <BackersBox>
              {/* {BackersData.map((item: any, index: any) => {
                return (
                  <Backers key={index} className="defiItem">
                    <BackersImg src={item.backericon} />
                    <BackersHover className="CoreNftHover">{item.introductionCurrency}</BackersHover>
                  </Backers>
                )
              })} */}
            </BackersBox>
          </CoreAsset>
        </CardBox>
      </GamePlayers>
    </GamePlayersBox>
  )
}
