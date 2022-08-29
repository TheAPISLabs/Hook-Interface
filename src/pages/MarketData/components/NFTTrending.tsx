import '../index.css'

import { Table } from '@douyinfe/semi-ui'
import BigNumber from 'bignumber.js'
import { getScreenWidth } from 'hook/untils'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components/macro'
const renderIndex = (text: any, record: any, index: any) => {
  return <div>{index + 1}</div>
}
const renderName = (text: any, record: any, index: any) => {
  return <div className="textOver">{text}</div>
}
const renderPrice = (text: any, record: any, index: any) => {
  return <div className="textOver">${Number(new BigNumber(text).toFixed(2)).toLocaleString()}</div>
}
const renderVolume = (text: any, record: any, index: any) => {
  return <div className="textOver">${Number(new BigNumber(text).toFixed(2)).toLocaleString()}</div>
}
const renderSales = (text: any, record: any, index: any) => {
  return <div className="textOver">${Number(new BigNumber(text).toFixed(2)).toLocaleString()}</div>
}
const { Column } = Table
export default function TrendingAddresses(props: any) {
  const { value } = props
  const [NFTGameData, setNFTGameData] = useState([
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
  ])
  const scroll = { y: getScreenWidth() > 1440 ? 210 : 150 }
  useEffect(() => {
    setNFTGameData(value)
    console.log(value, 'value')
  }, [value])
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
    @media screen and (max-width: 700px) {
      height: 100%;
      border-radius: 22px;
      opacity: 1;
      background: rgba(17, 28, 68, 1);
      width: 100%;
      padding: 15px 12px 15px 26px;
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
        <Title>NFT Gaming Trending</Title>
        <Volume className="iconfont">&#xe600;</Volume>
      </TitleBox>
      <Table dataSource={NFTGameData} pagination={false} scroll={scroll}>
        <Column title="#" dataIndex="key" key="key" render={renderIndex} className="KeyWidth" />
        <Column title="Collection" dataIndex="collection" key="name" render={renderName} className="renderName" />
        <Column title="Floor" dataIndex="price" key="Price" render={renderPrice} className="renderPrice" />
        <Column title="Market Cap" dataIndex="mkt" key="Sales" render={renderSales} />
        <Column title="Volume" dataIndex="volume" key="Volumes" render={renderVolume} className="renderVolume" />
      </Table>
    </TrendingBox>
  )
}
