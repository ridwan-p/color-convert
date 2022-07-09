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

export type CMYK = {
  c: number
  m: number
  y: number
  k: number
}

export type hex2RGB = (hex: string) => RGB
export type invertColor = (hex: string, bw?: boolean) => string
export type rgb2Hex = (r: number, g: number, b: number) => string
export type rgb2HSL = (r: number, g: number, b: number) => HSL
export type hex2HSL = (hex: string) => HSL
export type rgb2HSV = (r: number, g: number, b: number) => HSV
export type hex2HSV = (hex: string) => HSV
export interface Color {
  hex2RGB: hex2RGB
  invertColor: invertColor
  rgb2Hex: rgb2Hex
  rgb2HSL: rgb2HSL
  hex2HSL: hex2HSL
  rgb2HSV: rgb2HSV
  hex2HSV: hex2HSV
}

declare const color: Color

export default color