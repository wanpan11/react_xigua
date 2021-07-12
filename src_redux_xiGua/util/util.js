import { parse } from 'qs';

// 获取路由参数 const {id} = getPageQuery()
export function getPageQuery() {
  return parse(window.location.href.split('?')[1]);
}

// 身份证校验规则(验证头两位,生日范围0-110,末位校验位)
const cityCoding = {
  11:"北京",12:"天津",13:"河北",14:"山西",15:"内蒙古",
  21:"辽宁",22:"吉林",23:"黑龙江",31:"上海",32:"江苏",
  33:"浙江",34:"安徽",35:"福建",36:"江西",37:"山东",41:"河南",
  42:"湖北",43:"湖南",44:"广东",45:"广西",46:"海南",50:"重庆",
  51:"四川",52:"贵州",53:"云南",54:"西藏",61:"陕西",62:"甘肃",
  63:"青海",64:"宁夏",65:"新疆",71:"台湾",81:"香港",82:"澳门", 91: '国外',
};

export function checkIDCard(id) {
  // 判断是否为空
  if(id === '') return false;
  // 判断 id 长度
  if(checkIDLength(id) === false) return false;

  // 检查省份是否正确(id前两位)
  if(checkIDCityCoding(id) === false) return false;

  // 检查生日
  if(checkIDBirthday(id) === false) return false;
  // 最后一位校验位检测
  return checkIdLastBit(id) === true;
}

function checkIDLength(id) {
  // 身份证15位为全数字 18位最后一位可能为 X或者数字
  const reg = /(^\d{15}$)|(^\d{17}(\d|X|x)$)/;
  return reg.test(id) !== false;
}

function checkIDCityCoding(id) {
  const province = id.substr(0, 2);
  return cityCoding[province] !== undefined;
}

function checkIDBirthday(id) {
  const idLength = id.length;
  // 15位身份证 第7,8位(年);9,10(月);11,12(日)
  if(idLength === 15){
    const reg = /^(\d{6})(\d{2})(\d{2})(\d{2})(\d{3})$/;
    const idArray = id.match(reg);
    const year = idArray[2];
    const month = idArray[3];
    const day = idArray[4];
    const birthday = new Date(`19${year}/${month}/${day}`);
    return verifyBirthday(`19${year}`,month,day,birthday);
  }
  // 18位身份证 第7,8,9,10位(年);11,12(月);13,14(日)
  if(idLength === 18){
    const reg = /^(\d{6})(\d{4})(\d{2})(\d{2})(\d{3})([0-9]|X|x)$/;
    const idArray = id.match(reg);
    const year = idArray[2];
    const month = idArray[3];
    const day = idArray[4];
    const birthday = new Date(`${year}/${month}/${day}`);
    return verifyBirthday(year, month, day, birthday);
  }
  return false;
}

function verifyBirthday(year, month, day, birthday) {
  const now = new Date();
  const nowYear = now.getFullYear();

  const birthdayYear = birthday.getFullYear();
  let birthdayMonth = birthday.getMonth() + 1;
  let birthdayDay = birthday.getDate();

  if (birthdayYear === parseInt(year, 10) && birthdayMonth === parseInt(month, 10) && birthdayDay === parseInt(day, 10)) {
    // 判断年份范围(0->110之间)
    const time = nowYear - year;
    return time >= 0 && time <= 110;
  }
  return false;
}

function checkIdLastBit(id) {
  id = changeBit(id);
  const length = id.length;
  if(length === 18){
    const arrInt = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];
    const arrCh = ['1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2'];
    let cardTemp = 0, i, CheckDigit;
    for(i = 0; i < 17; i++) {
      cardTemp += id.substr(i, 1) * arrInt[i];
    }
    CheckDigit = arrCh[cardTemp % 11];
    return CheckDigit === id.substr(17, 1).toLocaleUpperCase();
  }
  return false;
}

function changeBit(id) {
  // 把 15 位身份证转成 18 位(规则:年份补全成4位,添加末位校验码)
  if (id.length === 15) {
    const arrInt = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];
    const arrCh = ['1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2'];
    let cardTemp = 0, i;
    id = id.substr(0, 6) + '19' + id.substr(6, id.length - 6);
    for (i = 0; i < 17; i++) {
      cardTemp += id.substr(i, 1) * arrInt[i];
    }
    id += arrCh[cardTemp % 11];
    return id;
  }
  return id;
}

