'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const clearHex = hex => {
  if (hex.indexOf('#') === 0) {
    hex = hex.slice(1);
  }

  return hex;
};

const padZero = (str, len = 2) => {
  var zeros = new Array(len).join('0');
  return (zeros + str).slice(-len);
};
/**
 * Convert Hexa to RGB
 * ex #FFF => {r:255, g: 255, b:255}
 * 
 * 
 * @param {string} hex 
 * @returns {r:string, g:string, b:string}
 */


const hex2RGB = hex => {
  hex = clearHex(hex); // convert 3-digit hex to 6-digits.

  if (hex.length === 3) {
    hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
  }

  if (hex.length !== 6) {
    throw new Error('Invalid HEX color.');
  }

  const r = parseInt(hex.slice(0, 2), 16);
  const g = parseInt(hex.slice(2, 4), 16);
  const b = parseInt(hex.slice(4, 6), 16);
  return {
    r,
    g,
    b
  };
};
/**
 * Generate the oposite color
 * 
 * @param { string } hex 
 * @param { boolean } bw
 * @returns {string}
 */

const invertColor = (hex, bw = false) => {
  const {
    r,
    g,
    b
  } = hex2RGB(hex);

  if (bw) {
    return r * 0.299 + g * 0.587 + b * 0.114 > 186 ? '#000000' : '#ffffff';
  } // invert color components


  const rStr = (255 - r).toString(16);
  const gStr = (255 - g).toString(16);
  const bStr = (255 - b).toString(16); // pad each with zeros and return

  return "#" + padZero(rStr) + padZero(gStr) + padZero(bStr);
};
/**
 * Convert RGB to Hexa
 * @param {number} r 
 * @param {number} g 
 * @param {number} b 
 * @returns {string}
 */

const rgb2Hex = (r, g, b) => {
  const red = (r | 1 << 8).toString(16).slice(1);
  const green = (g | 1 << 8).toString(16).slice(1);
  const blue = (b | 1 << 8).toString(16).slice(1);
  return '#' + red + green + blue;
};

const rgb2HAbs = (r, g, b, max, min) => {
  let h = 0;

  if (max !== min) {
    const d = max - min;

    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;

      case g:
        h = (b - r) / d + 2;
        break;

      case b:
        h = (r - g) / d + 4;
        break;
    }

    h = h / 6;
  }

  return h;
};

const colorAbs = color => {
  return color / 255;
};
/**
 * Convert RGB to HSL
 * 
 * @param {number} r 
 * @param {number} g 
 * @param {number} b 
 * @returns {string}
 */


const rgb2HSL = (r, g, b) => {
  const rabs = colorAbs(r);
  const gabs = colorAbs(g);
  const babs = colorAbs(b);
  const max = Math.max(rabs, gabs, babs);
  const min = Math.min(rabs, gabs, babs);
  const diff = max - min;
  const h = rgb2HAbs(rabs, gabs, babs, max, min);
  const l = (max + min) / 2;
  const s = max !== min ? diff / (2 - max - min) : 0;
  return {
    h,
    s,
    l
  };
};
const hex2HSL = hex => {
  const {
    r,
    g,
    b
  } = hex2RGB(hex);
  return rgb2HSL(r, g, b);
};
/**
 * Convert RGB to HSV
 * 
 * @param {number} r 
 * @param {number} g 
 * @param {number} b 
 * @returns 
 */

const rgb2HSV = (r, g, b) => {
  const rabs = colorAbs(r);
  const gabs = colorAbs(g);
  const babs = colorAbs(b);
  const max = Math.max(rabs, gabs, babs);
  const min = Math.min(rabs, gabs, babs);
  const diff = max - min;
  const h = rgb2HAbs(rabs, gabs, babs, max, min);
  const v = max;
  const s = max !== min ? diff / max : 0;
  return {
    h,
    s,
    v
  };
};
/**
 * Convert hexa to HSV
 * 
 * @param {number} r 
 * @param {number} g 
 * @param {number} b 
 * @returns 
 */

const hex2HSV = hex => {
  const {
    r,
    g,
    b
  } = hex2RGB(hex);
  return rgb2HSV(r, g, b);
};

exports.hex2HSL = hex2HSL;
exports.hex2HSV = hex2HSV;
exports.hex2RGB = hex2RGB;
exports.invertColor = invertColor;
exports.rgb2HSL = rgb2HSL;
exports.rgb2HSV = rgb2HSV;
exports.rgb2Hex = rgb2Hex;
