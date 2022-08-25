import React from 'react'
import styled from 'styled-components/macro'

import FooterLogo from '../../assets/img/logo/FootLogo.png'
import { isMobile } from '../GameDetails/components/until.js'
export default function Footer() {
  const FooterBox = styled.div`
    display: flex;
    width: 1540px;
    margin: auto;
    margin-bottom: 57px;
    margin-top: 26px;
    @media screen and (max-width: 1440px) {
      display: flex;
      width: 1173px;
      margin: auto;
      margin-bottom: 26px;
      margin-top: 16px;
    }
  `
  const MobileFooterBox = styled.div`
    width: 100%;
    height: 368px;
    margin: auto;
    margin-top: 35px;
    background: #111c44;
    padding: 31px 80px 24px 15px;
  `
  const MobileFooterLogo = styled.img`
    width: 94px;
    height: 26px;
    margin-bottom: 27px;
  `
  const Blockchains = styled.div`
    color: rgba(255, 255, 255, 1);
    font-size: 14px;
    font-weight: 500;
    text-align: left;
    margin-right: 52px;
    width: 294px;
    @media screen and (max-width: 1440px) {
      color: rgba(255, 255, 255, 1);
      font-size: 10px;
      font-weight: 500;
      text-align: left;
      margin-right: 38px;
      width: 253px;
    }
  `
  const MobileBlockchains = styled.div`
    color: rgba(255, 255, 255, 1);
    font-size: 12px;
    font-weight: 400;
    text-align: left;
    margin-top: 83px;
    width: 294px;
  `
  const Copyright = styled.div`
    color: rgba(255, 255, 255, 1);
    font-size: 14px;
    font-weight: 500;
    text-align: left;
    margin-right: 294px;
    width: 147px;
    @media screen and (max-width: 1440px) {
      color: rgba(255, 255, 255, 1);
      font-size: 10px;
      font-weight: 500;
      text-align: left;
      margin-right: 194px;
      width: 125px;
    }
  `
  const MobileCopyright = styled.div`
    color: rgba(255, 255, 255, 1);
    font-size: 12px;
    font-weight: 400;
    text-align: left;
    margin-top: 10px;
    width: 147px;
  `
  const LinkBox = styled.div`
    display: flex;
    width: 752px;
    justify-content: space-between;
    @media screen and (max-width: 1440px) {
      width: 562px;
      display: flex;
      justify-content: space-between;
    }
  `
  const MobileLinkBox = styled.div`
    width: 341px;
    flex-wrap: wrap;
    display: flex;
  `
  const Link = styled.a`
    color: rgba(255, 255, 255, 1);
    font-size: 14px;
    font-weight: 400;
    text-decoration: none;
    @media screen and (max-width: 1440px) {
      color: rgba(255, 255, 255, 1);
      font-size: 10px;
      font-weight: 400;
      text-decoration: none;
    }
    &:hover {
      color: #7551ff;
    }
  `
  const MobileLink = styled.a`
    color: rgba(255, 255, 255, 1);
    font-size: 14px;
    font-weight: 500;
    width: 170px;
    margin-bottom: 10px;
    text-decoration: none;
    &:hover {
      color: #7551ff;
    }
  `
  return (
    <>
      {isMobile() ? (
        <MobileFooterBox>
          <MobileFooterLogo src={FooterLogo}></MobileFooterLogo>
          <MobileLinkBox>
            <MobileLink href="https://app.gitbook.com/o/dHoRYUVnGdpDW6kzvwKH/s/8MYNEydsCb1yG0qhMpJZ/products/hook">
              About
            </MobileLink>
            <MobileLink>API</MobileLink>
            <MobileLink href="https://simmmple.com/terms-of-service">Contact</MobileLink>
            <MobileLink href="https://www.blog.simmmple.com/">Help</MobileLink>
            <MobileLink href="https://www.blog.simmmple.com/">Jobs</MobileLink>
            <MobileLink href="https://www.blog.simmmple.com/">Bug Bounty</MobileLink>
            <MobileLink>Brand</MobileLink>
            <MobileLink href="https://app.gitbook.com/o/dHoRYUVnGdpDW6kzvwKH/s/8MYNEydsCb1yG0qhMpJZ/docs/terms-and-conditions">
              Terms of Service
            </MobileLink>
          </MobileLinkBox>
          <MobileBlockchains>One-stop Data Analysis For All Blockchains.</MobileBlockchains>
          <MobileCopyright>Copyright 2022 Hook</MobileCopyright>
        </MobileFooterBox>
      ) : (
        <FooterBox>
          <Blockchains>One-stop Data Analysis For All Blockchains.</Blockchains>
          <Copyright>Copyright 2022 Hook</Copyright>
          <LinkBox>
            <Link href="https://app.gitbook.com/o/dHoRYUVnGdpDW6kzvwKH/s/8MYNEydsCb1yG0qhMpJZ/products/hook">
              About
            </Link>
            <Link>API</Link>
            <Link href="https://simmmple.com/terms-of-service">Contact</Link>
            <Link href="https://www.blog.simmmple.com/">Help</Link>
            <Link href="https://www.blog.simmmple.com/">Jobs</Link>
            <Link href="https://www.blog.simmmple.com/">Bug Bounty</Link>
            <Link>Brand</Link>
            <Link href="https://app.gitbook.com/o/dHoRYUVnGdpDW6kzvwKH/s/8MYNEydsCb1yG0qhMpJZ/docs/terms-and-conditions">
              Terms of Service
            </Link>
          </LinkBox>
        </FooterBox>
      )}
    </>
  )
}
