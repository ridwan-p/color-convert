# Color Convert

Color Convert is a color conversion library for JavaScript and node.
It converts all ways between `rgb`, `hsl`, `hsv`, `hex` strings, and generate the oposite color (invert color):

# Install

```console
$ npm i @ridwan-p/color-convert
```
## Usage

```js
const color = require("@ridwan-p/color-convert")

// Hexa to RGB
color.hex2RGB('#FFF')
//=> { r: 255, g: 255, b: 255 }

// RGB to Hexa
color.rgb2Hex(255, 12, 43)
//=> #ff0c2b

// Generate the oposite color
color.invertColor('#ffff00')
//=> #ff0c2b
// set black & white
color.invertColor('#ffff00', true)
//=> #000000

// Convert to HSL
color.rgb2HSL(255, 66, 66)
color.hex2HSL('#ff4242')
//=> { h: 0, s: 1, l: 0.6294117647058823 }

// Convert to HSV
color.rgb2HSL(255, 66, 66)
color.hex2HSL('#ff4242')
//=> { h: 0, s: 0.7411764705882353, v: 1 }

```

# Contribute

If there is a new model you would like to support, or want to add a direct conversion between two existing models, please send us a pull request.

# License
Copyright &copy; 2022, Ridwan Pamungkas.

Licensed under the [MIT License](LICENSE)
