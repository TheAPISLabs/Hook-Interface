import arrow from 'assets/images/logo/arrow.png'
import axieIcon from 'assets/images/logo/axieIcon.png'
import BigNumber from 'bignumber.js'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components/macro'

import { tokenTokentrans } from '../../../hook/hook'
import { isMobile } from './until.js'
import { dateDiff, toThousands } from './until.js'
export default function BuyAxie(props: any) {
  console.log(props, 'props')
  const { address } = props
  const [normalDate, setNormalDate] = useState([])
  const [ethPrice, setEthPrice] = useState<any>(0)
  const TitleText = styled.div`
    color: rgba(255, 255, 255, 1);
    font-size: 24px;
    font-weight: 500;
    text-align: left;
    line-height: 32px;
    margin: 55px 0 30px 0;
  `
  const ActiviesCard = styled.div`
    width: 100%;
  `
  const HeaderImgFlex = styled.div`
    display: flex;
  `
  const ActiviesFlex = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: rgba(228, 228, 228, 0.1);
    width: 100%;
    margin-bottom: 12px;
    border-radius: 16px;
    height: 68px;
    padding-right: 4px;
    padding-left: 4px;
  `
  const NFTImage = styled.img`
    width: 50px;
    height: 50px;
  `
  const NumberFlex = styled.div`
    margin-left: 8px;
    justify-content: center;
    display: flex;
  `
  const AxieFlex = styled.div`
    width: 77px;
    height: 18px;
    padding: 0px 4px;
    background: rgb(251, 154, 4);
    line-height: 18px;
    color: white;
    display: flex;
    align-items: center;
    border-radius: 3px;
    justify-content: center;
    margin: 16px 0px 10px;
  `
  const AxieIconImage = styled.img`
    width: 10px;
    height: 12px;
  `
  const NumbersText = styled.span`
    font-size: 10px;
  `
  const RightTimeFlex = styled.div`
    display: flex;
    align-items: center;
  `
  const RightFlexBox = styled.div`
    // display: flex;
    font-size: 10px;
  `
  const EthValueFlex = styled.div`
    display: flex;
    font-weight: 600;
    align-items: center;
    justify-content: flex-end;
  `
  const IconBox = styled.text`
    margin-right: 6px;
    color: rgba(255, 255, 255, 1);
    font-size: 10px;
  `
  const EthValueText = styled.text`
    color: rgba(255, 255, 255, 1);
    font-size: 10px;
    font-weight: 400;
    font-family: 'Inter';
    text-align: right;
    line-height: 20px;
  `
  const PriceText = styled.div`
    color: rgba(178, 179, 189, 1);
    font-size: 10px;
    font-weight: 400;
    font-family: 'Inter';
    text-align: right;
    line-height: 20px;
  `
  const TimeText = styled.div`
    color: rgba(178, 179, 189, 1);
    font-size: 10px;
    font-weight: 400;
    font-family: 'Inter';
    text-align: right;
    line-height: 20px;
  `
  const ArrowImage = styled.img`
    width: 20px;
    height: 20px;
    margin-left: 10px;
    cursor: pointer;
  `
  useEffect(() => {
    setInterval(() => {
      return setEthPrice(localStorage.getItem('ethPrice') ?? 0)
    }, 10000)
    tokenTokentrans(isMobile() ? 3 : 9, 1, address).then((res) => {
      setNormalDate(res.data.data.data)
    })
  }, [])
  return (
    <div>
      <TitleText>Trading Activies</TitleText>
      <ActiviesCard>
        {normalDate.length > 0 &&
          normalDate.map((item: any, index: any) => (
            <ActiviesFlex key={index}>
              <HeaderImgFlex>
                {item.imageUrl ? <NFTImage src={item.imageUrl} /> : ''}
                <NumberFlex>
                  <AxieFlex>
                    <AxieIconImage src={axieIcon} />
                    <NumbersText>#{item.blockNo}</NumbersText>
                  </AxieFlex>
                </NumberFlex>
              </HeaderImgFlex>
              <RightTimeFlex>
                <RightFlexBox>
                  <EthValueFlex>
                    <IconBox>Ξ</IconBox>
                    <EthValueText>{new BigNumber(item.ethValue).toFixed(2)}</EthValueText>
                  </EthValueFlex>
                  <PriceText>
                    $
                    {toThousands(
                      new BigNumber(new BigNumber(item.ethValue).toFixed(2)).times(ethPrice).toFixed(2).toString()
                    )}
                  </PriceText>
                  <TimeText>{dateDiff(item.time * 1000, null)}</TimeText>
                </RightFlexBox>
                <ArrowImage
                  src={arrow}
                  onClick={() => {
                    window.open(`https://etherscan.io/tx/${item.txid}`)
                  }}
                ></ArrowImage>
              </RightTimeFlex>
            </ActiviesFlex>
          ))}
      </ActiviesCard>
    </div>
  )
}
function useColorModeValue(arg0: string, arg1: string) {
  throw new Error('Function not implemented.')
}
