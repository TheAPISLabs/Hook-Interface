/* eslint-disable react/jsx-key */
import './index.css'

import { Col, Row, Skeleton } from '@douyinfe/semi-ui'
import React, { useEffect, useState } from 'react'

import { getCmcDatas, getGraphData, getMarketCapAndVolume, getSearchRank } from '../../hook/hook'
import DeFi from './components/DeFi'
import DeFiTrending from './components/DeFiTrending'
import NFTTrending from './components/NFTTrending'
import Tabss from './components/Tabs'
import Trending from './components/TrendingAddresses'
export default function MarketData() {
  const [tabsData, setTabsData] = useState<any>()
  const [chartData, setChartData] = useState<any>([])

  const [TrendAddData, setTrendAddData] = useState<any>()
  const [defiRank, setDefiRank] = useState<any>()
  const [nftRank, setNftRank] = useState<any>()
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
    setTrendAddData(TrendAddDatas)
  }
  const DeFiTrend = async () => {
    const defiRanks = (await getCmcDatas(5, 1, 'metaverse')).data.data.Metaverse.data.cryptoCurrencyList
    const defiRankData = defiRanks.map(
      (item: {
        symbol: any
        quotes: {
          volume24h: any
          percentChange24h: any
          price: any
        }[]
        id: any
        percentChange24h: any
        volume24h: any
      }) => {
        return {
          name: { text: item.symbol, id: item.id },
          oneDay: item.quotes[2].percentChange24h,
          volume: item.quotes[2].volume24h,
          price: item.quotes[2].price,
          id: item.id,
        }
      }
    )
    setDefiRank(defiRankData)
  }
  const NftTrend = async () => {
    const nftData = (await getCmcDatas(5, 1, 'NFT')).data.data.NFT.data.collections
    const nftArr = nftData.map((item: { floorPriceUsd: any; volumeAT: any; marketCapUsd: any; name: any }) => {
      return {
        collection: item.name,
        mkt: item.marketCapUsd,
        volume: item.volumeAT,
        price: item.floorPriceUsd,
      }
    })
    setNftRank(nftArr)
  }

  getGraphData('1d').then((res) => {
    if (res.data.code === '200') {
      const GAMEFI = res.data.data.GAMEFI.volume
      const DEFI = res.data.data.DEFI.volume
      const NFT = res.data.data.NFT.volume
      const time = res.data.data.time.time.map((item: string | number | Date) => {
        const date = new Date(item)
        return `${date.getMonth() + 1}-${date.getDate()}`
      })
      localStorage.setItem('time', time.join('**'))
      setChartData([
        {
          name: 'DEFI',
          data: DEFI,
        },
        {
          name: 'GAMEFI',
          data: GAMEFI,
        },
        {
          name: 'NFT',
          data: NFT,
        },
      ])
    }
  })
  const style = {
    display: 'flex',
    alignItems: 'flex-start',
  }

  const placeholder = (
    <div style={style}>
      <div>
        <Skeleton.Paragraph className="SkeletonParagraph" rows={1} />
      </div>
    </div>
  )
  useEffect(() => {
    formataData()
    AddressesData()
    DeFiTrend()
    NftTrend()
  }, [])

  return (
    <div className="grid">
      <Skeleton placeholder={placeholder} loading={false} active>
        <Row className="Tabss">
          <Tabss value={tabsData} />
        </Row>
      </Skeleton>
      <Row gutter={{ xs: 24, sm: 24, md: 24, lg: 24, xl: 24, xxl: 24 }}>
        <Col xs={16} sm={16} md={16} lg={16} xl={16}>
          <DeFi chartData={chartData} />
        </Col>
        <Col xs={8} sm={8} md={8} lg={8} xl={8} className="Trending">
          <Trending value={TrendAddData} />
        </Col>
      </Row>
      <Row gutter={{ xs: 24, sm: 24, md: 24, lg: 24, xl: 24, xxl: 24 }} className="mt">
        <Col xs={12} sm={12} md={12} lg={12} xl={12}>
          <DeFiTrending value={defiRank} />
        </Col>
        <Col xs={12} sm={12} md={12} lg={12} xl={12}>
          <NFTTrending value={nftRank} />
        </Col>
      </Row>
    </div>
  )
}
