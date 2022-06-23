export type RGB = {
  r: number
  g: number
  b: number
}

export type HSL = {
  h: number
  s: number
  l: number
}

export type HSV = {
  h: number
  s: number
  v: number
}

interface color {
  hex2RGB: (hex: string) => RGB
  invertColor: (hex: string, bw: boolean) => string
  rgb2Hex: (r: number, g: number, b: number) => string
  rgb2HSL: (r: number, g: number, b: number) => HSL
  hex2HSL: (hex: string) => HSL
  rgb2HSV: (r: number, g: number, b: number) => HSV
  hex2HSV: (hex: string) => HSV
}

export default color