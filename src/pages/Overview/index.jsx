/* eslint-disable prettier/prettier */
import './index.css'

import { IconGlobeStroke } from '@douyinfe/semi-icons';
import { IconCopy } from '@douyinfe/semi-icons';
import { Table } from '@douyinfe/semi-ui'
import { Col, Row } from '@douyinfe/semi-ui';
import BigNumber from 'bignumber.js'
import copy from 'copy-to-clipboard'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components/macro'

import HeaderImg from '../../assets/images/logo/avatar4.png'
import NFTLogo from '../../assets/images/logo/NFTLogo.png'
import SLogo from '../../assets/images/logo/SLogo.png'
import { getTags, getTxDatas } from '../../hook/hook'
import { getScreenWidth } from '../../hook/untils'
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
  const nftPercentage = 100 - defiPercentage
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
  const handleClick = () => {
    // e.stopPropagation()
    copy(searchAddress)
  }
  const scroll = { y: getScreenWidth() > 1440 ? 611 : 490 }
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
          <div className='backTop'>
            <img src={HeaderImg} alt="" className='HeaderImg'/>
          </div>
          <div className='HookWhale'>
          Hook Whale
          </div>
        
          <div className='handleClickBox'>
            <div className='handleClickText'
             onClick={handleClick}
            >
            {searchAddress.slice(0, 5)}...
          {searchAddress.slice(
            searchAddress.length - 5,
            searchAddress.length - 1
          )}
            </div>
            <IconCopy className='IconCopy'/>
          </div>
          <div className='ResBoxBig'>
          <Row gutter={[16, 24]} justify="space-around">
          
          {tagArr.map((res, index) => {
            return (
              <Col span={6}  key={index + 1}>
              <div
              className='ResBox'
               
              >
                
                #{res}
              </div>
                </Col>
            )
          })}
          
        </Row>
          </div>
        
        <div
        className=' EtherscanBigBox'
       
      >
        <div
        className='EtherscanText'
         
          onClick={() => {
            window.open(`https://etherscan.io/address/${searchAddress}`)
          }}
        >
          Etherscan
        </div>

        <div
        className='OpenseaText'
          onClick={() => {
            window.open(`https://opensea.io/${searchAddress}`)
          }}
        
        >
          Opensea
        </div>
        <div
        className='CyberText'
          onClick={() => {
            window.open(`https://www.cyber.xyz/@${searchAddress}`)
          }}
        
        >
          Cyber.xyz
        </div>
     
        </div>
        <div className='PortfolioBigBox'>
      <div className='PortfolioBox'>
        <div>
          <div
          className='PortfolioText'
         
          >
            Portfolio
          </div>
          <div
          className='total2UsdText'
          >
            ${total2Usd}
          </div>
        </div>
        {/* <div className='fakeGraphImgBox' align="flex-end">
          <img src={fakeGraph} alt="" className='fakeGraphImg' />
        </div> */}
      </div>
    
    </div>
      <div className='NFTLogoNft2Usd'>
        <div>
          <div className='NFTLogoImgBox'>
            <img src={NFTLogo} alt="" className='NFTLogoImg'/>
          </div>
          <div className='ERC721TextBox'>
            <div className='ERC721Text'>
              Assets on ERC721
            </div>
            <div className='nft2UsdBox'>
              <div className='nft2UsdText' >
                ${nft2Usd}
              </div>
              <div className='nftPercentageText'>
                {nftPercentage}%
              </div>
            </div>
          </div>
        </div>
        <div className='SLogoBox'>
          <div className='SLogoImgBox'>
            <img src={SLogo} className='SLogoImg' alt="" />
          </div>
          <div className='ERC20Box'>
            <div>
              <div className='ERC20Text'>
                Assets on ERC20
              </div>
            </div>
            <div className='defi2UsdBox'>
              <div className='defi2UsdText'>
                ${defi2Usd}
              </div>
              <div className='defiPercentageText' >
                {defiPercentage}%
              </div>
            </div>
          </div>
        </div>
      </div>
        </div>
        <div className='tokenTrending'>
          <Table dataSource={defiToken} pagination={false} scroll={scroll}>
            <Column title="DeFi Token" dataIndex="tokenInfo" key="key" render={renderInfo} className="KeyWidth" />
            <Column title="" dataIndex="tokenInfo" key="Sales" render={renderUsd} />
          </Table>
        </div>
        <div className='tokenTrending'>
          <Table dataSource={nftData} pagination={false} scroll={scroll}>
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
