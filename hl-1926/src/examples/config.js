/** 
 * 多列选择器测试数据
*/
import city from './city.js'

const data1 = [{
    name: 'a',
    id: 1
    },{
      name: 'b',
      id: 2
    },{
      name: 'c',
      id: 3
    },{
      name: 'd',
      id: 4
    },{
      name: 'e',
      id: 5
    }
  ]
const data2 = [{
    name: 'A',
    id: 1
    },{
      name: 'B',
      id: 2
    },{
      name: 'C',
      id: 3
    },{
      name: 'D',
      id: 4
    },{
      name: 'E',
      id: 5
    }
  ]

const data3 = [
    {
        name: '纵向跑马灯---1'
    },
    {
        name: '纵向跑马灯---2'
    },
    {
        name: '纵向跑马灯---3'
    },
    {
        name: '纵向跑马灯---4'
    }
  ]

const data4 = [
    '连雨不知春去',
    '一晴方觉夏深'
]

const data5 = ["不*鱼不可思议地中了赠课1节~","不*鱼以神奇的姿势获得赠课1节~","L**n以神奇的姿势获得一个17.45元红包~","f*** 不可思议地中了赠课1节~","不*鱼以神奇的姿势获得一个1元红包~","不*鱼坚持不懈许愿，获得了一个1元红包~","不*鱼画了张好看的符，抽到了一个1元红包~","不*鱼一不小心抽到了一个1元红包~","不*鱼不可思议地中了一个1元红包~","不*鱼坚持不懈许愿，获得了一个1元红包~"]
export const PickerOne = {
    data1: data1,
    data2: data2
}
export const PickerFour = {
    data: city
}

export const Marquee = {
    data: data3,
    list: data4
}

export const MarqueeCss = {
    data: data5
}