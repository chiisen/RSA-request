const rsa = require("node-rsa")

/**
 * 解密
 * @param {*} privateKey
 * @param {*} x
 * @returns
 */
function decrypt(privateKey, x) {
  const key = new rsa(privateKey)
  key.setOptions({ encryptionScheme: "pkcs1_oaep" })
  const decrypt = key.decrypt(x, "utf8")
  return decrypt
}

/**
 * 加密
 * @param {*} publicKey
 * @param {*} x
 * @returns
 */
function encrypt(publicKey, x) {
  const key = new rsa(publicKey)

  key.setOptions({ encryptionScheme: "pkcs1_oaep" })
  const encrypt = key.encrypt(x, "base64", "utf8")
  return encrypt
}

module.exports = { decrypt, encrypt }
