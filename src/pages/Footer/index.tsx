import React from 'react'
import styled from 'styled-components/macro'

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
  return (
    <FooterBox>
      <Blockchains>One-stop Data Analysis For All Blockchains.</Blockchains>
      <Copyright>Copyright 2022 Hook</Copyright>
      <LinkBox>
        <Link href="https://app.gitbook.com/o/dHoRYUVnGdpDW6kzvwKH/s/8MYNEydsCb1yG0qhMpJZ/products/hook">About</Link>
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
  )
}
