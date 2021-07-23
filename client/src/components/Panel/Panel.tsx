import styled from 'styled-components'

import { FlexContainer } from '../Flex'

export const Panel = styled(FlexContainer).attrs({ noGutter: true })`
  width: 100%;
  flex: 1 1 100%;
  background-color: #fff;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
`
