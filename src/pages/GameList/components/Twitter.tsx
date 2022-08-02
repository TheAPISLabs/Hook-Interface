import '../index.css'

import React, { useEffect, useState } from 'react'
import styled from 'styled-components/macro'

import { getTwitterList } from '../../../hook/hook'
import { dateDiff } from '../../../hook/untils'

export default function Twitter() {
  const [TwitterData, setTwitterData] = useState<any>()
  const TwitterBigBox = styled.div`
    overflow: hidden;
    height: 1003px;
    @media screen and (max-width: 1440px) {
      overflow: hidden;
      height: 756px;
    }
  `
  const TwitterTitle = styled.div`
    color: rgba(255, 255, 255, 1);
    font-size: 24px;
    font-weight: 500;
    text-align: left;
    margin-bottom: 23px;
    @media screen and (max-width: 1440px) {
      color: rgba(255, 255, 255, 1);
      font-size: 18px;
      font-weight: 500;
      text-align: left;
      margin-bottom: 16px;
    }
  `
  const TwitterBox = styled.div`
    max-height: 911px;
    margin-left: 0px;
    padding-right: 0px;
    overflow-y: auto;
    @media screen and (max-width: 1440px) {
      max-height: 686px;
      margin-left: 0px;
      padding-right: 0px;
      overflow-y: auto;
    }
  `
  const TwitterDatas = styled.div`
    display: flex;
    vertical-align: top;
    margin-top: 38px;
    @media screen and (max-width: 1440px) {
      display: flex;
      vertical-align: top;
      margin-top: 29px;
    }
  `
  const TwitterImageBox = styled.div`
    width: 56px;
    height: 56px;
    margin-right: 20px;
    @media screen and (max-width: 1440px) {
      width: 42px;
      height: 42px;
      margin-right: 15px;
    }
  `
  const TwitterImage = styled.img`
    border-radius: 50%;
    width: 56px;
    height: 56px;
    @media screen and (max-width: 1440px) {
      width: 42px;
      height: 42px;
      border-radius: 50%;
    }
  `
  const TwitterTextBox = styled.div``
  const TwitterNameBox = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 21px;
    @media screen and (max-width: 1440px) {
      display: flex;
      align-items: center;
      margin-bottom: 15px;
    }
  `
  const TwitterName = styled.div`
    color: rgba(255, 255, 255, 1);
    font-size: 14px;
    font-weight: 500;
    text-align: left;
    @media screen and (max-width: 1440px) {
      color: rgba(255, 255, 255, 1);
      font-size: 10px;
      font-weight: 400;
      text-align: left;
    }
  `
  const TwitterScreenName = styled.div`
    color: rgba(178, 179, 189, 1);
    font-size: 13px;
    font-weight: 500;
    text-align: left;
    @media screen and (max-width: 1440px) {
      color: rgba(178, 179, 189, 1);
      font-size: 9px;
      font-weight: 400;
      text-align: left;
    }
  `
  const TwitterTime = styled.div`
    color: rgba(178, 179, 189, 1);
    font-size: 13px;
    font-weight: 500;
    text-align: left;
    @media screen and (max-width: 1440px) {
      color: rgba(178, 179, 189, 1);
      font-size: 9px;
      font-weight: 400;
      text-align: left;
    }
  `
  const TwitterChatBox = styled.div`
    background: rgba(228, 228, 228, 0.1);
    box-sizing: border-box;
    border-radius: 20px 20px 20px 4px;
    padding: 16px 24px;
    @media screen and (max-width: 1440px) {
      background: rgba(228, 228, 228, 0.1);
      box-sizing: border-box;
      border-radius: 15.0591px 15.0591px 15.0591px 3.01181px;
      padding: 11px 18px;
    }
  `
  const TwitterChat = styled.div`
    color: rgba(255, 255, 255, 0.6);
    font-size: 14px;
    font-weight: 500;
    text-align: left;
    line-height: 24px;
    @media screen and (max-width: 1440px) {
      color: rgba(255, 255, 255, 0.6);
      font-size: 10px;
      font-weight: 400;
      text-align: left;
      line-height: 18px;
    }
  `
  const TwitterChatImg = styled.img`
    margin-top: 7px;
    width: 306px;
    height: 310px;
    @media screen and (max-width: 1440px) {
      margin-top: 4px;
      width: 230px;
      height: 233px;
    }
  `

  useEffect(() => {
    getTwitterList().then((res) => {
      console.log(res.data.data)
      setTwitterData(res.data.data)
    })
  }, [])
  return (
    <TwitterBigBox className="afterShandow">
      <TwitterTitle className="font-Inter-SemiBold">Twitter</TwitterTitle>

      <TwitterBox>
        {TwitterData &&
          TwitterData.map((item: any, index: any) => {
            return (
              <TwitterDatas key={index}>
                <TwitterImageBox>
                  <TwitterImage src={item.profileImageUrlHttps} />
                </TwitterImageBox>
                <TwitterTextBox>
                  <TwitterNameBox>
                    <TwitterName>{item.name}</TwitterName>
                    <TwitterScreenName>@{item.screenName}</TwitterScreenName>
                    <TwitterTime>{dateDiff(item.createdAt, null)}</TwitterTime>
                  </TwitterNameBox>
                  <TwitterChatBox className="chatFrame">
                    <TwitterChat className="chatFullText">
                      {item.fullText}
                      {item?.mediaUrl ? <TwitterChatImg src={item.mediaUrl} alt="" /> : ''}
                    </TwitterChat>
                  </TwitterChatBox>
                </TwitterTextBox>
              </TwitterDatas>
            )
          })}
      </TwitterBox>
    </TwitterBigBox>
  )
}
