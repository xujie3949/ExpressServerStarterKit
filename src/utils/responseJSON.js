/**
 * 表达错误的response对象
 * @param errcode 错误码，小于零的整数
 * @param msg 错误信息,默认值'error'
 * @returns {{errcode: number, msg: string}}
 */
function error(errcode, msg = 'error') {
  return {
    errcode,
    msg,
  };
}

/**
 * 表达正确的response对象
 * @param msg 成功消息
 * @param data 携带的数据，默认值null
 * @returns {{errcode: number, msg: string, data: *}}
 */
function success(msg, data = null) {
  return {
    errcode: 0,
    msg,
    data,
  };
}

export {
  error,
  success,
};

