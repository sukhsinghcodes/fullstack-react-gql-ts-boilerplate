import React from 'react'
import styled from 'styled-components'

import spinnerIconSrc from '../../images/spinner.svg'

const Icon = styled.img`
  display: block;
  width: 100%;
  margin: 0 auto;

  @keyframes rotation {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(359deg);
    }
  }

  animation: rotation 0.5s infinite linear;
`

const IconWrapper = styled.div`
  display: block;
  width: 50px;
  height: 50px;
`

export const Spinner = () => {
  return (
    <IconWrapper>
      <Icon src={spinnerIconSrc} alt="Loading..." />
    </IconWrapper>
  )
}
