import './index.css'

import { IconSearch } from '@douyinfe/semi-icons'
import { IconChevronRight } from '@douyinfe/semi-icons'
// import { useHistory } from 'react-router-dom'
import { Input } from '@douyinfe/semi-ui'
import backLogo from 'assets/images/logo/BgImage.svg'
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components/macro'

import { getSearchRank } from '../../hook/hook'
export default function Track(props: any) {
  const { variant, background, children, placeholder, borderRadius, ...rest } = props
  const [inputValue, setInputValue] = useState('')
  const [TrendingData, setTrendingData] = useState([])
  const history = useHistory()
  const TrackBigBox = styled.div`
    padding-top: 80px;
    width: 100%;
  `
  const BackImage = styled.img`
    height: 250px;
    width: 100%;
    margin: auto;
  `
  const TrackTitle = styled.div`
    color: rgba(255, 255, 255, 1);
    font-size: 54px;
    font-weight: 500;
    font-family: 'Inter';
    text-align: center;
    line-height: 54px;
    letter-spacing: -1.08px;
    margin-top: 52px;
    text-align: center;
  `
  const TrackTitles = styled.div`
    color: rgba(163, 174, 208, 1);
    font-size: 18px;
    font-weight: 400;
    font-family: 'Inter';
    text-align: left;
    line-height: 24px;
    margin-top: 15px;
    text-align: center;
  `
  const InputBox = styled.div`
    margin: auto;
    margin-top: 50px;
    width: 860px;
  `
  const WalletFlex = styled.div`
  margin: auto;
  margin-top: 22px;
  width: 860px;
  alignItems="center";
  display: flex;
`
  const WalletText = styled.div`
    color: rgba(255, 255, 255, 1);
    font-size: 18px;
    font-weight: 700;
    font-family: 'Inter';
    text-align: left;
    line-height: 24px;
    margin-right: 20px;
  `
  const TrendingBox = styled.div`
    margin: auto;
    margin-top: 22px;
    width: 860px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  `
  const TrendingFlex = styled.div`
    display: flex;
    align-items: center;
    width: 322px;
    margin-bottom: 16px;
  `
  const FireIconBox = styled.div`
    margin-right: 14px;
    text-align: center;
    width: 17px;
    height: 24px;
    font-weight: 600;
    font-size: 18px;
    line-height: 24px;
    color: #a3aed0;
  `
  const NumberNftBox = styled.div`
    font-weight: 400;
    color: #3899d0;
    letter-spacing: -0.36px;
    width: 271px;
    overflow: hidden;
    display: block;
    word-break: keep-all;
    white-space: nowrap;
    text-overflow: ellipsis;
    cursor: pointer;
    &:hover {
      color: #4264a1;
    }
  `
  useEffect(() => {
    getSearchRank(6).then((res) => {
      setTrendingData(res.data.data)
    })
  })
  return (
    <TrackBigBox>
      <BackImage src={backLogo}></BackImage>
      <TrackTitle>Portfolio Track</TrackTitle>
      <TrackTitles>Track any wallets you want.</TrackTitles>
      <InputBox>
        <Input
          prefix={<IconSearch />}
          placeholder="Search by Ens/ Ethereum address "
          showClear
          // onChange={(value) => {
          //   setInputValue(value.target.value)
          // }}
          // onKeyDown={(res) => {
          //   if (res.key == 'Enter') {
          //     getSearchDatas(inputValue.toLowerCase()).then((searchRes) => {
          //       if (searchRes.data.code == 200) {
          //         if (searchRes.data.data.tokenBalance.code == 1) {
          //           localStorage.setItem('searchData', JSON.stringify(searchRes.data.data))
          //           localStorage.setItem('searchAddress', inputValue.toLowerCase())
          //           setSearchHeats(inputValue.toLowerCase())
          //           history.push({ pathname: '/admin/info' })
          //         } else {
          //           history.push({ pathname: '/admin/profile/searcherr' })
          //         }
          //       }
          //     })
          //   }
          // }}
        ></Input>
      </InputBox>
      <WalletFlex>
        <WalletText>Trending Wallet</WalletText>
        <IconChevronRight style={{ color: '#fff' }} size="extra-large" />
      </WalletFlex>
      <TrendingBox>
        {TrendingData.map((item: any, index: any) => {
          return (
            <TrendingFlex key={index}>
              <FireIconBox>
                {index === 0 ? (
                  //   <Image src={hot} width="17px" height="24px" />
                  <>🔥</>
                ) : index === 1 ? (
                  <div style={{ color: '#F13016' }}>{index}</div>
                ) : index === 2 ? (
                  <div style={{ color: '#FF6A36' }}>{index}</div>
                ) : index === 3 ? (
                  <div style={{ color: '#FFD44E' }}>{index}</div>
                ) : (
                  index
                )}
              </FireIconBox>
              <div>
                {/* <NumberNftBox
                  onClick={(e) => {
                    // console.log()
                    getSearchDatas(e.target.innerText.toLowerCase()).then((searchRes) => {
                      if (searchRes.data.code == 200) {
                        if (searchRes.data.data.tokenBalance.code == 1) {
                          localStorage.setItem('searchData', JSON.stringify(searchRes.data.data))
                          localStorage.setItem('searchAddress', e.target.innerText.toLowerCase())
                          setSearchHeats(e.target.innerText.toLowerCase())
                          history.push({ pathname: '/admin/info' })
                        } else {
                          history.push({
                            pathname: '/admin/profile/searcherr',
                          })
                        }
                      }
                    })
                  }}
                >
                  {item.searchName}
                </NumberNftBox> */}
              </div>
            </TrendingFlex>
          )
        })}
      </TrendingBox>
    </TrackBigBox>
  )
}
