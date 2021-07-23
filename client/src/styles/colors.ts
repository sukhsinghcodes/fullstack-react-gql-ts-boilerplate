export enum Colors {
  Primary = '#3497d3',
  Secondary = '#ff8600',
  Error = '#c00',
}

function hexToRGB(hex: string, alpha: number) {
  const r = parseInt(hex.slice(1, 3), 16)
  const g = parseInt(hex.slice(3, 5), 16)
  const b = parseInt(hex.slice(5, 7), 16)

  if (alpha) {
    return 'rgba(' + r + ', ' + g + ', ' + b + ', ' + alpha + ')'
  } else {
    return 'rgb(' + r + ', ' + g + ', ' + b + ')'
  }
}

export const getColorWithOpacity = (color: Colors | string, opacity: number) =>
  hexToRGB(color, opacity)
