/**
 *  冒泡排序 (逐一两项对比,大的向右)
 *  最坏时间复杂度: O(n²)
 *  最好时间复杂度: O(n)
 */

function bubbleSort(arr, isAscending = true) {
  let end = arr.length - 1
  while (end > 0) {
    //  进行标记最后一次换位的index(下标), 默认为0 则完全有序,一次循环后直接退出
    let sortedIndex = 0
    for (let i = 0; i < end; i++) {
      if (isAscending) {
        if (arr[i] > arr[i + 1]) {
          let tmp = arr[i]
          arr[i] = arr[i + 1]
          arr[i + 1] = tmp
          sortedIndex = i
        }
      } else {
        if (arr[i] < arr[i + 1]) {
          let tmp = arr[i]
          arr[i] = arr[i + 1]
          arr[i + 1] = tmp
          sortedIndex = i
        }
      }
    }
    end = sortedIndex
  }
}
/**
 * 选择排序(每次循环获取最大的数放置右边
 *  最好,最坏时间复杂度都是: O(n²)
 */
function selectSort(arr) {
  let end = arr.length - 1
  while (end > 0) {
    let maxIndex = 0
    for (let i = 0; i <= end; i++) {
      if (arr[maxIndex] < arr[i]) {
        maxIndex = i
      }
    }
    let tmp = arr[maxIndex]
    arr[maxIndex] = arr[end]
    arr[end]  = tmp
    end--
  }
}
/**
 *  快速排序
 */

function quickSort(arr) {
  if (arr.length <= 1) return arr
  let leftArr = []
  let rightArr = []
  let base = arr[0]
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < base) {
      leftArr.push(arr[i])
    } else {
      rightArr.push(arr[i])
    }
  }
  return quickSort(leftArr).concat([base],quickSort(rightArr))
  // let left = []
  // let right = []
  // let middle = Math.floor((arr.length - 1) / 2)
  // let pivot = arr.splice(middle, 1)
  // for (let i = 0; i < arr.length; i++) {
  //   if (arr[i] < pivot[0]) {
  //     left.push(arr[i])
  //   } else {
  //     right.push(arr[i])
  //   }
  // }
  // return quickSort(left).concat(pivot,quickSort(right))
}





/**
 *  深度克隆
 */

function deepClone(obj) {
  // 过滤不需要深度克隆的情况
  if (obj === null) return null
  if (typeof obj !== 'object') return obj
  // 正则处理
  if (obj instanceof RegExp) {
    return new RegExp(obj)
  }
  //  日期处理
  if (obj instanceof Date) {
    return new Date(obj)
  }
  // 不直接创建空对象， 使克隆的结果和之前保持相同的所属类
  let newObj = new obj.constructor
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      newObj[key] = deepClone(obj[key])
    }
  }
  return newObj
}
/**
 * 防抖函数
 * @param {*} func 
 * @param {*} delay 
 * @param {*} target 
 * @returns 
 */

function debounce (func,delay, target = true) {
  let timer = null
  return function (...args) {
    if(timer) clearTimeout(timer)
    // 是否立即执行
    if(target && !tiemr) {
      func.apply(this,args)
    }
    timer = setTimeout(() => {
      func.apply(this,args)
    },delay)
  }
}