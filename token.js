const crypto = require("crypto")

function encrypt(str) {
  const factory = crypto.createHash("sha256")
  factory.update(str)
  const hash = factory.digest("hex")
  return hash
}

function secureToken(dc, ts, secureKey) {
  const str = dc + ts + secureKey
  const secureToken = encrypt(str)
  return secureToken
}

module.exports = { secureToken }
