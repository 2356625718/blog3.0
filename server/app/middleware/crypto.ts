var CryptoJS = require("crypto-js");

module.exports = () => {
  return async (ctx, next) => {
    if (ctx.request.method === "POST") {
      let data = ctx.request.body.msg
      // Decrypt
      let bytes = CryptoJS.AES.decrypt(data, "zy blog");
      let decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
      ctx.request.body = decryptedData
    }
    await next();
    if (ctx.request.method === "POST") {
      let encJson = CryptoJS.AES.encrypt(JSON.stringify(ctx.body), 'zy blog').toString();
      //对加密数据进行base64处理, 原理：就是先将字符串转换为utf8字符数组，再转换为base64数据
      let data = CryptoJS.enc.Base64.stringify(CryptoJS.enc.Utf8.parse(encJson))
      ctx.body = {
        msg: data
      }
    }
  };
};
