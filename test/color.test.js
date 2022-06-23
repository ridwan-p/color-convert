const ColorConverter = require('../dist/color-convert')

test('hex to rgb', () => {
  expect(ColorConverter.hex2RGB('#FFF')).toEqual({ r: 255, g: 255, b: 255 })
  expect(ColorConverter.hex2RGB('#000')).toEqual({ r: 0, g: 0, b: 0 })
  expect(ColorConverter.hex2RGB('#000000')).toEqual({ r: 0, g: 0, b: 0 })
  expect(ColorConverter.hex2RGB('#FF0000')).toEqual({ r: 255, g: 0, b: 0 })
  expect(ColorConverter.hex2RGB('#00FF00')).toEqual({ r: 0, g: 255, b: 0 })
  expect(ColorConverter.hex2RGB('#0000FF')).toEqual({ r: 0, g: 0, b: 255 })
  expect(ColorConverter.hex2RGB('#FFFF00')).toEqual({ r: 255, g: 255, b: 0 })
})

test('rgb to hex', () => {
  expect(ColorConverter.rgb2Hex(255, 255, 255)).toEqual('#ffffff')
  expect(ColorConverter.rgb2Hex(0, 0, 0)).toEqual('#000000')
  expect(ColorConverter.rgb2Hex(255, 0, 0)).toEqual('#ff0000')
  expect(ColorConverter.rgb2Hex(0, 255, 0)).toEqual('#00ff00')
  expect(ColorConverter.rgb2Hex(0, 0, 255)).toEqual('#0000ff')
  expect(ColorConverter.rgb2Hex(255, 255, 0)).toEqual('#ffff00')
})

test('Generate the oposite color', () => {
  expect(ColorConverter.invertColor('#ffffff')).toEqual('#000000')
  expect(ColorConverter.invertColor('#000000')).toEqual('#ffffff')
  expect(ColorConverter.invertColor('#0000ff')).toEqual('#ffff00')
  expect(ColorConverter.invertColor('#ffff00')).toEqual('#0000ff')
  expect(ColorConverter.invertColor('#00ff00', true)).toEqual('#ffffff')
  expect(ColorConverter.invertColor('#ffff00', true)).toEqual('#000000')
})


test('rgb to hsl', () => {
  expect(ColorConverter.rgb2HSL(0, 0, 0)).toEqual({ h: 0, s: 0, l: 0 })
  expect(ColorConverter.rgb2HSL(255, 255, 255)).toEqual({ h: 0, s: 0, l: 1 })
  expect(ColorConverter.rgb2HSL(255, 0, 0)).toEqual({ h: 0, s: 1, l: 0.5 })
  expect(ColorConverter.rgb2HSL(0, 255, 0)).toEqual({ h: 0.3333333333333333, s: 1, l: 0.5 })
  expect(ColorConverter.rgb2HSL(0, 0, 255)).toEqual({ h: 0.6666666666666666, s: 1, l: 0.5 })
  expect(ColorConverter.rgb2HSL(255, 255, 0)).toEqual({ h: 0.16666666666666666, s: 1, l: 0.5 })
  expect(ColorConverter.rgb2HSL(255, 66, 66)).toEqual({ h: 0, s: 1, l: 0.6294117647058823 })
})

test('hex to hsl', () => {
  expect(ColorConverter.hex2HSL('#000000')).toEqual({ h: 0, s: 0, l: 0 })
  expect(ColorConverter.hex2HSL('#ffffff')).toEqual({ h: 0, s: 0, l: 1 })
  expect(ColorConverter.hex2HSL('#ff0000')).toEqual({ h: 0, s: 1, l: 0.5 })
  expect(ColorConverter.hex2HSL('#00ff00')).toEqual({ h: 0.3333333333333333, s: 1, l: 0.5 })
  expect(ColorConverter.hex2HSL('#0000ff')).toEqual({ h: 0.6666666666666666, s: 1, l: 0.5 })
  expect(ColorConverter.hex2HSL('#ffff00')).toEqual({ h: 0.16666666666666666, s: 1, l: 0.5 })
  expect(ColorConverter.hex2HSL('#ff4242')).toEqual({ h: 0, s: 1, l: 0.6294117647058823 })
})

test('rgb to hsv', () => {
  expect(ColorConverter.rgb2HSV(0, 0, 0)).toEqual({ h: 0, s: 0, v: 0 })
  expect(ColorConverter.rgb2HSV(255, 255, 255)).toEqual({ h: 0, s: 0, v: 1 })
  expect(ColorConverter.rgb2HSV(255, 0, 0)).toEqual({ h: 0, s: 1, v: 1 })
  expect(ColorConverter.rgb2HSV(0, 255, 0)).toEqual({ h: 0.3333333333333333, s: 1, v: 1 })
  expect(ColorConverter.rgb2HSV(0, 0, 255)).toEqual({ h: 0.6666666666666666, s: 1, v: 1 })
  expect(ColorConverter.rgb2HSV(255, 255, 0)).toEqual({ h: 0.16666666666666666, s: 1, v: 1 })
  expect(ColorConverter.rgb2HSV(255, 66, 66)).toEqual({ h: 0, s: 0.7411764705882353, v: 1 })
})

test('hex to hsv', () => {
  expect(ColorConverter.hex2HSV('#000000')).toEqual({ h: 0, s: 0, v: 0 })
  expect(ColorConverter.hex2HSV('#ffffff')).toEqual({ h: 0, s: 0, v: 1 })
  expect(ColorConverter.hex2HSV('#ff0000')).toEqual({ h: 0, s: 1, v: 1 })
  expect(ColorConverter.hex2HSV('#00ff00')).toEqual({ h: 0.3333333333333333, s: 1, v: 1 })
  expect(ColorConverter.hex2HSV('#0000ff')).toEqual({ h: 0.6666666666666666, s: 1, v: 1 })
  expect(ColorConverter.hex2HSV('#ffff00')).toEqual({ h: 0.16666666666666666, s: 1, v: 1 })
  expect(ColorConverter.hex2HSV('#ff4242')).toEqual({ h: 0, s: 0.7411764705882353, v: 1 })
})