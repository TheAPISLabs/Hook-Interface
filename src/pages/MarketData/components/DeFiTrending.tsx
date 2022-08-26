import '../index.css'

import { Avatar, Table } from '@douyinfe/semi-ui'
import BigNumber from 'bignumber.js'
import { getScreenWidth } from 'hook/untils'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components/macro'

import imgHeader from '../../../assets/images/logo/flowers.png'

const renderName = (text: any, record: any, index: any) => {
  return (
    <div>
      <Avatar
        size="small"
        shape="square"
        src={`https://s2.coinmarketcap.com/static/img/coins/64x64/${text.id}.png`}
        style={{ marginRight: 5 }}
      />
      {text.text}
    </div>
  )
}
const renderPrice = (text: any, record: any, index: any) => {
  return <div>${Number(new BigNumber(text).toFixed(4)).toLocaleString()}</div>
}
const renderVolume = (text: any, record: any, index: any) => {
  return <div>${Number(new BigNumber(text).toFixed(2)).toLocaleString()}</div>
}
const renderHours = (text: any, record: any, index: any) => {
  return <div className={text > 0 ? 'SineNum' : 'RedSineNum'}>{text?.toFixed(2)}%</div>
}
const renderIndex = (text: any, record: any, index: any) => {
  return <div>{index + 1}</div>
}
const { Column } = Table
export default function DeFiTrending(props: any) {
  const { value } = props
  const [DiFiGameData, setDiFiGameData] = useState([
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
  ])
  const scroll = { y: getScreenWidth() > 1440 ? 210 : 150 }
  useEffect(() => {
    setDiFiGameData(value)
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
        <Title>Gaming Token Trending</Title>
        <Volume className="iconfont">&#xe600;</Volume>
      </TitleBox>
      <Table dataSource={DiFiGameData} pagination={false} scroll={scroll}>
        <Column title="#" dataIndex="key" key="key" render={renderIndex} className="KeyWidth" />
        <Column title="Name" dataIndex="name" key="name" render={renderName} className="renderName" />
        <Column title="Price" dataIndex="price" key="Price" render={renderPrice} className="renderPrice" />
        <Column title="24h" dataIndex="oneDay" key="hours" render={renderHours} className="hours" />
        <Column title="Volume" dataIndex="volume" key="Volume" render={renderVolume} />
      </Table>
    </TrendingBox>
  )
}
