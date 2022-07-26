/* eslint-disable react/jsx-key */
import '../index.css'

import { Col, Row, TabPane, Tabs } from '@douyinfe/semi-ui'
import React, { useState } from 'react'
import styled from 'styled-components/macro'
export default function MarketCapData() {
  const [MarketCapData, setMarketCapData] = useState([
    {
      MarketName: 'NFT',
      indexNum: '1',
      children: [
        {
          MarkTitle: 'Market Cap',
        },
        {
          MarkTitle: 'Volume',
        },
        {
          MarkTitle: 'Sales',
        },
      ],
    },
    {
      MarketName: 'DeFi',
      indexNum: '2',
      children: [
        {
          MarkTitle: 'Market Cap',
        },
        {
          MarkTitle: 'Volume',
        },
        {
          MarkTitle: 'Sales',
        },
      ],
    },
    {
      MarketName: 'GamFi',
      indexNum: '3',
      children: [
        {
          MarkTitle: 'Market Cap',
        },
        {
          MarkTitle: 'Volume',
        },
        {
          MarkTitle: 'Sales',
        },
      ],
    },
  ])
  const MarketCap = styled.div`
    height: 126px;
    background-color: #111c44;
    padding: 20px 0px 0px 32px;
    box-sizing: border-box;
    border-radius: 30px;
    @media screen and (max-width: 1440px) {
      height: 94px;
      background-color: #111c44;
      padding: 17px 0px 0px 24px;
      box-sizing: border-box;
      border-radius: 22px;
    }
  `
  const MarkBox = styled.div`
    // display: flex;
    // width: 100%;
  `
  const MarkTitle = styled.div`
    font-weight: 400;
    font-size: 18.2px;
    text-align: left;
    color: #a3aed0;
    @media screen and (max-width: 1440px) {
      font-weight: 400;
      font-size: 14px;
      text-align: left;
      color: #a3aed0;
    }
  `
  const CapNum = styled.div`
    color: rgba(255, 255, 255, 1);
    font-size: 31.2px;
    font-weight: 500;
    text-align: left;
    line-height: 42px;
    margin-top: 4px;
    @media screen and (max-width: 1440px) {
      color: rgba(255, 255, 255, 1);
      font-size: 24px;
      font-weight: 500;
      text-align: left;
      line-height: 30px;
      margin-top: 3px;
    }
  `
  const SineLast = styled.div`
    color: rgba(163, 174, 208, 1);
    font-size: 15.6px;
    font-weight: 500;
    text-align: left;
    margin-top: 4px;
    display: flex;
    @media screen and (max-width: 1440px) {
      color: rgba(163, 174, 208, 1);
      font-size: 12px;
      font-weight: 500;
      text-align: left;
      margin-top: 3px;
      display: flex;
    }
  `
  const SineNum = styled.div`
    color: rgba(1, 181, 116, 1);
    font-size: 15.6px;
    font-weight: 700;
    text-align: left;
    @media screen and (max-width: 1440px) {
      color: rgba(1, 181, 116, 1);
      font-size: 12px;
      font-weight: 700;
      text-align: left;
    }
  `
  return (
    <div className="max">
      <Tabs type="button">
        {MarketCapData.map((item, index) => {
          return (
            <TabPane tab={item.MarketName} itemKey={item.indexNum}>
              <>
                <MarkBox className="grid">
                  <Row gutter={{ xs: 24, sm: 24, md: 24, lg: 24, xl: 24, xxl: 24 }}>
                    {item?.children?.map((item, index) => {
                      return (
                        <Col xs={8} sm={8} md={8} lg={8} xl={8}>
                          <MarketCap>
                            <MarkTitle>{item.MarkTitle}</MarkTitle>
                            <CapNum>$574.35</CapNum>
                            <SineLast>
                              <SineNum>+23%</SineNum>
                              since last 24H
                            </SineLast>
                          </MarketCap>
                        </Col>
                      )
                    })}
                  </Row>
                </MarkBox>
              </>
            </TabPane>
          )
        })}
      </Tabs>
    </div>
  )
}
