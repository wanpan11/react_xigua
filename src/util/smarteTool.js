// const _L = require('lodash')

const smarteTool = {}

/**
 * 
 * @param {any} o 
 * @returns {type}
 */
const oType = (o) => {
    return o === null ? 'null' : typeof o
}
smarteTool.oType = oType

const getValByIterativeKey = (data, keyArr, result) => {
    if (!data) {
        data = {}
    }
    if (!keyArr) {
        keyArr = []
    }
    if (oType(keyArr) === 'string') {
        keyArr = keyArr.split('.')
    }
    var key = keyArr.shift()
    data = data[key]
    if (!data) {
        return
    }
    if (keyArr.length > 0) {
        return getValByIterativeKey(data, keyArr, result)
    } else {
        return result.push(data)
    }
}
/**
 * 
 * @param {'object,Array'} data 
 * @param {'key.key.0'} keyArr 
 * @returns {any}
 */
const getDeepVal = (data, keyArr) => {
    let result = []
    getValByIterativeKey(data, keyArr, result)
    return result[0]
}
smarteTool.getDeepVal = getDeepVal

/**
 * 
 * @param {'object,Array'} data 
 * @param {'key.key.0'} keyArr 
 * @param {any} newValue 
 * @returns 
 */
const setDeepVal = (data, keyArr, newValue) => {
    if (!keyArr) {
        keyArr = []
    }
    if (oType(keyArr) === 'string') {
        keyArr = keyArr.split('.')
    }
    if (!(keyArr instanceof Array) || keyArr.length < 1) {
        console.error(
            'setDeepVal ERROR - keyArr is empty:',
            data,
            keyArr,
            newValue
        )
    }
    const keyArr2 = keyArr.length > 1 ? keyArr.slice(0, keyArr.length - 1) : []
    const lastKey = keyArr.length > 1 ? keyArr.slice(-1)[0] : keyArr[0]
    if (oType(lastKey) === 'undefined') {
        console.error(
            'setDeepVal ERROR - lastKey is undefined:',
            data,
            keyArr,
            newValue
        )
    }
    for (let i = 0, ref = data; i < keyArr2.length; i++) {
        const subKey = keyArr2[i]
        const tmp = ref[subKey]
        if (['undefined', 'null'].indexOf(oType(tmp)) > -1) {
            ref = ref[subKey] = {}
        } else if (oType(tmp) === 'object') {
            ref = tmp
        }
    }
    const lastSecondObj = keyArr2.length > 0 ? getDeepVal(data, keyArr2) : data
    if (!lastSecondObj || oType(lastSecondObj) !== 'object') {
        console.error(
            'setDeepVal ERROR #382 lastSecondObj is not object:',
            data,
            keyArr,
            newValue
        )
        return
    }
    lastSecondObj[lastKey] = newValue
}
smarteTool.setDeepVal = setDeepVal

/**
 * 拼接get请求参数
 * @param {string} path 
 * @param {object} params 
 * @returns {string}
 */
const setUrlParams = (path, params) => {
    if (typeof path !== 'string') {
        return 'path is not string'
    }
    if (typeof params !== 'object') {
        return 'params is not object'
    }
    let index = 0
    path += '?'
    for (let key in params) {
        if (index === 0) {
            index++
            path += `${key}=${params[key]}`
        } else {
            path += `&${key}=${params[key]}`
        }
    }
    return path
}
smarteTool.setUrlParams = setUrlParams

/**
 * 获取get请求参数
 * @param {string} path 
 * @param {object} params 
 * @returns {string}
 */
const getUrlParams = (url) => {
    if (typeof url !== 'string') {
        return 'path is not string'
    }
    url = decodeURI(url)
    const paramsStr = url.slice((url.indexOf('?')) + 1)
    let params = {}
    let item = paramsStr.split('&')
    item.forEach(ele => {
        let index = ele.indexOf('=')
        let key = ele.slice(0, index)
        let val = ele.slice(index + 1)
        params[key] = val
    })
    return params
}
smarteTool.getUrlParams = getUrlParams


exports.smarteTool = smarteTool