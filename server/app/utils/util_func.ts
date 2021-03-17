const moment = require('moment')

//替换时间为距现在时间
const formatTime = (arr) => {
  arr.forEach((item) => {
    let temp = moment(item.p_time, "YYYY-MM-DD").fromNow().split(" ")
    let str
    if (temp[1] === 'year' || temp[1] === 'years')  {
      str = temp[0] === "a" ? 1 : temp[0]
      item.p_time = str + "年前"
    } else if (temp[1] === 'month' || temp[1] === 'months') {
      str = temp[0] === "a" ? 1 : temp[0]
      item.p_time = str + "月前"
    } else if (temp[1] === 'day' || temp[1] === 'days') {
      str = temp[0] === "a" ? 1 : temp[0]
      str = parseInt(str) - 2
      if (str === 0) {
        item.p_time  = "今天"
      } else {
        item.p_time = str + "日前"
      }
    } else {
      item.p_time  = "今天"
    }
  })
}

export { formatTime }