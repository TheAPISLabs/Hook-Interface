import '../index.css'

import { IconTickCircle } from '@douyinfe/semi-icons'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components/macro'

import { formatNumber } from '../../../hook/untils'
import Player from '../../game/compoment/player'
import { isMobile } from '../../GameDetails/components/until.js'
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
    @media screen and (max-width: 1440px) {
      height: 740px;
    }
  `
  const MobileGamePlayersBox = styled.div`
    height: 1013px;
  `
  const PlayersTitle = styled.div`
    color: rgba(255, 255, 255, 1);
    font-size: 24px;
    font-weight: 500;
    text-align: left;
    @media screen and (max-width: 1440px) {
      color: rgba(255, 255, 255, 1);
      font-size: 18px;
      font-weight: 500;
      text-align: left;
    }
  `
  const MobilePlayersTitle = styled.div`
    color: rgba(255, 255, 255, 1);
    font-size: 32px;
    font-weight: 600;
    text-align: left;
  `
  const GamePlayers = styled.div`
    margin-top: 28px;
    height: 936px;
    border-radius: 32px;
    background: rgba(17, 28, 68, 1);
    @media screen and (max-width: 1440px) {
      margin-top: 19px;
      height: 697px;
      border-radius: 24px;
      background: rgba(17, 28, 68, 1);
    }
  `
  const MobileGamePlayers = styled.div`
    margin-top: 30px;
    height: 579px;
    border-radius: 32px;
  `
  const MobileBigCardBox = styled.div`
    width: 343px;
    height: 317px;
    margin: 32px auto;
    border-radius: 24px;
    background: #111c44;
  `
  const MobileFlexGameBox = styled.div`
    width: 299px;
    display: flex;
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
    @media screen and (max-width: 1440px) {
      width: 69px;
      height: 20px;
      border-radius: 6px;
      background: rgba(127, 186, 122, 1);
      color: rgba(255, 255, 255, 1);
      font-size: 10px;
      font-weight: 400;
      text-align: center;
      line-height: 20px;
    }
  `
  const GameName = styled.div`
    color: rgba(255, 255, 255, 1);
    font-size: 32px;
    font-weight: 500;
    text-align: left;
    margin-top: 23px;
    @media screen and (max-width: 1440px) {
      color: rgba(255, 255, 255, 1);
      font-size: 23px;
      font-weight: 500;
      text-align: left;
      margin-top: 14px;
    }
  `
  const MobileGameName = styled.div`
    color: rgba(255, 255, 255, 1);
    font-size: 24px;
    font-weight: 600;
    text-align: left;
    line-height: 32px;
  `
  const GameDuse = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 22px;
    @media screen and (max-width: 1440px) {
      display: flex;
      justify-content: space-between;
      margin-top: 22px;
    }
  `
  const MobileGameDuse = styled.div`
    display: flex;
    width: 195px;
  `
  const GameNameLeft = styled.div`
    display: flex;
  `
  const MobileGameNameLeft = styled.div`
    display: flex;
    margin-top: 18px;
  `
  const GameHeaderImg = styled.img`
    width: 72px;
    height: 72px;
    margin-right: 34px;
    border-radius: 50%;
    @media screen and (max-width: 1440px) {
      width: 54px;
      height: 54px;
      margin-right: 25px;
      border-radius: 50%;
    }
  `
  const MobileGameHeaderImg = styled.img`
    width: 62px;
    height: 62px;
    margin-right: 16px;
    border-radius: 50%;
    border: 3px solid #0049c6;
  `
  const GameDueText = styled.div``
  const BorerBox = styled.div`
    padding: 40px 55px 38px 35px;
    box-sizing: border-box;
    height: 273px;
    border-bottom: 1px solid #e4e4e442;
    @media screen and (max-width: 1440px) {
      padding: 30px 41px 28px 26px;
      box-sizing: border-box;
      height: 203px;
      border-bottom: 1px solid #e4e4e442;
    }
  `
  const MobileBorerBox = styled.div`
    padding: 30px 20px 43px 24px;
    box-sizing: border-box;
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
    @media screen and (max-width: 1440px) {
      color: rgba(255, 255, 255, 1);
      font-size: 13px;
      font-weight: 500;
      text-align: left;
      margin-right: 10px;
    }
  `
  const GameingIcon = styled.div`
    width: 26px;
    height: 26px;
    color: #3f8cff;
    @media screen and (max-width: 1440px) {
      width: 13px;
      height: 13px;
      color: #3f8cff;
    }
  `
  const Followers = styled.div`
    color: rgba(255, 255, 255, 1);
    font-size: 18px;
    font-weight: 500;
    text-align: left;
    margin-top: 25px;
    margin-right: 25px;
    @media screen and (max-width: 1440px) {
      color: rgba(255, 255, 255, 1);
      font-size: 13px;
      font-weight: 500;
      text-align: left;
      margin-top: 15px;
      margin-right: 18px;
    }
  `
  const MobileFollowers = styled.div`
    color: rgba(255, 255, 255, 1);
    font-size: 13px;
    font-weight: 400;
    text-align: left;
    margin-right: 18px;
  `
  const Players = styled.div`
    color: rgba(255, 255, 255, 1);
    font-size: 18px;
    font-weight: 500;
    text-align: left;
    margin-top: 25px;
    @media screen and (max-width: 1440px) {
      color: rgba(255, 255, 255, 1);
      font-size: 13px;
      font-weight: 500;
      text-align: left;
      margin-top: 15px;
    }
  `
  const MobilePlayers = styled.div`
    color: rgba(255, 255, 255, 1);
    font-size: 13px;
    font-weight: 400;
    text-align: left;
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
    @media screen and (max-width: 1440px) {
      width: 151px;
      height: 42px;
      border-radius: 12px;
      opacity: 1;
      background: rgba(108, 93, 211, 1);
      color: rgba(255, 255, 255, 1);
      font-size: 10px;
      font-weight: 400;
      text-align: center;
      line-height: 42px;
      margin-top: 5px;
    }
  `
  const CardBox = styled.div`
    padding: 21px 34px;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    @media screen and (max-width: 1440px) {
      padding: 15px 23px;
      box-sizing: border-box;
      display: flex;
      justify-content: space-between;
    }
  `
  const MobileCardBox = styled.div`
    padding: 0px 23px 0px 23px;
    box-sizing: border-box;
  `
  const CoreAsset = styled.div``
  const CoreAssetText = styled.div`
    color: rgba(255, 255, 255, 1);
    font-size: 18px;
    font-weight: 500;
    text-align: left;
    @media screen and (max-width: 1440px) {
      color: rgba(255, 255, 255, 1);
      font-size: 13px;
      font-weight: 500;
      text-align: left;
    }
  `
  const MobileCoreAssetText = styled.div`
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
    @media screen and (max-width: 1440px) {
      width: 304px;
      display: flex;
      justify-content: space-between;
      margin-top: 12px;
    }
  `
  const MobileCore = styled.div`
    width: 297px;
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
  `
  const Asset = styled.div`
    position: relative;
    cursor: pointer;
  `
  const AssetImg = styled.img`
    width: 72px;
    height: 72px;
    @media screen and (max-width: 1440px) {
      width: 54px;
      height: 54px;
    }
  `
  const MobileAssetImg = styled.img`
    width: 42px;
    height: 42px;
  `
  const AssetHover = styled.div``
  const BackersBox = styled.div`
    width: 288px;
    display: flex;
    justify-content: space-between;
    margin-top: 23px;
    @media screen and (max-width: 1440px) {
      width: 212px;
      display: flex;
      justify-content: space-between;
      margin-top: 17px;
    }
  `
  const Backers = styled.div`
    position: relative;
    cursor: pointer;
  `
  const BackersImg = styled.img`
    width: 48px;
    height: 48px;
    border-radius: 50%;
    @media screen and (max-width: 1440px) {
      width: 36px;
      height: 36px;
      border-radius: 50%;
    }
  `
  const MobileBackersImg = styled.img`
    width: 33px;
    height: 33px;
    border-radius: 50%;
  `
  const BackersHover = styled.div``
  return (
    <>
      {isMobile() ? (
        <MobileGamePlayersBox>
          <MobilePlayersTitle>Overview</MobilePlayersTitle>
          <MobileGamePlayers>
            <Player src={game.videos[0].url}> </Player>
            <MobileBigCardBox>
              <MobileBorerBox>
                <MobileFlexGameBox>
                  {/* <GameType> {game.version}</GameType>  */}
                  <MobileGameHeaderImg src={game.gameUserIcon}></MobileGameHeaderImg>
                  <div>
                    <MobileGameDuse>
                      <MobileGameName> {game.name}</MobileGameName>
                      <IconTickCircle className="IconTickCircle" />
                    </MobileGameDuse>
                    <MobileGameNameLeft>
                      <MobileFollowers>{formatNumber(game.twitterFollower)}followers</MobileFollowers>
                      <MobilePlayers>{formatNumber(game.top[0].activeUsers)}players</MobilePlayers>
                    </MobileGameNameLeft>
                  </div>

                  {/* <PlayNow
                  onClick={() => {
                    window.open(game.gameUrl)
                  }}
                >
                  Play Now!
                </PlayNow> */}
                </MobileFlexGameBox>
              </MobileBorerBox>
              <MobileCardBox>
                <CoreAsset>
                  <MobileCoreAssetText>Core Asset</MobileCoreAssetText>
                  <MobileCore>
                    {CoreData &&
                      CoreData.map((item: any, index: any) => {
                        return (
                          <Asset key={index} className="CoreNftImg">
                            <MobileAssetImg src={item.imgUrl} />
                            <AssetHover className="CoreNftHover">{item.introductionCurrency}</AssetHover>
                          </Asset>
                        )
                      })}
                    {defiData &&
                      defiData.map((item: any, index: any) => {
                        return (
                          <Asset key={index} className="CoreNftImg">
                            <AssetImg src={item.imgUrl} />
                            <AssetHover className="CoreNftHover">{item.introductionCurrency}</AssetHover>
                          </Asset>
                        )
                      })}
                  </MobileCore>
                </CoreAsset>
                <CoreAsset>
                  <CoreAssetText>Backers</CoreAssetText>
                  <BackersBox>
                    {BackersData &&
                      BackersData.map((item: any, index: any) => {
                        return (
                          <Backers key={index} className="defiItem">
                            <MobileBackersImg src={item.backericon} />
                            <BackersHover className="CoreNftHover">{item.introductionCurrency}</BackersHover>
                          </Backers>
                        )
                      })}
                  </BackersBox>
                </CoreAsset>
              </MobileCardBox>
            </MobileBigCardBox>
          </MobileGamePlayers>
        </MobileGamePlayersBox>
      ) : (
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
                  {CoreData &&
                    CoreData.map((item: any, index: any) => {
                      return (
                        <Asset key={index} className="CoreNftImg">
                          <AssetImg src={item.imgUrl} />
                          <AssetHover className="CoreNftHover">{item.introductionCurrency}</AssetHover>
                        </Asset>
                      )
                    })}
                  {defiData &&
                    defiData.map((item: any, index: any) => {
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
                  {BackersData &&
                    BackersData.map((item: any, index: any) => {
                      return (
                        <Backers key={index} className="defiItem">
                          <BackersImg src={item.backericon} />
                          <BackersHover className="CoreNftHover">{item.introductionCurrency}</BackersHover>
                        </Backers>
                      )
                    })}
                </BackersBox>
              </CoreAsset>
            </CardBox>
          </GamePlayers>
        </GamePlayersBox>
      )}
    </>
  )
}
