/* eslint-disable react/jsx-key */
import './index.css'

import { Col, Row } from '@douyinfe/semi-ui'
import React, { useEffect, useState } from 'react'

import { getMarketCapAndVolume, getSearchRank } from '../../hook/hook'
import DeFi from './components/DeFi'
import DeFiTrending from './components/DeFiTrending'
import NFTTrending from './components/NFTTrending'
import Tabss from './components/Tabs'
import Trending from './components/TrendingAddresses'
export default function MarketData() {
  const [tabsData, setTabsData] = useState<any>()
  const [TrendAddData, setTrendAddData] = useState<any>()
  const formataData = async () => {
    const nftVolumeDatas = (await getMarketCapAndVolume('NFT')).data.data
    const defiVolumDatas = (await getMarketCapAndVolume('DEFI')).data.data
    const metaVolumDatas = (await getMarketCapAndVolume('metaverse')).data.data
    setTabsData([
      {
        MarketName: 'NFT',
        indexNum: '1',
        children: [
          {
            MarkTitle: 'Market Cap',
            valueNum: nftVolumeDatas.marketCap,
            VolumRatios: nftVolumeDatas.marketCapRatio,
          },
          {
            MarkTitle: 'Volume',
            valueNum: nftVolumeDatas.volume,
            VolumRatios: nftVolumeDatas.volumeRatio,
          },
          {
            MarkTitle: 'Sales',
            valueNum: nftVolumeDatas.circulatingSupply,
            VolumRatios: nftVolumeDatas.circulatingSupplyRatio,
          },
        ],
      },
      {
        MarketName: 'DeFi',
        indexNum: '2',
        children: [
          {
            MarkTitle: 'Market Cap',
            valueNum: defiVolumDatas.marketCap,
            VolumRatio: defiVolumDatas.marketCapRatio,
          },
          {
            MarkTitle: 'Volume',
            valueNum: defiVolumDatas.volume,
            VolumRatios: defiVolumDatas.volumeRatio,
          },
        ],
      },
      {
        MarketName: 'GamFi',
        indexNum: '3',
        children: [
          {
            MarkTitle: 'Market Cap',
            valueNum: metaVolumDatas.marketCap,
            VolumRatio: metaVolumDatas.marketCapRatio,
          },
          {
            MarkTitle: 'Volume',
            valueNum: metaVolumDatas.volume,
            VolumRatios: metaVolumDatas.volumeRatio,
          },
        ],
      },
    ])
  }
  const AddressesData = async () => {
    const TrendAddDatas = (await getSearchRank(10)).data.data
    console.log(TrendAddDatas, 'ddddddddd')

    setTrendAddData(TrendAddDatas)
  }

  useEffect(() => {
    formataData()
    AddressesData()
  }, [])

  return (
    <>
      {' '}
      <div className="grid">
        <Row className="Tabss">
          <Tabss value={tabsData} />
        </Row>
        <Row gutter={{ xs: 24, sm: 24, md: 24, lg: 24, xl: 24, xxl: 24 }}>
          <Col xs={16} sm={16} md={16} lg={16} xl={16}>
            <DeFi />
          </Col>
          <Col xs={8} sm={8} md={8} lg={8} xl={8} className="Trending">
            <Trending value={TrendAddData} />
          </Col>
        </Row>
        <Row gutter={{ xs: 24, sm: 24, md: 24, lg: 24, xl: 24, xxl: 24 }} className="mt">
          <Col xs={12} sm={12} md={12} lg={12} xl={12}>
            <DeFiTrending />
          </Col>
          <Col xs={12} sm={12} md={12} lg={12} xl={12}>
            <NFTTrending />
          </Col>
        </Row>
      </div>
    </>
  )
}
