/* eslint-disable prettier/prettier */
import './index.css'

import { IconGlobeStroke } from '@douyinfe/semi-icons';
import { Table } from '@douyinfe/semi-ui'
import BigNumber from 'bignumber.js'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components/macro'

import { getTags, getTxDatas } from '../../hook/hook'
export const initTime = (timestamp) => {
  let date = new Date(timestamp)
  const Y = date.getFullYear() + '-'
  const M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-'
  const D = date.getDate() >= 10 ? date.getDate() + ' ' : `0${date.getDate()} `
  const h = date.getHours() >= 10 ? date.getHours() + ':' : `0${date.getHours()}:`
  const m = date.getMinutes() >= 10 ? date.getMinutes() : `0${date.getMinutes()}`
  const s = date.getSeconds()

  return Y + M + D + h + m
}
const Grid = styled.div`
  display: grid;
  height:100%;
  background:yellow;
  width:200px
`
export default function Overview () {
  const [total2Usd, setTotal2Usd] = useState(0)
  const [defi2Usd, setDefi2Usd] = useState(0)
  const [nft2Usd, setNft2Usd] = useState(0)
  //   const [searchToken, setSearchToken] = useState([])
  const [txData, setTxData] = useState([])
  const [defiPercentage, setDefiPercentage] = useState(0)
  const [tagArr, setTagArr] = useState([])
  const [isShowSkeleton, setIsShowSkeleton] = useState(true)
  const [defiToken, setDefiToken] = useState([])
  const [nftData, setNftData] = useState([])

  const searchAddress = localStorage.getItem('searchAddress') || '0x3f3a26857b3bde848927fafca975b2ee5bcf1390'
  const [searchData, setSearchData] = useState(
    JSON.parse(localStorage.getItem('searchData')) || {
      searchData: { totalPrice: 0, totalPrice_defi: 0, totalPrice_nft: 0 },
    }
  )
  const { Column } = Table
  const renderIndex = (text, record, index) => {
    return <div>{index + 1}</div>
  }
  const renderInfo = (text, record, index) => {
    return (
      <div>
        <div className='tokenName'>
          {text.s}
        </div>
        <div className='tokenBalance'>
          {record.balance}
        </div>
      </div>
    )
  }
  const renderUsd = (text, record, index) => {
    return (
      <div>
        <div className='token2Usd'>
          ${record.totalPrice}
        </div>
        <div className='tokenPrice'>
          @{record.price}
        </div>
      </div>
    )
  }
  const renderType = (text, record, index) => {
    return (
      <div className='textOver'>
        <span>{text}</span>&nbsp;
        <span className='typeTime'>{record.time}</span>
      </div>
    )
  }
  const renderText = (text, record, index) => {
    return (
      <div className='textOver'>
        {text}
      </div>
    )
  }
  const renderLink = (text, record, index) => {
    return (
      <a className='linkIcon' href={text} target="_blank" rel="noreferrer">
        <IconGlobeStroke />
      </a>
    )
  }
  useEffect(() => {
    if (!searchData || !searchAddress) {
      return
    }
    getTxDatas(searchAddress, 10, 1).then((res) => {
      if (res.data.code == 1) {
        const txData = res.data.data.map((item) => {
          console.log(item);
          console.log(initTime(item.time * 1000))
          return {
            type: item.functionName,
            transfer: `To: ${item.to.slice(0, 3)}...${item.to.slice(
              item.to.length - 5,
              item.to.length - 1
            )}   From: ${item.from.slice(0, 3)}...${item.from.slice(item.from.length - 5, item.from.length - 1)} `,
            value: item.value,
            token: item.tokenTransfer ? item.tokenTransfer[0]?.tokenSymbol : 'null',
            link: `https://etherscan.io/tx/${item.txid}`,
            time: initTime(item.time * 1000),
          }
        })
        setTxData(txData)
        setIsShowSkeleton(false)
      }
    })

    getTags(searchAddress).then((res) => {
      if (res.data.code == '200') {
        const arr = res.data.data.map((item) => item.tagName)
        setTagArr(arr)
      }
    })

    setSearchData(searchData)
    setTotal2Usd(searchData.totalPrice)
    setDefi2Usd(searchData.totalPrice_defi)
    setNft2Usd(searchData.totalPrice_nft)
    if (searchData?.tokenBalance?.data) {
      const defiToken = searchData.tokenBalance.data.filter(
        (res) => res.tokenInfo.c == null
      )
      console.log(defiToken);
      setDefiToken(defiToken)
      const nftData = searchData.tokenBalance.data.filter(
        (res) => res.tokenInfo.c != null
      )
      setNftData(nftData)
    }
    if (total2Usd && defi2Usd) {
      setDefiPercentage(new BigNumber(total2Usd).div(defi2Usd).times(100).toFixed(2))
    }

  }, [searchAddress, defi2Usd, searchData, total2Usd])
  return (
    <div className='overviewTable'>
      <div className='overTop'>
        <div className='overLeft'>
          <div className='leftTop'>
            <img src="" alt="" />
          </div>
          <div className=''></div>
        </div>
        <div className='tokenTrending'>
          <Table dataSource={defiToken} pagination={false} >
            <Column title="DeFi Token" dataIndex="tokenInfo" key="key" render={renderInfo} className="KeyWidth" />
            <Column title="" dataIndex="tokenInfo" key="Sales" render={renderUsd} />
          </Table>
        </div>
        <div className='tokenTrending'>
          <Table dataSource={nftData} pagination={false} >
            <Column title="NFTs token" dataIndex="tokenInfo" key="key" render={renderInfo} className="KeyWidth" />
            <Column title="" dataIndex="tokenInfo" key="Sales" render={renderUsd} />
          </Table>
        </div>
      </div>
      <div className='overBot'>
        <div className='overBotTitle'>Activities</div>
        <Table dataSource={txData} pagination={false} >
          <Column title="Type" dataIndex="type" key="key" render={renderType} className="KeyWidth" />
          <Column title="Transfer" dataIndex="transfer" key="name" render={renderText} className="renderName" />
          <Column title="Token" dataIndex="token" key="Price" render={renderText} className="renderInfo" />
          <Column title="Value" dataIndex="value" key="Sales" render={renderText} />
          <Column title="Link" dataIndex="link" key="Volumes" render={renderLink} className="renderVolume" />
        </Table>
      </div>
    </ div>
  )
}
