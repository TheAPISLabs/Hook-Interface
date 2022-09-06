import React from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components/macro'

import searchErr from '../../assets/images/logo/searchErr.png'
export default function ErrorPage(props: any) {
  const history = useHistory()
  const ErrorPageBox = styled.div`
    padding: 80px 30px 30px 30px;
    width: 100%;
    @media screen and (max-width: 1440px) {
      padding: 60px 30px 30px 30px;
      width: 100%;
    }
  `
  const ErrorText = styled.div`
    font-size: 48px;
    font-weight: 800;
    color: #fff;
    @media screen and (max-width: 1440px) {
      font-size: 34px;
      font-weight: 800;
      color: #fff;
    }
  `
  const ErrorTexts = styled.div`
    width: 500px;
    margin-top: 20px;
    margin-bottom: 40px;
    font-size: 14px;
    color: #b9bec7;
    @media screen and (max-width: 1440px) {
      width: 400px;
      margin-top: 18px;
      margin-bottom: 24px;
      font-size: 12px;
      color: #b9bec7;
    }
  `
  const BackBnt = styled.div`
    width: 300px;
    border-radius: 24px;
    background: rgb(117, 81, 255);
    color: rgb(255, 255, 255);
    font-weight: 600;
    text-align: center;
    line-height: 84px;
    cursor: pointer;
    @media screen and (max-width: 1440px) {
      width: 213px;
      height: 60px;
      border-radius: 17px;
      background: rgb(117, 81, 255);
      color: rgb(255, 255, 255);
      font-weight: 400;
      text-align: center;
      line-height: 60px;
      cursor: pointer;
    }
  `
  const BackImage = styled.img`
    width: 872px;
    height: 544px;
    display: flex;
    margin-left: 494px;
    margin-top: -130px;
    margin-bottom: 100px;
    @media screen and (max-width: 1440px) {
      width: 619px;
      height: 386px;
      display: flex;
      margin-left: 494px;
      margin-top: -130px;
      margin-bottom: 100px;
    }
  `

  return (
    <ErrorPageBox>
      <ErrorText>Search not found</ErrorText>
      <ErrorTexts>
        Oops! The search string you entered was: asdasd adqewDqw Sorry! <br />
        This isan invalid search string.
        <br /> If you think this is a problem with us, please tell us.
      </ErrorTexts>
      <BackBnt
        className="VIewBtn"
        onClick={() => {
          history.push({ pathname: '/layout/portfolioTrack' })
        }}
      >
        Back home
      </BackBnt>
      <BackImage src={searchErr}></BackImage>
    </ErrorPageBox>
  )
}
