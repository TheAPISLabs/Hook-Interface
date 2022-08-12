export function dateDiff(hisTime, nowTime) {
  if (!arguments.length) return ''
  let arg = arguments,
    // now = new Date().getTime(),
    now = new Date().getTime(),
    diffValue = now - hisTime,
    result = '',
    sec = 1000,
    minute = 1000 * 60,
    hour = minute * 60,
    day = hour * 24,
    halfamonth = day * 15,
    month = day * 30,
    year = month * 12,
    _year = diffValue / year,
    _month = diffValue / month,
    _week = diffValue / (7 * day),
    _day = diffValue / day,
    _hour = diffValue / hour,
    _min = diffValue / minute,
    _sec = diffValue / sec
  // if (new Date().toDateString() == convertDateFromString(hisTime).toDateString()) {
  //     result.isToday = true;
  // }
  // if (_year >= 1) result = parseInt(_year) + "";
  // else if (_month >= 1) result = parseInt(_month) + "";
  // else if (_week >= 1) result = parseInt(_week) + "";
  if (parseInt(diffValue) < 15000) result = 'just now'
  else if (parseInt(_year) > 1) result = parseInt(_year) + ' years ago'
  else if (parseInt(_year) >= 1) result = parseInt(_year) + ' year ago'
  else if (parseInt(_month) > 1) result = parseInt(_month) + ' months ago'
  else if (parseInt(_month) >= 1) result = parseInt(_month) + ' month ago'
  else if (parseInt(_week) > 1) result = parseInt(_week) + ' weeks ago'
  else if (parseInt(_week) >= 1) result = parseInt(_week) + ' week ago'
  else if (parseInt(_day) > 1) result = parseInt(_day) + ' days ago'
  else if (parseInt(_day) >= 1) result = parseInt(_day) + ' day ago'
  else if (parseInt(_hour) > 1) result = parseInt(_hour) + ' hours ago '
  else if (parseInt(_hour) >= 1) result = parseInt(_hour) + ' hour ago '
  else if (parseInt(_min) > 1) result = parseInt(_min) + ' mins ago'
  else if (parseInt(_min) >= 1) result = parseInt(_min) + ' min ago'
  else if (_sec >= 1) result = 'a few seconds ago'
  else result = 'just now'
  return result
}
export function toThousands(num) {
  var num = num ? num.toString() : '',
    index = num.indexOf('.'),
    result = '',
    tnum = ''
  if (index > -1) {
    tnum = num.substr(index)
    num = num.substr(0, index)
  }
  while (num.length > 3) {
    result = ',' + num.slice(-3) + result
    num = num.slice(0, num.length - 3)
  }
  if (num) {
    result = num + result
  }
  return result + tnum || '-'
}
export function toAddress(address) {
  if (address) {
    address = '...' + address.substr(address.length - 4)
  }
  return address
}
export function isMobile() {
  const userAgent = navigator.userAgent
  return userAgent.match(/(iPhone|iPod|Android|ios|iPad|AppleWebKit.*Mobile.*)/i)
}
