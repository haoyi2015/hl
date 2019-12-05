import range from './range'

const UNIT_TIME = '点'
const UNIT_BRANCH = '分'
const UNIT_SECOND = '秒'

const timeData = range(0, 23, true, UNIT_TIME)
const branchData = range(0, 59, true, UNIT_BRANCH)
const secondData = range(0, 59, true, UNIT_SECOND)

const times = timeData.map((time) => {
  return {
    name: time + UNIT_TIME,
    id: time
  }
})

const branchs = branchData.map((branch) => {
  return {
    name: branch + UNIT_BRANCH,
    id: branch
  }
})

const seconds = secondData.map((second) => {
  const item = {
    name: second + UNIT_SECOND,
    id: second
  }
  return item
})
export default [times, branchs, seconds]
