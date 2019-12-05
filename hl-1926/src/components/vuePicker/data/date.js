import range from './range'

const START_YEAR = 2000
const END_YEAR = 2001

const UNIT_YEAR = '年'
const UNIT_MONTH = '月'
const UNIT_DAY = '日'

function isLeapYear (y) {
  let cond1 = y % 4 == 0;  //条件1：年份必须要能被4整除
  let cond2 = y % 100 != 0;  //条件2：年份不能是整百数
  let cond3 = y % 400 ==0;  //条件3：年份是400的倍数
  let cond = cond1 && cond2 || cond3;
  if(cond){
    return true
  }else{
    return false
  }
  //return (y % 4 === 0) && (y % 100 !== 0 || y % 400 === 0)
};

function getDays (y, m) {
  y = Number(y)
  m = Number(m)
  let endDay = null;
  
  switch (m) {
    case 2:
      endDay = isLeapYear(y)?29:28;
    console.log(endDay,isLeapYear(y),'-rDate')
    break
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      endDay = 31; break
    case 4:
    case 6:
    case 9:
    case 11:
    default:
      endDay = 30; break
  }
const days = range(1, endDay, false, UNIT_DAY);
  return days.map((day) => {
    return { name: day+UNIT_DAY,id: day}
  })
};

const yearData = range(START_YEAR, END_YEAR, false, UNIT_YEAR)
const monthData = range(1, 12, false, UNIT_MONTH)

const cascadeMonthData = monthData.map((month) => {
  return {
    name: month+UNIT_MONTH,
    id: month,
    children: []
  }
})

const dateData = yearData.map((year) => {
  const item = {
    name: year+UNIT_YEAR,
    id: year,
    children: cascadeMonthData.slice()
  }
  item.children.forEach((month) => {
    month.children = getDays(year, month.id)
  })
  return item
})

const date = new Date()
const dateAnchor = [
  { name: `${date.getFullYear()}${UNIT_YEAR}` },
  { name: `${date.getMonth() + 1}${UNIT_MONTH}` },
  { name: `${date.getDate()}${UNIT_DAY}` }
]
export {
  dateAnchor,
  dateData
}
