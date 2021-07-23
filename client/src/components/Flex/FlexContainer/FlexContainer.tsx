import styled from 'styled-components'

interface FlexContainerProps {
  direction?: string
  justify?: string
  align?: string
  height?: string
  noGutter?: boolean
  noWrap?: boolean
  style?: any
}

export const FlexContainer = styled.div<FlexContainerProps>`
  display: flex;
  flex-direction: ${(props) => props.direction};
  justify-content: ${(props) => props.justify};
  align-items: ${(props) => props.align};
  height: ${(props) => props.height || 'auto'};
  margin: 0 ${(props) => (props.noGutter ? '0' : `-20px`)};
  flex-wrap: ${(props) => (props.noWrap ? 'nowrap' : 'wrap')};
`
