import '../index.css'
import '../index.css'

import { Avatar, Table } from '@douyinfe/semi-ui'
import React from 'react'
import styled from 'styled-components/macro'

import imgHeader from '../../../assets/images/logo/flowers.png'
const data = [
  {
    key: '1',
    name: 'Marketplace',
    nameIconSrc: imgHeader,
    Price: '4,420,262',
    hours: '231.18',
    Volume: '4,420,262',
  },
  {
    key: '2',
    name: 'Venus PRO',
    nameIconSrc: imgHeader,
    Price: '4,420,262',
    hours: '231.18',
    Volume: '1.485',
  },
  {
    key: '3',
    name: 'Uranus Kit',
    nameIconSrc: imgHeader,
    Price: '4,420,262',
    hours: '231.18',
    Volume: '1.485',
  },
]

const renderName = (text, record, index) => {
  return (
    <div>
      <Avatar size="small" shape="square" src={record.nameIconSrc} style={{ marginRight: 5 }}></Avatar>
      {text}
    </div>
  )
}
const renderPrice = (text, record, index) => {
  return <div>${text}</div>
}
const renderVolume = (text, record, index) => {
  return <div>${text}</div>
}
const renderHours = (text, record, index) => {
  return (
    <div
      style={{
        color: '#01B574',
        fontWeight: 700,
      }}
    >
      +{text}%
    </div>
  )
}
const { Column } = Table
export default function DeFiTrending() {
  const TrendingBox = styled.div`
    height: 345px;
    border-radius: 20px;
    opacity: 1;
    background: rgba(17, 28, 68, 1);
    width: 100%;
    padding: 25px 19px 39px 32px;
    @media screen and (max-width: 1440px) {
      height: 258px;
      border-radius: 22px;
      opacity: 1;
      background: rgba(17, 28, 68, 1);
      width: 100%;
      padding: 15px 12px 0px 26px;
    }
  `
  const TitleBox = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    @media screen and (max-width: 1440px) {
      width: 100%;
      display: flex;
      justify-content: space-between;
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
    width: 37px;
    height: 37px;
    border-radius: 10px;
    background: rgba(27, 37, 75, 1);
    text-align: center;
    line-height: 37px;
    color: #fff;
    @media screen and (max-width: 1440px) {
      width: 28px;
      height: 28px;
      border-radius: 7px;
      background: rgba(27, 37, 75, 1);
      text-align: center;
      line-height: 28px;
      color: #fff;
    }
  `
  return (
    <TrendingBox className="DeFiTrending">
      <TitleBox>
        <Title>DeFi Trending</Title>
        <Volume className="iconfont">&#xe600;</Volume>
      </TitleBox>
      <Table dataSource={data} pagination={false}>
        <Column title="#" dataIndex="key" key="key" className="KeyWidth" />
        <Column title="Name" dataIndex="name" key="name" render={renderName} className="renderName" />
        <Column title="Price" dataIndex="Price" key="Price" render={renderPrice} className="renderPrice" />
        <Column title="24h" dataIndex="hours" key="hours" render={renderHours} className="hours" />
        <Column title="Volume" dataIndex="Volume" key="Volume" render={renderVolume} />
      </Table>
    </TrendingBox>
  )
}
