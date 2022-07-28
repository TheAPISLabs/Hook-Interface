import '../index.css'

import { Table } from '@douyinfe/semi-ui'
import { Progress } from '@douyinfe/semi-ui'
import { getScreenWidth } from 'hook/untils'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components/macro'

const renderName = (text: string, record: any, index: any) => {
  return (
    <div>
      {' '}
      {text?.slice(0, 4)}...
      {text?.slice(13, 17)}
    </div>
  )
}
const reProgresse = (text: any, record: any, index: any) => {
  return (
    <div className="ProgressBox">
      {text}
      <div className="ProgressBoxWit">
        <Progress percent={text} stroke="#7551FF" showInfo={false} />
      </div>
    </div>
  )
}
const { Column } = Table
export default function TrendingAddresses(props: any) {
  const { value } = props
  const [AddessData, setAddessData] = useState([
    {
      key: '1',
      name: '0x2fa…9948',
      Progresse: '80',
    },
    {
      key: '2',
      name: '0x2fa…9948',
      Progresse: '10',
    },
    {
      key: '3',
      name: '0x2fa…9948',
      Progresse: '10',
    },
  ])

  const scroll = { y: getScreenWidth() > 1440 ? 210 : 150 }
  useEffect(() => {
    setAddessData(value)
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
    <TrendingBox>
      <TitleBox>
        <Title>Trending Addresses</Title>
        <Volume className="iconfont">&#xe600;</Volume>
      </TitleBox>
      <Table dataSource={AddessData} pagination={false} scroll={scroll}>
        <Column title="Addresses" dataIndex="searchName" key="name" render={renderName} className="AddressesBox" />
        <Column title="Search Times" dataIndex="heat" key="Progresse" render={reProgresse} />
      </Table>
    </TrendingBox>
  )
}
