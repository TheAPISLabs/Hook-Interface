import '../index.css'

import { IconChevronDown, IconHelpCircle } from '@douyinfe/semi-icons'
import { Dropdown, Popover, Tag } from '@douyinfe/semi-ui'
import React, { useEffect, useState } from 'react'
import Masonry from 'react-masonry-css'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components/macro'

import { getGameItemsDatas } from '../../../hook/hook'
import { formatNumber } from '../../../hook/untils'
import { isMobile } from '../../GameDetails/components/until.js'
export default function Ranking(props: any) {
  const { gameData } = props
  const history = useHistory()
  const [GameCardData, setGameCardData] = useState(gameData)
  const [isShow, setIsshow] = useState(false)
  const [idx, setIdx] = useState('')
  const [showText, setShowText] = useState('SORT')
  useEffect(() => {
    //   const gameListDataStr = localStorage.getItem('gameListData')
    //   const gameListDataJson = JSON.parse(gameListDataStr).records
    getGameItemsDatas(1, 10).then((res) => {
      localStorage.setItem('gameListData', JSON.stringify(res.data.data))
      setGameCardData(res.data.data.records)
    })
  }, [gameData])
  const chooseSort = (type: any) => {
    getGameItemsDatas(1, 10, type).then((res) => {
      localStorage.setItem('gameListData', JSON.stringify(res.data.data))
      setGameCardData(res.data.data.records)
    })
  }
  const TrendingGamesTitleBox = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 24px;
  `
  const MobileTrendingGamesBox = styled.div`
    width: 100%;
    margin-top: 30px;
  `
  const TrendingGamesBox = styled.div`
    width: 100%;
  `

  const Title = styled.text`
    color: rgba(255, 255, 255, 1);
    font-size: 24px;
    font-weight: 500;
    font-family: 'Inter';
    text-align: left;
    line-height: 56px;
    @media screen and (max-width: 1440px) {
      color: rgba(255, 255, 255, 1);
      font-size: 18px;
      font-weight: 500;
      font-family: 'Inter';
      text-align: left;
    }
  `
  const MobileTitle = styled.text`
    color: rgba(255, 255, 255, 1);
    font-size: 24px;
    font-weight: 600;
    font-family: 'Inter';
    text-align: left;
  `
  const MoreTitle = styled.text`
    color: rgba(255, 255, 255, 1);
    font-size: 24px;
    font-weight: 500;
    font-family: 'Inter';
    text-align: left;
    @media screen and (max-width: 1440px) {
      color: rgba(255, 255, 255, 1);
      font-size: 18px;
      font-weight: 500;
      font-family: 'Inter';
      text-align: left;
    }
    &:hover {
      cursor: pointer;
      opacity: 0.6;
    }
  `
  const MobileMoreBtn = styled.div`
    width: 327px;
    height: 56px;
    background: #6c5dd3;
    border-radius: 16px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 56px;
    text-align: center;
    color: #ffffff;
    margin: 52px auto;
  `
  const GameCardDataBox = styled.div`
    border-radius: 24px;
    background: rgb(17, 28, 68);
    margin-bottom: 20px;
    width: 100%;
    @media screen and (max-width: 1440px) {
      border-radius: 18px;
      background: rgb(17, 28, 68);
      margin-bottom: 20px;
      width: 100%;
    }
  `
  const MobileGameCardDataBox = styled.div`
    border-radius: 24px;
    background: rgb(17, 28, 68);
    margin-bottom: 24px;
    width: 100%;
  `
  const GameCardImageBox = styled.div`
    cursor: pointer;
  `
  const GameCardImage = styled.img`
    border-radius: 24px 24px 0px 0px;
    width: 100%;
    height: 170px;
    @media screen and (max-width: 1440px) {
      border-radius: 24px 24px 0px 0px;
      width: 100%;
      height: 128px;
    }
  `
  const MobileGameCardImage = styled.img`
    border-radius: 24px 24px 0px 0px;
    width: 100%;
    height: 170px;
  `
  const GameCardNameBox = styled.div`
    box-sizing: border-box;
    padding: 11px;
  `
  const MobileGameCardNameBox = styled.div`
    box-sizing: border-box;
    padding: 24px;
  `
  const GameCardName = styled.div`
    color: rgb(255, 255, 255);
    font-weight: 500;
    text-align: left;
    line-height: 24px;
    font-size: 18px;
    @media screen and (max-width: 1440px) {
      color: rgb(255, 255, 255);
      font-weight: 500;
      text-align: left;
      line-height: 18px;
      font-size: 14px;
    }
  `
  const MobileGameCardName = styled.div`
    color: rgb(255, 255, 255);
    font-weight: 500;
    text-align: left;
    line-height: 24px;
    font-size: 18px;
  `
  const PlayFlexBox = styled.div`
    align-items: center;
    display: flex;
    margin-top: 12px;
  `
  const RingBox = styled.div`
    width: 8px;
    height: 8px;
    background: rgb(0, 73, 198);
    border-radius: 50%;
    margin-right: 10px;
    @media screen and (max-width: 1440px) {
      width: 6px;
      height: 6px;
      background: rgb(0, 73, 198);
      border-radius: 50%;
      margin-right: 5px;
    }
  `
  const MobileRingBox = styled.div`
    width: 8px;
    height: 8px;
    background: rgb(0, 73, 198);
    border-radius: 50%;
    margin-right: 10px;
  `
  const FollowersBox = styled.div`
    color: rgb(128, 129, 145);
    font-weight: 400;
    text-align: right;
    line-height: 16px;
    margin-right: 10px;
    font-size: 12px;
    @media screen and (max-width: 1440px) {
      color: rgb(128, 129, 145);
      font-weight: 400;
      text-align: right;
      line-height: 12px;
      margin-right: 7px;

      font-size: 9px;
    }
  `
  const MobileFollowersBox = styled.div`
    color: rgb(128, 129, 145);
    font-weight: 400;
    text-align: right;
    line-height: 16px;
    margin-right: 10px;
    font-size: 12px;
  `
  const RingplayBox = styled.div`
    width: 8px;
    height: 8px;
    background: rgb(127, 186, 122);
    border-radius: 50%;
    margin-right: 10px;
    @media screen and (max-width: 1440px) {
      width: 6px;
      height: 6px;
      background: rgb(127, 186, 122);
      border-radius: 50%;
      margin-right: 5px;
    }
  `
  const MobileRingplayBox = styled.div`
    width: 8px;
    height: 8px;
    background: rgb(127, 186, 122);
    border-radius: 50%;
    margin-right: 10px;
  `
  const PlayersBox = styled.div`
    color: rgb(128, 129, 145);
    font-weight: 400;
    text-align: right;
    line-height: 16px;
    font-size: 12px;
    @media screen and (max-width: 1440px) {
      color: rgb(128, 129, 145);
      font-weight: 400;
      text-align: right;
      line-height: 12px;
      margin-right: 2px;
      font-size: 9px;
    }
  `
  const MobilePlayersBox = styled.div`
    color: rgb(128, 129, 145);
    font-weight: 400;
    text-align: right;
    line-height: 16px;
    font-size: 12px;
  `
  const GameCardHeaderBox = styled.div`
    margin-top: 12px;
    align-items: center;
    display: flex;
  `
  const HeaderBox = styled.div`
    width: 24px;
    height: 24px;
    margin-right: 2%;
    @media screen and (max-width: 1440px) {
      width: 18px;
      height: 18px;
      margin-right: 2%;
    }
  `
  const MobileHeaderBox = styled.div`
    width: 24px;
    height: 24px;
    margin-right: 2%;
  `
  const HeaderImage = styled.img`
    width: 100%;
    max-width: 100%;
    height: 100%;
    border-radius: 50%;
  `
  const GameStudioBox = styled.div`
    color: rgb(255, 255, 255);
    font-weight: 500;
    text-align: left;
    line-height: 20px;
    font-size: 13px;
    @media screen and (max-width: 1440px) {
      color: rgb(255, 255, 255);
      font-weight: 500;
      text-align: left;
      line-height: 15px;
      font-size: 10px;
    }
  `
  const MobileGameStudioBox = styled.div`
    color: rgb(255, 255, 255);
    font-weight: 500;
    text-align: left;
    line-height: 20px;
    font-size: 13px;
  `
  const HSeparator = styled.div`
    display: flex;
    height: 1px;
    width: 100%;
    background: #fff5f514;
  `
  const AlphaBigBox = styled.div`
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 13px 21px 11px 21px;
    @media screen and (max-width: 1440px) {
      display: flex;
      justify-content: space-between;
      box-sizing: border-box;
      padding: 10px 12px 7px 19px;
    }
  `
  const MobileAlphaBigBox = styled.div`
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 13px 21px 11px 21px;
  `
  const AlphaBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
  `
  const Alpha = styled.div`
    border-radius: 8px;
    background: rgba(228, 228, 228, 0.1);
    color: rgb(95, 117, 238);
    font-weight: 400;
    text-align: center;
    margin-right: 8px;
    width: 80px;
    height: 24px;
    font-size: 13px;
    line-height: 24px;
    @media screen and (max-width: 1440px) {
      border-radius: 6px;
      background: rgba(228, 228, 228, 0.1);
      color: rgb(95, 117, 238);
      font-weight: 400;
      text-align: center;
      margin-right: 8px;
      width: 68px;
      height: 18px;
      font-size: 10px;
      line-height: 18px;
    }
  `
  const MobileAlpha = styled.div`
    border-radius: 8px;
    background: rgba(228, 228, 228, 0.1);
    color: rgb(95, 117, 238);
    font-weight: 400;
    text-align: center;
    margin-right: 8px;
    width: 80px;
    height: 24px;
    font-size: 13px;
    line-height: 24px;
  `
  const HideBox = styled.div`
    display: flex;
    align-items: center;
    user-select: none;
    cursor: pointer;
    color: rgba(128, 129, 145, 1);
    &:hover {
      color: #fff;
    }
  `
  const HideText = styled.div`
    font-weight: 400;
    margin-right: 7px;
    font-size: 12px;
    @media screen and (max-width: 1440px) {
      font-weight: 400;
      margin-right: 5px;
      font-size: 9px;
    }
  `
  const MobileHideText = styled.div`
    font-weight: 400;
    margin-right: 7px;
    font-size: 12px;
  `
  const InformationBox = styled.div``
  const ROIBox = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 16px;
    @media screen and (max-width: 1440px) {
      display: flex;
      align-items: center;
      margin-bottom: 16px;
    }
  `
  const MobileROIBox = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 16px;
  `
  const ROI = styled.div`
    color: rgb(128, 129, 145);
    font-weight: 400;
    text-align: left;
    width: 97px;
    font-size: 13px;
    @media screen and (max-width: 1440px) {
      color: rgb(128, 129, 145);
      font-weight: 400;
      text-align: left;
      width: 96px;
      font-size: 10px;
    }
  `
  const MobileROI = styled.div`
    color: rgb(128, 129, 145);
    font-weight: 400;
    text-align: left;
    width: 97px;
    font-size: 13px;
  `
  const ROINumBox = styled.div`
    color: rgb(255, 255, 255);
    font-weight: 400;
    text-align: left;
    font-size: 13px;
    @media screen and (max-width: 1440px) {
      color: rgb(255, 255, 255);
      font-weight: 400;
      text-align: left;
      font-size: 9px;
    }
  `
  const MobileROINumBox = styled.div`
    color: rgb(255, 255, 255);
    font-weight: 400;
    text-align: left;
    font-size: 13px;
  `
  const VolumeBox = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 16px;
    @media screen and (max-width: 1440px) {
      display: flex;
      align-items: center;
      margin-bottom: 11px;
    }
  `
  const MobileVolumeBox = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 16px;
  `
  const Volume = styled.div`
    color: rgb(128, 129, 145);
    font-weight: 400;
    text-align: left;
    width: 97px;
    font-size: 13px;
    @media screen and (max-width: 1440px) {
      color: rgb(128, 129, 145);
      font-weight: 400;
      text-align: left;
      width: 96px;
      font-size: 10px;
    }
  `
  const MobileVolume = styled.div`
    color: rgb(128, 129, 145);
    font-weight: 400;
    text-align: left;
    width: 97px;
    font-size: 13px;
  `
  const VolumeNumBox = styled.div`
    color: rgb(255, 255, 255);
    font-weight: 400;
    text-align: left;
    font-size: 13px;
    @media screen and (max-width: 1440px) {
      color: rgb(255, 255, 255);
      font-weight: 400;
      text-align: left;
      font-size: 9px;
    }
  `
  const MobileVolumeNumBox = styled.div`
    color: rgb(255, 255, 255);
    font-weight: 400;
    text-align: left;
    font-size: 13px;
  `
  const TotalNFTBox = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 16px;
    @media screen and (max-width: 1440px) {
      display: flex;
      align-items: center;
      margin-bottom: 11px;
    }
  `
  const MobileTotalNFTBox = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 16px;
  `
  const TotalNFT = styled.div`
    color: rgb(128, 129, 145);
    font-weight: 400;
    text-align: left;
    width: 97px;
    font-size: 13px;
    @media screen and (max-width: 1440px) {
      color: rgb(128, 129, 145);
      font-weight: 400;
      text-align: left;
      width: 96px;
      font-size: 10px;
    }
  `
  const MobileTotalNFT = styled.div`
    color: rgb(128, 129, 145);
    font-weight: 400;
    text-align: left;
    width: 97px;
    font-size: 13px;
  `
  const TotalNFTNum = styled.div`
    color: rgb(255, 255, 255);
    font-weight: 400;
    text-align: left;
    font-size: 13px;
    @media screen and (max-width: 1440px) {
      color: rgb(255, 255, 255);
      font-weight: 400;
      text-align: left;
      font-size: 9px;
    }
  `
  const MobileTotalNFTNum = styled.div`
    color: rgb(255, 255, 255);
    font-weight: 400;
    text-align: left;
    font-size: 13px;
  `
  const BtnFlex = styled.div`
    display: flex;
    justify-content: flex-end;
  `
  const BynSwapBox = styled.div`
    width: 101px;
    height: 27px;
    border-radius: 8px;
    opacity: 1;
    background: rgba(108, 93, 211, 1);
    @media screen and (max-width: 1440px) {
      width: 76px;
      height: 20px;
      border-radius: 6px;
      opacity: 1;
      background: rgba(108, 93, 211, 1);
    }
  `
  const MobileBynSwapBox = styled.div`
    width: 101px;
    height: 27px;
    border-radius: 8px;
    opacity: 1;
    background: rgba(108, 93, 211, 1);
  `
  const SwapText = styled.div`
    color: rgba(255, 255, 255, 1);
    font-size: 12px;
    font-weight: 500;
    font-family: 'Inter';
    text-align: center;
    line-height: 27px;
    @media screen and (max-width: 1440px) {
      color: rgba(255, 255, 255, 1);
      font-size: 10px;
      font-weight: 500;
      font-family: 'Inter';
      text-align: center;
      line-height: 20px;
    }
  `
  const MobileSwapText = styled.div`
    color: rgba(255, 255, 255, 1);
    font-size: 12px;
    font-weight: 500;
    font-family: 'Inter';
    text-align: center;
    line-height: 27px;
  `

  return (
    <>
      {isMobile() ? (
        <MobileTrendingGamesBox>
          <MobileTitle>Trending games</MobileTitle>
          {/* <MobileMoreBtn
            onClick={() => {
              history.push({ pathname: '/moregame' })
            }}
          >
            Load More
          </MobileMoreBtn> */}
          <div
            style={{
              display: 'Flex',
              justifyContent: 'end',
              marginTop: '33px',
              marginBottom: '38px',
            }}
          >
            <Dropdown
              render={
                <Dropdown.Menu>
                  <Dropdown.Item
                    onClick={() => {
                      chooseSort('liked')
                      setShowText('LIKE')
                    }}
                  >
                    LIKE
                  </Dropdown.Item>
                  <Dropdown.Item
                    onClick={() => {
                      chooseSort('initialReleaseDate')
                      setShowText('INITIALRELEASE DATE')
                    }}
                  >
                    INITIALRELEASE DATE
                  </Dropdown.Item>
                </Dropdown.Menu>
              }
            >
              <Tag> {showText}</Tag>
            </Dropdown>
          </div>
          <TrendingGamesBox>
            <Masonry
              breakpointCols={{
                default: 3,
                1400: 3,
                1100: 3,
                700: 2,
                500: 1,
              }}
              className="note-masonry-grid"
              columnClassName="note-masonry-grid_column"
            >
              {GameCardData?.length > 0 &&
                GameCardData.map((item: any, index: any) => {
                  return (
                    <MobileGameCardDataBox key={`item+${index}`}>
                      <GameCardImageBox
                        onClick={() => {
                          localStorage.setItem('game', JSON.stringify(item))
                          history.push({
                            pathname: '/gamedetails',
                          })
                        }}
                      >
                        <MobileGameCardImage src={item?.imgs[0].url} alt="" />
                      </GameCardImageBox>
                      <MobileGameCardNameBox>
                        <MobileGameCardName>{item.name}</MobileGameCardName>

                        <PlayFlexBox>
                          <MobileRingBox></MobileRingBox>
                          <MobileFollowersBox>{formatNumber(item.twitterFollower)} followers</MobileFollowersBox>
                          <MobileRingplayBox></MobileRingplayBox>
                          <MobilePlayersBox>{formatNumber(item.top[0].activeUsers)} players</MobilePlayersBox>
                        </PlayFlexBox>
                        <GameCardHeaderBox>
                          <MobileHeaderBox>
                            <HeaderImage src={item.gameUserIcon} alt="" />
                          </MobileHeaderBox>
                          <MobileGameStudioBox>{item.gameStudio}®</MobileGameStudioBox>
                        </GameCardHeaderBox>
                      </MobileGameCardNameBox>
                      <HSeparator></HSeparator>
                      <MobileAlphaBigBox>
                        <AlphaBox className="PopoverBox">
                          <MobileAlpha>Alpha</MobileAlpha>
                          {/* <Menu>
                            <MenuButton p="0px">
                              <Icon
                                as={MdHelpOutline}
                                color="#808191"
                                w={{
                                  base: '16px',
                                  md: '14px',
                                  xl: '16px',
                                  '2xl': '20px',
                                }}
                                h={{
                                  base: '16px',
                                  md: '14px',
                                  xl: '16px',
                                  '2xl': '20px',
                                }}
                              />
                            </MenuButton>
                            <MenuList
                              p="0px"
                              background="var(--chakra-colors-navy-900)"
                              borderRadius="20px"
                              border="none"
                            >
                              <Flex w="100%" mb="0px">
                                <Text p="10px 20px" w="100%" fontSize="sm" fontWeight="700">
                                  Initial release date： {formatDate(item.initialReleaseDate || 1582905600000)}
                                </Text>
                              </Flex>
                            </MenuList>
                          </Menu> */}
                          <Popover
                            position="bottomLeft"
                            content={<article className="articleBox">Initial release date: Aug 2021</article>}
                          >
                            <Tag>
                              <IconHelpCircle />
                            </Tag>
                          </Popover>
                        </AlphaBox>
                        <HideBox
                          onClick={(e) => {
                            setIsshow(!isShow)
                            // @ts-ignore
                            setIdx(e.target.getAttribute('data-idx'))
                            console.log(isShow, idx)
                          }}
                          data-idx={`${index}`}
                        >
                          <MobileHideText data-idx={`${index}`}>
                            {idx == index ? (isShow ? 'Hide' : 'Details') : 'Details'}
                          </MobileHideText>
                          {/* <Icon
                            as={MdKeyboardArrowDown}
                            data-idx={`${index}`}
                            transform={idx == index ? (isShow ? 'rotate(180deg)' : 'rotate(0deg)') : 'rotate(0deg)'}
                            w={{
                              base: '16px',
                              md: '14px',
                              xl: '16px',
                              '2xl': '20px',
                            }}
                            h={{
                              base: '16px',
                              md: '14px',
                              xl: '16px',
                              '2xl': '20px',
                            }}
                          /> */}
                          <IconChevronDown
                            data-idx={`${index}`}
                            className={
                              idx == index
                                ? isShow
                                  ? 'MobileIconChevronDownBoxIShow'
                                  : 'MobileIconChevronDownBox'
                                : 'IconChevronDown'
                            }
                          />
                        </HideBox>
                      </MobileAlphaBigBox>
                      <InformationBox
                        className={
                          idx == index ? (isShow ? 'MobileInformationBoxIShow' : 'InformationBox') : 'InformationBoxHid'
                        }
                      >
                        <MobileROIBox>
                          <MobileROI>ROI</MobileROI>
                          <MobileROINumBox>{item.backPeriod}%</MobileROINumBox>
                        </MobileROIBox>
                        <MobileVolumeBox>
                          <MobileVolume>Volume</MobileVolume>
                          <MobileVolumeNumBox>{item.volume}</MobileVolumeNumBox>
                        </MobileVolumeBox>
                        <MobileTotalNFTBox>
                          <MobileTotalNFT>Total NFTs</MobileTotalNFT>
                          <MobileTotalNFTNum>{item.totalNFT}</MobileTotalNFTNum>
                        </MobileTotalNFTBox>
                        <BtnFlex>
                          <MobileBynSwapBox>
                            <MobileSwapText>swap</MobileSwapText>
                          </MobileBynSwapBox>
                        </BtnFlex>
                      </InformationBox>
                    </MobileGameCardDataBox>
                  )
                })}
            </Masonry>
          </TrendingGamesBox>
        </MobileTrendingGamesBox>
      ) : (
        <div>
          <TrendingGamesTitleBox>
            <div>
              <Title>Trending games</Title>
              <MoreTitle
                onClick={() => {
                  history.push({ pathname: '/moregame' })
                }}
              >
                (more)
              </MoreTitle>
            </div>
            <div>
              <Dropdown
                render={
                  <Dropdown.Menu>
                    <Dropdown.Item
                      onClick={() => {
                        chooseSort('liked')
                        setShowText('LIKE')
                      }}
                    >
                      LIKE
                    </Dropdown.Item>
                    <Dropdown.Item
                      onClick={() => {
                        chooseSort('initialReleaseDate')
                        setShowText('INITIALRELEASE DATE')
                      }}
                    >
                      INITIALRELEASE DATE
                    </Dropdown.Item>
                  </Dropdown.Menu>
                }
              >
                <Tag> {showText}</Tag>
              </Dropdown>
            </div>
          </TrendingGamesTitleBox>
          <TrendingGamesBox>
            <Masonry
              breakpointCols={{
                default: 3,
                1400: 3,
                1100: 3,
                700: 2,
                500: 1,
              }}
              className="note-masonry-grid"
              columnClassName="note-masonry-grid_column"
              style={{
                display: 'flex',
                justifyContent: 'space-between',
              }}
            >
              {GameCardData?.length > 0 &&
                GameCardData.map((item: any, index: any) => {
                  return (
                    <GameCardDataBox key={`item+${index}`}>
                      <GameCardImageBox
                        onClick={() => {
                          localStorage.setItem('game', JSON.stringify(item))
                          history.push({
                            pathname: '/gamedetails',
                          })
                        }}
                      >
                        <GameCardImage src={item?.imgs[0].url} alt="" />
                      </GameCardImageBox>
                      <GameCardNameBox>
                        <GameCardName>{item.name}</GameCardName>

                        <PlayFlexBox>
                          <RingBox></RingBox>
                          <FollowersBox>{formatNumber(item.twitterFollower)} followers</FollowersBox>
                          <RingplayBox></RingplayBox>
                          <PlayersBox>{formatNumber(item.top[0].activeUsers)} players</PlayersBox>
                        </PlayFlexBox>
                        <GameCardHeaderBox>
                          <HeaderBox>
                            <HeaderImage src={item.gameUserIcon} alt="" />
                          </HeaderBox>
                          <GameStudioBox>{item.gameStudio}®</GameStudioBox>
                        </GameCardHeaderBox>
                      </GameCardNameBox>
                      <HSeparator></HSeparator>
                      <AlphaBigBox>
                        <AlphaBox className="PopoverBox">
                          <Alpha>Alpha</Alpha>
                          {/* <Menu>
                            <MenuButton p="0px">
                              <Icon
                                as={MdHelpOutline}
                                color="#808191"
                                w={{
                                  base: '16px',
                                  md: '14px',
                                  xl: '16px',
                                  '2xl': '20px',
                                }}
                                h={{
                                  base: '16px',
                                  md: '14px',
                                  xl: '16px',
                                  '2xl': '20px',
                                }}
                              />
                            </MenuButton>
                            <MenuList
                              p="0px"
                              background="var(--chakra-colors-navy-900)"
                              borderRadius="20px"
                              border="none"
                            >
                              <Flex w="100%" mb="0px">
                                <Text p="10px 20px" w="100%" fontSize="sm" fontWeight="700">
                                  Initial release date： {formatDate(item.initialReleaseDate || 1582905600000)}
                                </Text>
                              </Flex>
                            </MenuList>
                          </Menu> */}
                          <Popover
                            position="bottomLeft"
                            content={<article className="articleBox">Initial release date: Aug 2021</article>}
                          >
                            <Tag>
                              <IconHelpCircle />
                            </Tag>
                          </Popover>
                        </AlphaBox>
                        <HideBox
                          onClick={(e) => {
                            setIsshow(!isShow)
                            // @ts-ignore
                            setIdx(e.target.getAttribute('data-idx'))
                            console.log(isShow, idx)
                          }}
                          data-idx={`${index}`}
                        >
                          <HideText data-idx={`${index}`}>
                            {idx == index ? (isShow ? 'Hide' : 'Details') : 'Details'}
                          </HideText>
                          {/* <Icon
                            as={MdKeyboardArrowDown}
                            data-idx={`${index}`}
                            transform={idx == index ? (isShow ? 'rotate(180deg)' : 'rotate(0deg)') : 'rotate(0deg)'}
                            w={{
                              base: '16px',
                              md: '14px',
                              xl: '16px',
                              '2xl': '20px',
                            }}
                            h={{
                              base: '16px',
                              md: '14px',
                              xl: '16px',
                              '2xl': '20px',
                            }}
                          /> */}
                          <IconChevronDown
                            data-idx={`${index}`}
                            className={
                              idx == index
                                ? isShow
                                  ? 'IconChevronDownBoxIShow'
                                  : 'IconChevronDownBox'
                                : 'IconChevronDown'
                            }
                          />
                        </HideBox>
                      </AlphaBigBox>
                      <InformationBox
                        className={
                          idx == index ? (isShow ? 'InformationBoxIShow' : 'InformationBox') : 'InformationBoxHid'
                        }
                      >
                        <ROIBox>
                          <ROI>ROI</ROI>
                          <ROINumBox>{item.backPeriod}%</ROINumBox>
                        </ROIBox>
                        <VolumeBox>
                          <Volume>Volume</Volume>
                          <VolumeNumBox>{item.volume}</VolumeNumBox>
                        </VolumeBox>
                        <TotalNFTBox>
                          <TotalNFT>Total NFTs</TotalNFT>
                          <TotalNFTNum>{item.totalNFT}</TotalNFTNum>
                        </TotalNFTBox>
                        <BtnFlex>
                          <BynSwapBox>
                            <SwapText>swap</SwapText>
                          </BynSwapBox>
                        </BtnFlex>
                      </InformationBox>
                    </GameCardDataBox>
                  )
                })}
            </Masonry>
          </TrendingGamesBox>
        </div>
      )}
    </>
  )
}
