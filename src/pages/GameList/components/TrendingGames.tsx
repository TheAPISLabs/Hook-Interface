import '../index.css'

import React from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components/macro'
export default function Ranking() {
  const history = useHistory()
  const TrendingGamesBox = styled.div`
    width: 100%;
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
  return (
    <TrendingGamesBox>
      <Title>Ranking</Title>
      <MoreTitle
        onClick={() => {
          history.push({ pathname: '/moregame' })
        }}
      >
        (more)
      </MoreTitle>
    </TrendingGamesBox>
  )
}
