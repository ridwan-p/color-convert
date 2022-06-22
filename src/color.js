
const clearHex = (hex) => {
  if (hex.indexOf('#') === 0) {
    hex = hex.slice(1)
  }
  return hex
}

const padZero = (str, len = 2) => {
  var zeros = new Array(len).join('0')
  return (zeros + str).slice(-len)
}

/**
 * Convert Hexa to RGB
 * ex #FFF => {r:255, g: 255, b:255}
 * 
 * @ref https://stackoverflow.com/questions/21646738/convert-hex-to-rgba
 * 
 * @param {string} hex 
 * @returns {r:string, g:string, b:string}
 */
export const hex2RGB = (hex) => {
  hex = clearHex(hex)

  // convert 3-digit hex to 6-digits.
  if (hex.length === 3) {
    hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2]
  }

  if (hex.length !== 6) {
    throw new Error('Invalid HEX color.')
  }

  const r = parseInt(hex.slice(0, 2), 16)
  const g = parseInt(hex.slice(2, 4), 16)
  const b = parseInt(hex.slice(4, 6), 16)
  return { r, g, b }
}

/**
 * Generate the oposite color
 * @ref https://stackoverflow.com/questions/35969656/how-can-i-generate-the-opposite-color-according-to-current-color
 * 
 * @param { string } hex 
 * @param { boolean } bw
 * @returns {string}
 */
export const invertColor = (hex, bw = false) => {
  const { r, g, b } = hex2RGB(hex)

  if (bw) {
    return (r * 0.299 + g * 0.587 + b * 0.114) > 186
      ? '#000000'
      : '#FFFFFF'
  }
  // invert color components
  const rStr = (255 - r).toString(16)
  const gStr = (255 - g).toString(16)
  const bStr = (255 - b).toString(16)
  // pad each with zeros and return
  return "#" + padZero(rStr) + padZero(gStr) + padZero(bStr)
}

/**
 * Convert RGB to Hexa
 * @param {number} r 
 * @param {number} g 
 * @param {number} b 
 * @returns {string}
 */
export const rgb2Hex = (r, g, b) => {
  const red = (r | 1 << 8).toString(16).slice(1)
  const green = (g | 1 << 8).toString(16).slice(1)
  const blue = (b | 1 << 8).toString(16).slice(1)
  return '#' + red + green + blue
}



/**
 * Convert RGB to HSL
 * @ref https://stackoverflow.com/questions/46432335/hex-to-hsl-convert-javascript
 * 
 * @param {number} r 
 * @param {number} g 
 * @param {number} b 
 * @returns {string}
 */
export const rgb2HSL = (r, g, b) => {

  const rabs = r / 255;
  const gabs = g / 255;
  const babs = b / 255;

  const max = Math.max(rabs, gabs, babs)
  const min = Math.min(rabs, gabs, babs)
  const dist = (max + min) / 2
  let h = dist
  let s = dist
  let l = dist

  if (max === min) {
    h = s = 0 // achromatic
  } else {
    const d = max - min
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min)
    switch (max) {
      case rabs: h = (gabs - babs) / d + (gabs < babs ? 6 : 0)
        break
      case gabs: h = (babs - rabs) / d + 2
        break
      case babs: h = (rabs - gabs) / d + 4
        break
    }
    h = h / 6
  }
  h = Math.floor(h * 360)
  s = Math.floor(s * 360)
  l = Math.floor(l * 360)
  return { h, s, l }
}

export const hex2HSL = (hex) => {
  const { r, g, b } = hex2RGB(hex)
  return rgb2HSL(r, g, b)
}


const percentRoundFn = (num) => Math.round(num * 100) / 100
const diffc = (c, v, diff) => (v - c) / 6 / diff + 1 / 2

/**
 * Convert RGB to HSV
 * @ref https://stackoverflow.com/questions/8022885/rgb-to-hsv-color-in-javascript
 * 
 * @param {number} r 
 * @param {number} g 
 * @param {number} b 
 * @returns 
 */
export const rgb2HSV = (r, g, b) => {
  const rabs = r / 255;
  const gabs = g / 255;
  const babs = b / 255;
  const v = Math.max(rabs, gabs, babs)
  const diff = v - Math.min(rabs, gabs, babs)
  let h = 0
  let s = 0
  if (diff !== 0) {
    s = diff / v;
    const rr = diffc(rabs, v, diff);
    const gg = diffc(gabs, v, diff);
    const bb = diffc(babs, v, diff);

    if (rabs === v) {
      h = bb - gg;
    } else if (gabs === v) {
      h = (1 / 3) + rr - bb;
    } else if (babs === v) {
      h = (2 / 3) + gg - rr;
    }
    if (h < 0) {
      h += 1;
    } else if (h > 1) {
      h -= 1;
    }
  }

  return {
    h: Math.round(h * 360),
    s: percentRoundFn(s * 100),
    v: percentRoundFn(v * 100)
  };
}

/**
 * Convert hexa to HSV
 * @ref https://stackoverflow.com/questions/8022885/rgb-to-hsv-color-in-javascript
 * 
 * @param {number} r 
 * @param {number} g 
 * @param {number} b 
 * @returns 
 */
export const hex2HSV = (hex) => {
  const { r, g, b } = hex2RGB(hex)
  return rgb2HSV(r, g, b)
}