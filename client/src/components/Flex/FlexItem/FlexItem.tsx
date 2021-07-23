import styled from 'styled-components'
import { media } from '../../../styles/media'

interface FlexItemProps {
  span?: number
  phone?: number
  tablet?: number
  desktop?: number
  extended?: number
  width?: string
  height?: string
  noPadding?: boolean
  noFlex?: boolean
  style?: any
}

export const FlexItem = styled.div<FlexItemProps>`
  flex: ${(props) =>
    props.span ? `0 0 ${(props.span / 12) * 100}%` : '1 1 auto'};
  width: ${(props) => props.width || 'auto'};
  max-width: ${(props) =>
    props.span ? `${(props.span / 12) * 100}%` : '100%'};
  height: ${(props) => props.height || 'auto'};
  padding: 0 ${(props) => (props.noPadding ? '0' : '20px')};
  ${(props) => (props.noFlex ? 'flex: 0 0 auto;' : '')}

  ${({ extended }) =>
    extended &&
    media.extended`
    flex: 0 0 ${(extended / 12) * 100}%;
    max-width: ${(extended / 12) * 100}%;
  `}

  ${({ desktop }) =>
    desktop &&
    media.desktop`
    flex: 0 0 ${(desktop / 12) * 100}%;
    max-width: ${(desktop / 12) * 100}%;
  `}

  ${({ tablet }) =>
    tablet &&
    media.tablet`
    flex: 0 0 ${(tablet / 12) * 100}%;
    max-width: ${(tablet / 12) * 100}%;
  `}

  ${({ phone }) =>
    media.phone`
    ${
      phone
        ? `
    flex: 0 0 ${(phone / 12) * 100}%;
    max-width: ${(phone / 12) * 100}%;

    `
        : `
    width: 100%;
    max-width: 100%;
    flex: 1 1 100%;
    `
    }

  `}
`
