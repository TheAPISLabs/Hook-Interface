import '../index.css'

import React from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components/macro'

import Vector from '../../../assets/images/logo/passImg.png'
export default function PassCard() {
  const history = useHistory()
  const PassCardFlex = styled.div`
    background: linear-gradient(135deg, #868cff 0%, #4318ff 100%);
    border-radius: 24px;
    width: 228px;
    height: 190px;
    cursor: pointer;
    @media screen and (max-width: 1440px) {
      background: linear-gradient(135deg, #868cff 0%, #4318ff 100%);
      border-radius: 18px;
      width: 171px;
      height: 142px;
      cursor: pointer;
    }
  `
  const CardBox = styled.div`
    width: 160px;
    height: 100px;
    position: absolute;
    top: -50px;
    box-shadow: 0px -1px 17px 7px #060d2b8c;
    transform: rotate(-15deg);
    top: -50px;
    left: 15%;
    transition: all 0.5s;
    &:hover {
      transform: rotate(0deg);
    }
    @media screen and (max-width: 1440px) {
      width: 146px;
      height: 90px;
      position: absolute;
      top: -50px;
      box-shadow: 0px -1px 17px 7px #060d2b8c;
      transform: rotate(-15deg);
      top: -50px;
      left: 6%;
    }
  `
  const CardImage = styled.img`
    width: 160px;
    height: 100px;
    @media screen and (max-width: 1440px) {
      width: 146px;
      height: 90px;
    }
  `
  const HookText = styled.div`
    font-size: 16px;
    color: #ffffff;
    font-weight: 700;
    padding-top: 84px;
    margin-bottom: 10px;
    text-align: center;
    @media screen and (max-width: 1440px) {
      font-size: 12px;
      color: #ffffff;
      font-weight: 700;
      padding-top: 54px;
      margin-bottom: 7px;
      text-align: center;
    }
  `
  const ToText = styled.div`
    font-size: 14px;
    color: #e9edf7;
    font-weight: 500;
    letter-spacing: -0.28px;
    text-align: center;
    @media screen and (max-width: 1440px) {
      font-size: 10px;
      color: #e9edf7;
      font-weight: 500;
      letter-spacing: -0.21px;
      text-align: center;
    }
  `
  return (
    <PassCardFlex
      onClick={() => {
        history.push({ pathname: '/hookpass' })
      }}
    >
      <CardBox>
        <CardImage src={Vector} />
      </CardBox>
      <HookText>Get Hook Pass</HookText>

      <ToText>
        To get access to all features, <br />
        learn more here!{' '}
      </ToText>
    </PassCardFlex>
  )
}
