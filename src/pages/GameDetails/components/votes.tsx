import '../index.css'

import { Toast } from '@douyinfe/semi-ui'
import soldIcon from 'assets/images/logo/saleIcon.png'
import saleIcon from 'assets/images/logo/soldIcon.png'
import volumeIcon from 'assets/images/logo/volumeIcon.png'
import BigNumber from 'bignumber.js'
// import { likedStatus } from '../../../hook/hook'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components/macro'

import { likedStatus } from '../../../hook/hook'
import { isMobile } from './until.js'
import { toThousands } from './until.js'
export default function Vote(props: any) {
  const { game } = props
  const uId = localStorage.getItem('uId')
  const moon = game.moon == 0 ? 1 : game.moon
  const ngmi = game.ngmi == 0 ? 1 : game.ngmi
  const [good, setGood] = useState('')
  const [bad, setBad] = useState('')
  const [choosMoon, setchoosMoon] = useState(false)
  useEffect(() => {
    setGood(((moon / (moon + ngmi)) * 100).toFixed(0) + '%')
    setBad(((ngmi / (moon + ngmi)) * 100).toFixed(0) + '%')
  }, [])
  const [isVote, voteFun] = useState(false)
  // const toast = useToast()
  const VoteBigBox = styled.div`
    width: 100%;
  `
  const VoteBox = styled.div`
    background: rgba(228, 228, 228, 0.1);
    margin: 62px 0;
    border-radius: 16px;
    height: 136px;
    display: flex;
    @media screen and (max-width: 1440px) {
      background: rgba(228, 228, 228, 0.1);
      margin: 32px 0;
      border-radius: 11px;
      height: 101px;
      display: flex;
    }
  `
  const MobileVoteBox = styled.div`
    background: rgba(228, 228, 228, 0.1);
    border-radius: 17px;
    height: 295px;
    width: 325px;
    margin: auto;
  `
  const PriceBox = styled.div`
    width: 30%;
    padding: 24px 0 32px 40px;
    border-right: 1px solid rgba(228, 228, 228, 0.1);
    letter-spacing: -1px;
    @media screen and (max-width: 1440px) {
      width: 30%;
      padding: 17px 0 28px 30px;
      border-right: 1px solid rgba(228, 228, 228, 0.1);
      letter-spacing: -1px;
    }
  `
  const MobilePriceBox = styled.div`
    width: 155px;
    height: 147px;
    padding: 20px;
    border-right: 1px solid rgba(228, 228, 228, 0.1);
    border-bottom: 1px solid rgba(228, 228, 228, 0.1);
    letter-spacing: -1px;
    display: inline-block;
  `
  const SupplyBox = styled.div`
    width: 30%;
    padding: 24px 0 32px 40px;
    letter-spacing: -1px;
    @media screen and (max-width: 1440px) {
      width: 30%;
      padding: 17px 0 28px 40px;
      letter-spacing: -1px;
    }
  `
  const MobileSupplyBox = styled.div`
    width: 162px;
    height: 147px;

    border-right: 1px solid rgba(228, 228, 228, 0.1);
    letter-spacing: -1px;
    display: inline-block;
  `
  const PriceFlex = styled.div`
    display: flex;
  `
  const ChooseFlex = styled.div`
    display: flex;
    border-top: 1px solid rgba(228, 228, 228, 0.1);
    padding: 25px 0 20px;
    margin-top: 0px;
    justify-content: space-between;
    @media screen and (max-width: 1440px) {
      display: flex;
      border-top: 1px solid rgba(228, 228, 228, 0.1);
      padding: 25px 0 20px;
      margin-top: 0px;
      justify-content: space-between;
    }
  `
  const PriceImage = styled.img`
    width: 16px;
    height: 16px;
    margin-right: 8px;
    @media screen and (max-width: 1440px) {
      width: 12px;
      height: 12px;
      margin-right: 6px;
    }
  `
  const PriceText = styled.div`
    color: rgba(128, 129, 145, 1);
    font-size: 12px;
    font-weight: 400;
    text-align: left;
    line-height: 16px;
    @media screen and (max-width: 1440px) {
      color: rgba(128, 129, 145, 1);
      font-size: 8px;
      font-weight: 400;
      text-align: left;
      line-height: 11px;
    }
  `
  const PriceValue = styled.div`
    color: rgba(255, 255, 255, 1);
    font-size: 32px;
    font-weight: 700;
    font-family: 'Poppins';
    text-align: left;
    margin-top: 13px;
    @media screen and (max-width: 1440px) {
      color: rgba(255, 255, 255, 1);
      font-size: 22px;
      font-weight: 400;
      font-family: 'Poppins';
      text-align: left;
      margin-top: 5px;
    }
  `
  const VolumeBox = styled.div`
    width: 40%;
    padding: 24px 0 32px 40px;
    border-right: 1px solid rgba(228, 228, 228, 0.1);
    letter-spacing: -1px;
    @media screen and (max-width: 1440px) {
      width: 40%;
      padding: 17px 0 32px 40px;
      border-right: 1px solid rgba(228, 228, 228, 0.1);
      letter-spacing: -1px;
    }
  `
  const MobileVolumeBox = styled.div`
    width: 169px;
    height: 147px;

    border-bottom: 1px solid rgba(228, 228, 228, 0.1);
    letter-spacing: -1px;
    display: inline-block;
  `
  const VolumeFlex = styled.div`
    display: flex;
  `
  const VolumeText = styled.text`
    color: rgba(128, 129, 145, 1);
    font-size: 18px;
    font-weight: 700;
    font-family: 'Poppins';
    text-align: left;
    @media screen and (max-width: 1440px) {
      color: rgba(128, 129, 145, 1);
      font-size: 13px;
      font-weight: 400;
      font-family: 'Poppins';
      text-align: left;
    }
  `
  const VotedBox = styled.div`
    width: 48%;
  `
  const VotedText = styled.div`
    font-size: 18px;
    font-weight: 600;
    line-height: 24px;
  `
  const GoodText = styled.span`
    transform: matrix(1, 0, 0, -1, 0, 0);
    display: inline-block;
  `
  const HoursText = styled.text`
    font-size: 13px;
    color: #b2b3bd;
    width: 80%;
    line-height: 25px;
    display: inline-block;
  `
  const TownBox = styled.div`
    width: 48%;
    margin: 14px 0;
  `
  const TownText = styled.text`
    font-size: 18px;
    color: #fff;
  `
  const ResultText = styled.div`
    font-size: 13px;
    color: #b2b3bd;
    width: 80%;
    margin-top: 10px;
  `
  const StarBox = styled.div`
    width: 48%;
    font-size: 13px;
    color: #b2b3bd;
    padding-top: 10px;
  `
  const StarFlex = styled.div`
    display: flex;
    margin-bottom: 20px;
  `
  const UpdateFlex = styled.div`
    display: flex;
    justify-content: space-between;
    font-size: 13px;
    color: #b2b3bd;
    display: block;
  `
  const BorderRightBox = styled.div`
    border-right: 1px;
    background-color: #ff9a7b;
    position: relative;
    height: 1px;
  `
  const BadBox = styled.div`
    border-right: 1px;
    background-color: #6c5dd3;
    position: relative;
    height: 1px;
  `
  const UpdateText = styled.div`
    font-size: 12px;
    color: #b2b3bd;
    width: 80%;
    line-height: 16px;
    display: block;
  `
  const MoonText = styled.text`
    :hover {
      background-color: rgb(50, 58, 87);
      cursor: pointer;
    }
  `
  const GoodIconText = styled.span`
    transform: matrix(1, 0, 0, -1, 0, 0);
    display: inline-block;
  `
  const ButtonBox = styled.text`
    width: 48%;
    font-size: 13px;
    color: #b2b3bd;
    padding-top: 10px;
  `
  const ButtonFlex = styled.text`
    display: flex;
    justify-content: end;
    font-size: 14px;
    font-weight: 700;
    color: #b2b3bd;
    margin: 15px 0;
  `
  const ChooseButton = styled.text`
    width: 140px;
    height: 41px;
    border: 1px solid rgba(225 225 225 / 0.5);
    border-radius: 12px;
    background: transparent;
    margin-right: 11px;
    line-height: 40px;
    text-align: center;
    :hover {
      background-color: rgb(50, 58, 87);
      cursor: pointer;
    }
  `
  const NgmiButton = styled.text`
    width: 109px;
    height: 41px;
    border: 1px solid rgba(225 225 225 / 0.5);
    border-radius: 12px;
    background: transparent;
    line-height: 40px;
    text-align: center;
    :hover {
      background-color: rgb(50, 58, 87);
      cursor: pointer;
    }
  `
  const NgmiText = styled.span`
    transform: matrix(1, 0, 0, -1, 0, 0);
    display: inline-block;
  `
  const opts = {
    content: 'please sign in',
    duration: 3,
  }
  return (
    <>
      {' '}
      {isMobile() ? (
        <VoteBigBox>
          <MobileVoteBox>
            <MobilePriceBox>
              <PriceFlex>
                <PriceImage src={saleIcon}></PriceImage>
                <PriceText>Price</PriceText>
              </PriceFlex>
              <PriceValue>{toThousands(game.top[0].price)}</PriceValue>
            </MobilePriceBox>
            <MobileVolumeBox>
              <VolumeFlex>
                <PriceImage src={volumeIcon}></PriceImage>
                <PriceText>Volume</PriceText>
              </VolumeFlex>
              <PriceValue>Ξ {toThousands(new BigNumber(game.top[0].volume).toFixed(2))}</PriceValue>
              <VolumeText>${toThousands((game.top[0].volume / 1000).toFixed(2))}K</VolumeText>
            </MobileVolumeBox>
            <MobileSupplyBox>
              <VolumeFlex>
                <PriceImage src={soldIcon}></PriceImage>
                <PriceText>CirculatingSupply</PriceText>
              </VolumeFlex>
              <PriceValue>{toThousands(new BigNumber(game.top[0].circulatingSupply).toFixed(2))}</PriceValue>
            </MobileSupplyBox>
          </MobileVoteBox>
          <ChooseFlex>
            {isVote ? (
              <VotedBox>
                <VotedText>
                  Your‘ve voted <br />-{' '}
                  {choosMoon ? (
                    '👍To da moon'
                  ) : (
                    <div>
                      <GoodText> 👍</GoodText>
                      Ngmi
                    </div>
                  )}
                </VotedText>
                <HoursText>
                  Your vote for 24 hours. In order to update how you feel about {game.name},come back tomorrow!
                </HoursText>
              </VotedBox>
            ) : (
              <TownBox>
                <TownText>How do you feel about {game.name} today？</TownText>
                <ResultText>Vote to see community result</ResultText>
              </TownBox>
            )}
            {isVote ? (
              <StarBox>
                <StarFlex>
                  <BorderRightBox style={{ width: good }}>
                    <div className="per-tips">{good}</div>
                  </BorderRightBox>
                  <BadBox style={{ width: bad }}></BadBox>
                </StarFlex>
                <UpdateText>
                  Your vote for 24 hours. In order to update how you feel about {game.name},come back tomorrow!
                </UpdateText>
                <UpdateFlex>
                  <MoonText> {good} To da moon&nbsp;👍 </MoonText>
                  <MoonText>
                    <GoodIconText> 👍</GoodIconText>
                    &nbsp;{bad} Ngmi
                  </MoonText>
                </UpdateFlex>
              </StarBox>
            ) : (
              <ButtonBox>
                <ButtonFlex>
                  <ChooseButton
                    type="warning"
                    onClick={(e) => {
                      if (!uId) {
                        Toast.warning(opts)
                        // toast({
                        //   title: `please sign in`,
                        //   position: 'top',
                        //   status: 'warning',
                        //   isClosable: true,
                        //   duration: 1000,
                        // })
                        return
                      }
                      likedStatus(game.gpId, uId, 1).then((res) => {
                        if (res.data.code == 200) {
                        } else {
                        }
                      })
                      setchoosMoon(true)
                      voteFun(!isVote)
                    }}
                  >
                    👍 &nbsp;&nbsp;To da moon
                  </ChooseButton>
                  <NgmiButton
                    type="warning"
                    onClick={(e) => {
                      if (!uId) {
                        // toast({
                        //   title: `please sign in`,
                        //   position: 'top',
                        //   status: 'warning',
                        //   isClosable: true,
                        //   duration: 1000,
                        // })
                        Toast.warning(opts)
                        return
                      }
                      likedStatus(game.gpId, uId, 1).then((res) => {
                        setchoosMoon(false)
                        voteFun(!isVote)
                      })
                    }}
                  >
                    <NgmiText>👍&nbsp;&nbsp;</NgmiText>
                    Ngmi
                  </NgmiButton>
                </ButtonFlex>
              </ButtonBox>
            )}
          </ChooseFlex>
        </VoteBigBox>
      ) : (
        <VoteBigBox>
          <VoteBox>
            <PriceBox>
              <PriceFlex>
                <PriceImage src={saleIcon}></PriceImage>
                <PriceText>Price</PriceText>
              </PriceFlex>
              <PriceValue>{toThousands(game.top[0].price)}</PriceValue>
            </PriceBox>
            <VolumeBox>
              <VolumeFlex>
                <PriceImage src={volumeIcon}></PriceImage>
                <PriceText>Volume</PriceText>
              </VolumeFlex>
              <PriceValue>Ξ {toThousands(new BigNumber(game.top[0].volume).toFixed(2))}</PriceValue>
              <VolumeText>${toThousands((game.top[0].volume / 1000).toFixed(2))}K</VolumeText>
            </VolumeBox>
            <SupplyBox>
              <VolumeFlex>
                <PriceImage src={soldIcon}></PriceImage>
                <PriceText>CirculatingSupply</PriceText>
              </VolumeFlex>
              <PriceValue>{toThousands(new BigNumber(game.top[0].circulatingSupply).toFixed(2))}</PriceValue>
            </SupplyBox>
          </VoteBox>
          <ChooseFlex>
            {isVote ? (
              <VotedBox>
                <VotedText>
                  Your‘ve voted <br />-{' '}
                  {choosMoon ? (
                    '👍To da moon'
                  ) : (
                    <div>
                      <GoodText> 👍</GoodText>
                      Ngmi
                    </div>
                  )}
                </VotedText>
                <HoursText>
                  Your vote for 24 hours. In order to update how you feel about {game.name},come back tomorrow!
                </HoursText>
              </VotedBox>
            ) : (
              <TownBox>
                <TownText>How do you feel about {game.name} today？</TownText>
                <ResultText>Vote to see community result</ResultText>
              </TownBox>
            )}
            {isVote ? (
              <StarBox>
                <StarFlex>
                  <BorderRightBox style={{ width: good }}>
                    <div className="per-tips">{good}</div>
                  </BorderRightBox>
                  <BadBox style={{ width: bad }}></BadBox>
                </StarFlex>
                <UpdateText>
                  Your vote for 24 hours. In order to update how you feel about {game.name},come back tomorrow!
                </UpdateText>
                <UpdateFlex>
                  <MoonText> {good} To da moon&nbsp;👍 </MoonText>
                  <MoonText>
                    <GoodIconText> 👍</GoodIconText>
                    &nbsp;{bad} Ngmi
                  </MoonText>
                </UpdateFlex>
              </StarBox>
            ) : (
              <ButtonBox>
                <ButtonFlex>
                  <ChooseButton
                    type="warning"
                    onClick={(e) => {
                      if (!uId) {
                        Toast.warning(opts)
                        // toast({
                        //   title: `please sign in`,
                        //   position: 'top',
                        //   status: 'warning',
                        //   isClosable: true,
                        //   duration: 1000,
                        // })
                        return
                      }
                      likedStatus(game.gpId, uId, 1).then((res) => {
                        if (res.data.code == 200) {
                        } else {
                        }
                      })
                      setchoosMoon(true)
                      voteFun(!isVote)
                    }}
                  >
                    👍 &nbsp;&nbsp;To da moon
                  </ChooseButton>
                  <NgmiButton
                    type="warning"
                    onClick={(e) => {
                      if (!uId) {
                        // toast({
                        //   title: `please sign in`,
                        //   position: 'top',
                        //   status: 'warning',
                        //   isClosable: true,
                        //   duration: 1000,
                        // })
                        Toast.warning(opts)
                        return
                      }
                      likedStatus(game.gpId, uId, 1).then((res) => {
                        setchoosMoon(false)
                        voteFun(!isVote)
                      })
                    }}
                  >
                    <NgmiText>👍&nbsp;&nbsp;</NgmiText>
                    Ngmi
                  </NgmiButton>
                </ButtonFlex>
              </ButtonBox>
            )}
          </ChooseFlex>
        </VoteBigBox>
      )}
    </>
  )
}
// function useToast() {
//   throw new Error('Function not implemented.')
// }
