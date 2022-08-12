import React from 'react'
import styled from 'styled-components/macro'
export default function Earn() {
  const EarnBigBox = styled.div`
    width: 100%;
    border-radius: 24px;
    background: rgba(17, 28, 68, 1);
    padding: 32px 40px;
    box-sizing: border-box;
  `
  const EarnTitle = styled.div`
    color: rgba(255, 255, 255, 1);
    font-size: 24px;
    font-weight: 500;
    font-family: 'Poppins';
    text-align: left;
    line-height: 32px;
  `
  return (
    <EarnBigBox>
      <EarnTitle>Comments</EarnTitle>
    </EarnBigBox>
  )
}
