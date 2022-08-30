import React from 'react'
import styled from 'styled-components/macro'

import PassCard from '../../assets/images/logo/HookPASS.png'
import Free from '../../assets/images/logo/Subscription.png'
import PassImgs from '../../assets/img/logo/HookPassMobiles.png'
import { isMobile } from '../GameDetails/components/until.js'

export default function HookPass() {
  const HookPassBigBox = styled.div`
    margin: auto;
    width: 920px;
    @media screen and (max-width: 1440px) {
      margin: auto;
      width: 690px;
    }
    @media screen and (max-width: 700px) {
      text-align: center;
      width: 100%;
    }
  `
  const HookPassBox = styled.div`
    width: 920px;
    height: 1070px;
    background-color: #111c44;
    padding: 54px 81px 5px 78px;
    @media screen and (max-width: 1440px) {
      width: 690px;
      height: 803px;
      background-color: #111c44;
      padding: 40px 61px 2.5px 65px;
    }
  `
  const FlexBox = styled.div`
    display: flex;
  `
  const HookPassBoxTitle = styled.div`
    width: 358px;
    margin-top: 36px;
    @media screen and (max-width: 1440px) {
      width: 269px;
      margin-top: 24px;
    }
  `
  const TextBox = styled.div`
    width: 358px;
    height: 76px;
    border-right: solid 1px #55575ca3;
    @media screen and (max-width: 1440px) {
      width: 269px;
      height: 56px;
      border-right: solid 1px #55575ca3;
    }
  `
  const HOOKPASSText = styled.div`
    font-family: Helvetica;
    font-style: normal;
    font-weight: 400;
    font-size: 44px;
    line-height: 44px;
    letter-spacing: -0.88px;
    color: #ffffff;
    @media screen and (max-width: 1440px) {
      font-family: Helvetica;
      font-style: normal;
      font-weight: 400;
      font-size: 33px;
      line-height: 33px;
      letter-spacing: -0.88px;
      color: #ffffff;
    }
  `
  const APISText = styled.div`
    font-family: Helvetica;
    font-weight: 400;
    font-size: 20px;
    line-height: 20px;
    letter-spacing: -0.4px;
    color: #ffffff;
    margin-top: 12px;
    @media screen and (max-width: 1440px) {
      font-family: Helvetica;
      font-weight: 400;
      font-size: 15px;
      line-height: 15px;
      letter-spacing: -0.4px;
      color: #ffffff;
      margin-top: 9px;
    }
  `
  const HookText = styled.div`
    font-family: Inter;
    font-weight: 500;
    font-size: 16px;
    line-height: 25px;
    letter-spacing: -0.32px;
    color: #a3aed0;
    margin-top: 32px;
    @media screen and (max-width: 1440px) {
      font-family: Inter;
      font-weight: 500;
      font-size: 12px;
      line-height: 18px;
      letter-spacing: -0.32px;
      color: #a3aed0;
      margin-top: 24px;
    }
  `
  const HookCardBox = styled.div`
    margin-left: 75px;
    @media screen and (max-width: 1440px) {
      margin-left: 72px;
    }
  `
  const HookCardImage = styled.img`
    width: 330px;
    height: 208px;
    @media screen and (max-width: 1440px) {
      width: 230px;
      height: 144px;
    }
  `
  const FreeBox = styled.div`
    margin-top: 72px;
    @media screen and (max-width: 1440px) {
      margin-top: 54px;
    }
  `
  const FreeImage = styled.img`
    width: 765px;
    height: 747px;
    @media screen and (max-width: 1440px) {
      width: 574px;
      height: 562px;
    }
  `
  const PassImg = styled.img`
    width: 311px;
    height: 476px;
  `
  return (
    <>
      {isMobile() ? (
        <HookPassBigBox>
          <PassImg src={PassImgs}></PassImg>
        </HookPassBigBox>
      ) : (
        <HookPassBigBox>
          <HookPassBox>
            <FlexBox>
              <HookPassBoxTitle>
                <TextBox>
                  <HOOKPASSText>HOOK PASS</HOOKPASSText>
                  <APISText>By The APIS</APISText>
                </TextBox>

                <HookText>
                  Hook pass will be the key to premium features
                  <br />
                  and experiences.
                </HookText>
              </HookPassBoxTitle>
              <HookCardBox>
                <HookCardImage src={PassCard} />
              </HookCardBox>
            </FlexBox>
            <FreeBox>
              <FreeImage src={Free} />
            </FreeBox>
          </HookPassBox>
        </HookPassBigBox>
      )}
    </>
  )
}
