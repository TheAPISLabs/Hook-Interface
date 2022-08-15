import '../index.css'

import React from 'react'
import styled from 'styled-components/macro'
export default function Ranking(props: any) {
  const { gameData } = props
  const TrendingGamesBox = styled.div`
    height: 782px;
    margin-bottom: 52px;
    @media screen and (max-width: 1440px) {
      height: 590px;
      margin-bottom: 39px;
    }
  `
  const TrendingGames = styled.div`
    height: 706px;
    margin-top: 36px;
    @media screen and (max-width: 1440px) {
      height: 543px;
      margin-top: 22px;
    }
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
  const GamesBox = styled.div`
    overflow-y: auto;
    height: 706px;
    @media screen and (max-width: 1440px) {
      overflow-y: auto;
      height: 543px;
    }
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
  const GameText = styled.div`
    padding-top: 13px;
    margin-left: 34px;
    @media screen and (max-width: 1440px) {
      padding-top: 9px;
      margin-left: 26px;
    }
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
  const GameIntroduce = styled.div`
    width: 334px;
    color: rgba(128, 129, 145, 1);
    font-size: 12px;
    font-weight: 400;
    text-align: left;
    line-height: 15px;
    lineclamp: 3;
    overflow: hidden;
    @media screen and (max-width: 1440px) {
      width: 257px;
      color: rgba(128, 129, 145, 1);
      font-size: 10px;
      font-weight: 400;
      text-align: left;
      line-height: 12px;
      lineclamp: 3;
      overflow: hidden;
    }
  `
  return (
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
  )
}