import { Alert, ToastAndroid, Platform } from 'react-native'
import shortid from 'shortid'
import _ from 'lodash'

export const addShortid = objArray => objArray.map(item => ({
  ...item, id: shortid.generate(),
}))

export const toastShort = (content, isAlert) => {
  if (isAlert || Platform.OS === 'ios') {
    Alert.alert(
      'Alert',
      content.toString(),
    )
  } else {
    ToastAndroid.show(content.toString(), ToastAndroid.SHORT)
  }
}

export function replaceKeysDeep(obj, replaceKey) {
  const replacedKey = 'children'
  const newKey = obj[replaceKey]
  if (_.isArray(obj)) {
    return _.transform(obj, (result, value, key) => {
      result[key] = _.isObject(value) ? replaceKeysDeep(value, replaceKey) : value
    })
  }
  if (Object.keys(obj[replacedKey]).length > 0) {
    return _.transform(obj, (result, value, key) => { // transform to a new object
      const currentKey = key === replacedKey ? newKey : key
      if (key === replacedKey || !isNaN(parseInt(key, 10))) {
        result[currentKey] = _.isObject(value) ? replaceKeysDeep(value, replaceKey) : value
      }
    })
  }
  return obj[replaceKey]
}

export function setLabelDict(name, initialLabels) {
  const labelDict = {}
  initialLabels.map((firstLayer) => {
    firstLayer.children.map((secondLayer) => {
      if (secondLayer.children.length <= 0) {
        labelDict[secondLayer[name]] = secondLayer.id
        return secondLayer
      }
      secondLayer.children.map((thirdLayer) => {
        labelDict[thirdLayer[name]] = thirdLayer.id
        return thirdLayer
      })
      return secondLayer
    })
    return firstLayer
  })
  return labelDict
  // for (let firstLayer of initialLabels) {
  //   for (let secondLayer of firstLayer.children) {
  //     if (secondLayer.children.length <= 0) {
  //       labelDict[secondLayer[name]] = secondLayer.id
  //       continue
  //     }
  //     for (let thirdLayer of secondLayer.children) {
  //       labelDict[thirdLayer[name]] = thirdLayer.id
  //     }
  //   }
  // }
}

export function createInitialLabels(name, initialLabels) {
  if (!initialLabels) return null
  const data = []
  const labels = Object.values(replaceKeysDeep(
    initialLabels.children[1], name,
  ))[0]
  labels.map((firstLayer) => {
    const obj = {}
    const key = Object.keys(firstLayer)[0]
    obj[key] = []
    firstLayer[key].map((secondLayer) => {
      let layer = secondLayer
      if (typeof (secondLayer) === 'string') {
        // secondLayer = Object.keys(secondLayer)[0]
        layer = { [secondLayer]: [''] }
      }
      obj[key].push(layer)
      return secondLayer
    })
    data.push(obj)
    return firstLayer
  })
  // for (const firstLayer of labels) {
  //   const obj = {}
  //   const key = Object.keys(firstLayer)[0]
  //   obj[key] = []
  //   for (let secondLayer of firstLayer[key]) {
  //     if (typeof (secondLayer) === 'string') {
  //       // secondLayer = Object.keys(secondLayer)[0]
  //       secondLayer = { [secondLayer]: [''] }
  //     }
  //     obj[key].push(secondLayer)
  //   }
  //   data.push(obj)
  // }
  return data
}

export const transferTimeFormat = (timeRange) => {
  let showTime = ''
  const today = (new Date()).toDateString
  let todayFlag = false
  let startMonth
  let startDate
  let startHour
  let endMonth
  let endDate
  let endHour
  let startMin
  if (timeRange[0] != null) {
    const start = new Date(timeRange[0])
    startMonth = (start.getMonth() + 1).toString()
    startDate = (start.getDate()).toString()
    startHour = (start.getHours()).toString()
    startMin = start.getMinutes()
    if (start.toDateString() === today) {
      todayFlag = true
    }
    if (startMin < 10) {
      startMin = '0'.concat(startMin.toString())
    } else {
      startMin = startMin.toString()
    }
  }
  if (timeRange[1] !== null) {
    const end = new Date(timeRange[1])
    endMonth = (end.getMonth() + 1).toString()
    endDate = (end.getDate()).toString()
    endHour = (end.getHours()).toString()
    let endMin = end.getMinutes()
    if (endMin < 10) {
      endMin = '0'.concat(endMin.toString())
    } else {
      endMin = endMin.toString()
    }
  }
  if (timeRange[0] !== null && timeRange[1] != null) {
    if (startMonth === endMonth) {
      if (startDate === endDate) {
        if (todayFlag) {
          showTime += `今日${startHour}:${startMin}`
        } else {
          showTime += `${startMonth}月${startDate}日 ${startHour}: ${startMin}`
        }
      } else {
        showTime += `${startMonth}月${startDate}日 - ${endDate}日`
      }
    } else {
      showTime = `${startMonth}月${startDate}日 - ${endMonth}月${endDate}日`
    }
    return [
      `${showTime}`,
    ]
  } else if (timeRange[0] == null && timeRange[1] == null) {
    showTime = '待定'
  } else if (timeRange[0] != null && timeRange[1] == null) {
    if (todayFlag) {
      showTime += `今日${startHour}:${startMin}`
    } else {
      showTime = `${startMonth}月${startDate}日${startHour}:${startMin}`
    }
  }
  return [
    `${showTime}`,
  ]
}

export const transferTimeFormatInside = (timeRange) => {
  let showTime = ''
  const today = (new Date()).toDateString
  let todayFlag = false
  let startMonth
  let startDate
  let startHour
  let endMonth
  let endDate
  let endHour
  let startMin
  let endMin
  if (timeRange[0] != null) {
    const start = new Date(timeRange[0])
    startMonth = (start.getMonth() + 1).toString()
    startDate = (start.getDate()).toString()
    startHour = (start.getHours()).toString()
    startMin = start.getMinutes()
    if (start.toDateString() === today) {
      todayFlag = true
    }
    if (startMin < 10) {
      startMin = '0'.concat(startMin.toString())
    } else {
      startMin = startMin.toString()
    }
  }
  if (timeRange[1] !== null) {
    const end = new Date(timeRange[1])
    endMonth = (end.getMonth() + 1).toString()
    endDate = (end.getDate()).toString()
    endHour = (end.getHours()).toString()
    endMin = end.getMinutes()
    if (endMin < 10) {
      endMin = '0'.concat(endMin.toString())
    } else {
      endMin = endMin.toString()
    }
  }
  if (timeRange[0] !== null && timeRange[1] != null) {
    if (startMonth === endMonth) {
      if (startDate === endDate) {
        showTime += `${startMonth}月${startDate}日${startHour}: ${startMin} - ${endHour}: ${endMin}`
      } else {
        showTime += `${startMonth}月${startDate}日${startHour}: ${startMin} - ${endDate}日${endHour}: ${endMin}`
      }
    } else {
      showTime += `${startMonth}月${startDate}日${startHour}: ${startMin} - ${endMonth}月${endDate}日${endHour}: ${endMin}`
    }
    return [
      `${showTime}`,
    ]
  } else if (timeRange[0] == null && timeRange[1] == null) {
    showTime = '待定'
  } else if (timeRange[0] != null && timeRange[1] == null) {
    if (todayFlag) {
      showTime += `今日 ${startHour}:${startMin}`
    } else {
      showTime = `${startMonth}月${startDate}日${startHour}:${startMin}`
    }
  }
  return [
    `${showTime}`,
  ]
}
