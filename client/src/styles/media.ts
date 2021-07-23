import { css, ThemedCssFunction } from 'styled-components'

const sizes = {
  extended: 1480,
  desktop: 1200,
  tablet: 1024,
  phone: 768,
  small: 512,
}
// Iterate through the sizes and create a media template
export const media = (Object.keys(sizes) as Array<keyof typeof sizes>).reduce(
  (acc, label) => {
    acc[label] = (first: any, ...interpolations: any[]) => css`
      @media (max-width: ${sizes[label]}px) {
        ${css(first, ...interpolations)}
      }
    `

    return acc
  },
  {} as { [key in keyof typeof sizes]: ThemedCssFunction<any> }
)
