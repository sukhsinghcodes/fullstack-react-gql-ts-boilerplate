import React from 'react'
import styled from 'styled-components'

import logo from '../../images/trade-ledger-logo.png'
import { ContentWrapper } from '../ContentWrapper'

const HeaderWrapper = styled.header`
  background-color: #fff;
  padding: 20px 0;
  display: flex;
  flex: 1 0 100%;
  justify-content: center;
  align-items: center;
  width: 100%;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.1);
`

const Logo = styled.img`
  display: block;
  height: 40px;
  width: auto;
`

export const Header = () => (
  <HeaderWrapper>
    <ContentWrapper>
      <Logo src={logo} alt="Trader Ledger" />
    </ContentWrapper>
  </HeaderWrapper>
)
