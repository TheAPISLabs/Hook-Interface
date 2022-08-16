import '../index.css'

import React from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components/macro'

import { isMobile } from '../../GameDetails/components/until.js'
export default function Ranking() {
  const history = useHistory()
  const TrendingGamesBox = styled.div`
    width: 100%;
  `
  const MobileTrendingGamesBox = styled.div`
    width: 100%;
    margin-top: 30px;
  `

  const Title = styled.text`
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
  const MobileTitle = styled.text`
    color: rgba(255, 255, 255, 1);
    font-size: 24px;
    font-weight: 600;
    font-family: 'Inter';
    text-align: left;
  `
  const MoreTitle = styled.text`
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
    &:hover {
      cursor: pointer;
      opacity: 0.6;
    }
  `
  const MobileMoreBtn = styled.div`
    width: 327px;
    height: 56px;
    background: #6c5dd3;
    border-radius: 16px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 56px;
    text-align: center;
    color: #ffffff;
    margin: 52px auto;
  `
  return (
    <>
      {isMobile() ? (
        <MobileTrendingGamesBox>
          <MobileTitle>Trending games</MobileTitle>
          <MobileMoreBtn
            onClick={() => {
              history.push({ pathname: '/moregame' })
            }}
          >
            Load More
          </MobileMoreBtn>
        </MobileTrendingGamesBox>
      ) : (
        <TrendingGamesBox>
          <Title>Trending games</Title>
          <MoreTitle
            onClick={() => {
              history.push({ pathname: '/moregame' })
            }}
          >
            (more)
          </MoreTitle>
        </TrendingGamesBox>
      )}
    </>
  )
}
