import '../index.css'

import React from 'react'
import styled from 'styled-components/macro'

import { isMobile } from '../../GameDetails/components/until.js'
export default function Ranking(props: any) {
  const { gameData } = props
  const TrendingGamesBox = styled.div`
    height: 710px;
    margin-bottom: 52px;
    @media screen and (max-width: 1440px) {
      height: 530px;
      margin-bottom: 39px;
    }
  `
  const MobileTrendingGamesBox = styled.div`
    height: 532px;
    margin-top: 52px;
  `
  const TrendingGames = styled.div`
    height: 706px;
    margin-top: 22px;
    @media screen and (max-width: 1440px) {
      height: 543px;
      margin-top: 22px;
    }
  `
  const MobileTrendingGames = styled.div`
    height: 472px;
  `
  const Title = styled.div`
    color: rgba(255, 255, 255, 1);
    font-size: 24px;
    font-weight: 500;
    font-family: 'Inter';
    text-align: left;
    @media screen and (max-width: 1440px) {
      color: rgba(255, 255, 255, 1);
      font-size: 18px;
      font-weight: 500;
      font-family: 'Inter';
      text-align: left;
    }
  `
  const MobileTitle = styled.div`
    color: rgba(255, 255, 255, 1);
    font-size: 24px;
    font-weight: 600;
    font-family: 'Inter';
    text-align: left;
    margin-bottom: 28px;
  `
  const GamesBox = styled.div`
    overflow-y: auto;
    height: 706px;
    @media screen and (max-width: 1440px) {
      overflow-y: auto;
      height: 543px;
    }
  `
  const MobileGamesBox = styled.div`
    overflow-y: auto;
    height: 472px;
  `
  const GameBox = styled.div`
    display: flex;
    margin-bottom: 23px;
    &:hover {
      cursor: pointer;
      background-color: rgba(228, 228, 228, 0.1);
      border-radius: 12px;
    }
    @media screen and (max-width: 1440px) {
      display: flex;
      margin-bottom: 18px;
    }
  `
  const MobileGameBox = styled.div`
    display: flex;
    margin-bottom: 24px;
    &:hover {
      cursor: pointer;
      background-color: rgba(228, 228, 228, 0.1);
      border-radius: 12px;
    }
  `
  const GameImage = styled.img`
    border-radius: 12px;
    width: 113px;
    height: 98px;
    @media screen and (max-width: 1440px) {
      width: 86px;
      height: 75px;
      border-radius: 9px;
    }
  `
  const MobileGameImage = styled.img`
    border-radius: 12px;
    width: 109px;
    height: 100px;
  `
  const GameText = styled.div`
    padding-top: 13px;
    margin-left: 34px;
    @media screen and (max-width: 1440px) {
      padding-top: 9px;
      margin-left: 26px;
    }
  `
  const MobileGameText = styled.div`
    padding-top: 13px;
    margin-left: 33px;
  `
  const GameNameText = styled.div`
    color: rgba(255, 255, 255, 1);
    font-weight: 400;
    text-align: left;
    line-height: 18px;
    margin-bottom: 8px;
    font-size: 13px;
    @media screen and (max-width: 1440px) {
      color: rgba(255, 255, 255, 1);
      font-size: 11px;
      font-weight: 400;
      text-align: left;
      margin-bottom: 5px;
    }
  `
  const MobileGameNameText = styled.div`
    color: rgba(255, 255, 255, 1);
    font-weight: 500;
    text-align: left;
    line-height: 18px;
    margin-bottom: 8px;
    font-size: 13px;
  `
  const GameIntroduce = styled.div`
    width: 334px;
    color: rgba(128, 129, 145, 1);
    font-size: 12px;
    font-weight: 400;
    text-align: left;
    line-height: 21px;
    lineclamp: 3;
    overflow: hidden;
    @media screen and (max-width: 1440px) {
      width: 257px;
      color: rgba(128, 129, 145, 1);
      font-size: 10px;
      font-weight: 400;
      text-align: left;
      line-height: 16px;
      lineclamp: 3;
      overflow: hidden;
    }
  `
  const MobileGameIntroduce = styled.div`
    width: 161px;
    color: rgba(128, 129, 145, 1);
    font-size: 12px;
    font-weight: 400;
    text-align: left;
    line-height: 16px;
    lineclamp: 3;
    overflow: hidden;
  `
  return (
    <>
      {isMobile() ? (
        <MobileTrendingGamesBox>
          <MobileTitle>Ranking</MobileTitle>
          <MobileTrendingGames>
            <MobileGamesBox>
              {gameData.map((item: any, index: any) => {
                return (
                  <MobileGameBox key={index}>
                    <MobileGameImage src={item.imgs[0].url} />
                    <MobileGameText>
                      <MobileGameNameText>{item.gameStudio}®</MobileGameNameText>
                      <MobileGameIntroduce className="rankText">{item.gameIntroduction}</MobileGameIntroduce>
                    </MobileGameText>
                  </MobileGameBox>
                )
              })}
            </MobileGamesBox>
          </MobileTrendingGames>
        </MobileTrendingGamesBox>
      ) : (
        <TrendingGamesBox>
          <Title>Ranking</Title>
          <TrendingGames>
            <GamesBox>
              {gameData.map((item: any, index: any) => {
                return (
                  <GameBox key={index}>
                    <GameImage src={item.imgs[0].url} />
                    <GameText>
                      <GameNameText>{item.gameStudio}®</GameNameText>
                      <GameIntroduce className="rankText">{item.gameIntroduction}</GameIntroduce>
                    </GameText>
                  </GameBox>
                )
              })}
            </GamesBox>
          </TrendingGames>
        </TrendingGamesBox>
      )}
    </>
  )
}
