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
        showTime += `${startMonth}月${startDate}日 ${startHour}: ${startMin} - ${endHour}: ${endMin}`
      } else {
        showTime += `${startMonth}月${startDate}日 ${startHour}: ${startMin} - ${endDate}日 ${endHour}: ${endMin}`
      }
    } else {
      showTime += `${startMonth}月${startDate}日 ${startHour}: ${startMin} - ${endMonth}月${endDate}日 ${endHour}: ${endMin}`
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
      showTime = `${startMonth}月${startDate}日 ${startHour}:${startMin}`
    }
  }
  return [
    `${showTime}`,
  ]
}
