const BASE64_MAPPING = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
  '0',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '+',
  '/',
]

/**
 *ascii convert to binary
 */
const _toBinary = function (ascii: any) {
  const binary = []
  while (ascii > 0) {
    const b = ascii % 2
    ascii = Math.floor(ascii / 2)
    binary.push(b)
  }

  binary.reverse()
  return binary
}

/**
 *binary convert to decimal
 */
const _toDecimal = function (binary: any) {
  let dec = 0
  let p = 0
  for (let i = binary.length - 1; i >= 0; --i) {
    const b = binary[i]
    if (b == 1) {
      dec += Math.pow(2, p)
    }
    ++p
  }
  return dec
}

/**
 *unicode convert to utf-8
 */
const _toUTF8Binary = function (c: any, binaryArray: any) {
  const mustLen = 8 - (c + 1) + (c - 1) * 6
  const fatLen = binaryArray.length
  let diff = mustLen - fatLen
  while (--diff >= 0) {
    binaryArray.unshift(0)
  }
  const binary = []
  let _c = c
  while (--_c >= 0) {
    binary.push(1)
  }
  binary.push(0)
  let i = 0
  const len: any = 8 - (c + 1)
  for (; i < len; ++i) {
    binary.push(binaryArray[i])
  }

  for (let j = 0; j < c - 1; ++j) {
    binary.push(1)
    binary.push(0)
    let sum = 6
    while (--sum >= 0) {
      binary.push(binaryArray[i++])
    }
  }
  return binary
}

//window.BASE64 = __BASE64;
// module.exports = {
//   CusBASE64: __BASE64
// }

export const BASE64 = {
  /**
   *BASE64 Encode
   */
  encoder(str: any) {
    const base64_Index = []
    let binaryArray: any = []
    for (let i = 0, len = str.length; i < len; ++i) {
      const unicode = str.charCodeAt(i)
      const _tmpBinary = _toBinary(unicode)
      if (unicode < 0x80) {
        let _tmpdiff = 8 - _tmpBinary.length
        while (--_tmpdiff >= 0) {
          _tmpBinary.unshift(0)
        }
        binaryArray = binaryArray.concat(_tmpBinary)
      } else if (unicode >= 0x80 && unicode <= 0x7ff) {
        binaryArray = binaryArray.concat(_toUTF8Binary(2, _tmpBinary))
      } else if (unicode >= 0x800 && unicode <= 0xffff) {
        //UTF-8 3byte
        binaryArray = binaryArray.concat(_toUTF8Binary(3, _tmpBinary))
      } else if (unicode >= 0x10000 && unicode <= 0x1fffff) {
        //UTF-8 4byte
        binaryArray = binaryArray.concat(_toUTF8Binary(4, _tmpBinary))
      } else if (unicode >= 0x200000 && unicode <= 0x3ffffff) {
        //UTF-8 5byte
        binaryArray = binaryArray.concat(_toUTF8Binary(5, _tmpBinary))
      } else if (unicode >= 4000000 && unicode <= 0x7fffffff) {
        //UTF-8 6byte
        binaryArray = binaryArray.concat(_toUTF8Binary(6, _tmpBinary))
      }
    }

    let extra_Zero_Count = 0
    for (let i = 0, len = binaryArray.length; i < len; i += 6) {
      const diff = i + 6 - len
      if (diff == 2) {
        extra_Zero_Count = 2
      } else if (diff == 4) {
        extra_Zero_Count = 4
      }
      let _tmpExtra_Zero_Count = extra_Zero_Count
      while (--_tmpExtra_Zero_Count >= 0) {
        binaryArray.push(0)
      }
      base64_Index.push(_toDecimal(binaryArray.slice(i, i + 6)))
    }

    let base64 = ''
    for (let i = 0, len = base64_Index.length; i < len; ++i) {
      base64 += BASE64_MAPPING[base64_Index[i]]
    }

    for (let i = 0, len = extra_Zero_Count / 2; i < len; ++i) {
      base64 += '='
    }
    return base64
  },

  decoder(_base64Str: any) {
    const _len = _base64Str.length
    let extra_Zero_Count = 0
    if (_base64Str.charAt(_len - 1) == '=') {
      if (_base64Str.charAt(_len - 2) == '=') {
        extra_Zero_Count = 4
        _base64Str = _base64Str.substring(0, _len - 2)
      } else {
        extra_Zero_Count = 2
        _base64Str = _base64Str.substring(0, _len - 1)
      }
    }

    let binaryArray: any = []
    for (let i = 0, len = _base64Str.length; i < len; ++i) {
      const c = _base64Str.charAt(i)
      for (let j = 0, size = BASE64_MAPPING.length; j < size; ++j) {
        if (c == BASE64_MAPPING[j]) {
          const _tmp = _toBinary(j)
          /*不足6位的补0*/
          const _tmpLen = _tmp.length
          if (6 - _tmpLen > 0) {
            for (let k = 6 - _tmpLen; k > 0; --k) {
              _tmp.unshift(0)
            }
          }
          binaryArray = binaryArray.concat(_tmp)
          break
        }
      }
    }

    if (extra_Zero_Count > 0) {
      binaryArray = binaryArray.slice(0, binaryArray.length - extra_Zero_Count)
    }

    let unicode: any = []
    let unicodeBinary: any = []
    for (let i = 0, len = binaryArray.length; i < len; ) {
      if (binaryArray[i] == 0) {
        unicode = unicode.concat(_toDecimal(binaryArray.slice(i, i + 8)))
        i += 8
      } else {
        let sum = 0
        while (i < len) {
          if (binaryArray[i] == 1) {
            ++sum
          } else {
            break
          }
          ++i
        }
        unicodeBinary = unicodeBinary.concat(binaryArray.slice(i + 1, i + 8 - sum))
        i += 8 - sum
        while (sum > 1) {
          unicodeBinary = unicodeBinary.concat(binaryArray.slice(i + 2, i + 8))
          i += 8
          --sum
        }
        unicode = unicode.concat(_toDecimal(unicodeBinary))
        unicodeBinary = []
      }
    }
    return unicode
  },
  decrypt(_base64Str: any) {
    const data = this.decoder(_base64Str)
    const reg = new RegExp('^([A-Za-z0-9+/]{4})*([A-Za-z0-9+/]{4}|[A-Za-z0-9+/]{3}=|[A-Za-z0-9+/]{2}==)$')
    let content = ''
    data.forEach((element: any) => {
      content += String.fromCharCode(element)
    })
    return content
  },
}
