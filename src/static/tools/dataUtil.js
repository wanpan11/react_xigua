const detaUtil = {}

/**
 * 
 * @param {}  data = object or array
 * @param {path} String = 'a.[0].b.a[0]'
 * @description 获取对象或数组内的参数
 */
const getDateVal = function parse(obj, path) {
    const reg1 = new RegExp(/\[/g)
    const reg2 = new RegExp(/]/g)
    let pathArr, val = 'undefined';
    if (!(obj instanceof Array)) {
        if (path.indexOf('[') > -1) {
            path = path.replace(reg1, '.').replace(reg2, '')
        }
        pathArr = path.split('.')
        for (let key of pathArr) {
            if (val !== 'undefined') {
                if (!val[key]) {
                    val = 'is not definde'
                    break
                }
                val = val[key]
            } else {
                if (!obj[key]) {
                    val = 'is not definde'
                    break
                }
                val = obj[key]
            }
        }
    } else {
        path = path.replace('[', '')
        path = path.replace(reg1, '.').replace(reg2, '')
        pathArr = path.split('.')
        for (let key of pathArr) {
            if (val !== 'undefined') {
                if (!val[key]) {
                    val = 'is not definde'
                    break
                }
                val = val[key]
            } else {
                if (!obj[key]) {
                    val = 'is not definde'
                    break
                }
                val = obj[key]
            }
        }
    }
    return val
};
detaUtil.getDateVal = getDateVal;



export { detaUtil }