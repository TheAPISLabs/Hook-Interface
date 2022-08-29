import '../index.css'

import React from 'react'
import styled from 'styled-components/macro'

import { lineChartOptionsTotalSpent } from './charts'
import LineChart from './LineChar'
export default function DeFiChartsData(props: { [x: string]: any; chartData: any }) {
  const { chartData, ...rest } = props

  const DefiBox = styled.div`
    height: 345px;
    border-radius: 20px;
    opacity: 1;
    background: rgba(17, 28, 68, 1);
    width: 100%;
    padding: 32px 28px 15px 32px;
    @media screen and (max-width: 1440px) {
      height: 258px;
      border-radius: 22px;
      opacity: 1;
      background: rgba(17, 28, 68, 1);
      width: 100%;
      padding: 18px 21px 17px 25px;
    }
    @media screen and (max-width: 700px) {
      height: 258px;
      border-radius: 22px;
      opacity: 1;
      background: rgba(17, 28, 68, 1);
      width: 100%;
      padding: 18px 21px 17px 25px;
      margin-bottom: 16px;
    }
  `
  const Title = styled.div`
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
  const Volume = styled.div`
    color: rgba(163, 174, 208, 1);
    font-size: 16px;
    font-weight: 500;
    text-align: left;
    @media screen and (max-width: 1440px) {
      color: rgba(163, 174, 208, 1);
      font-size: 12px;
      font-weight: 500;
      text-align: left;
    }
  `
  return (
    <DefiBox>
      <Title>DeFi VS GameFi VS NFT</Title>
      <Volume>Volume</Volume>
      {chartData.length > 0 && <LineChart chartData={chartData} chartOptions={lineChartOptionsTotalSpent} />}
    </DefiBox>
  )
}
