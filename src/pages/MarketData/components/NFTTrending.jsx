import '../index.css'

import { Table } from '@douyinfe/semi-ui'
import React from 'react'
import styled from 'styled-components/macro'
const data = [
  {
    key: '1',
    name: 'Marketplace',
    Price: '4,420,262',
    Volumes: '4,420,262',
    Sales: '1.024',
  },
  {
    key: '2',
    name: 'Venus PRO',
    Price: '4,420,262',
    Volumes: '1.485',
    Sales: '1.024',
  },
  {
    key: '3',
    name: 'Uranus Kit',
    Price: '4,420,262',
    Volumes: '1.485',
    Sales: '1.024',
  },
]

const renderName = (text, record, index) => {
  return <div>{text}</div>
}
const renderPrice = (text, record, index) => {
  return <div>${text}</div>
}
const renderVolume = (text, record, index) => {
  return <div>${text}</div>
}
const renderSales = (text, record, index) => {
  return <div>${text}</div>
}
const { Column } = Table
export default function TrendingAddresses() {
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
    <TrendingBox className="NFTTrending">
      <TitleBox>
        <Title>NFT Trending</Title>
        <Volume className="iconfont">&#xe600;</Volume>
      </TitleBox>
      <Table dataSource={data} pagination={false}>
        <Column title="#" dataIndex="key" key="key" className="KeyWidth" />
        <Column title="Collection" dataIndex="name" key="name" render={renderName} className="renderName" />
        <Column title="Floor Price" dataIndex="Price" key="Price" render={renderPrice} className="renderPrice" />
        <Column title="Voulme" dataIndex="Volumes" key="Volumes" render={renderVolume} className="renderVolume" />
        <Column title="Sales" dataIndex="Sales" key="Sales" render={renderSales} />
      </Table>
    </TrendingBox>
  )
}
