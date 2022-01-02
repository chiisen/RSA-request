const mysql = require("sync-mysql")

const connection = new mysql({
  host: "192.168.100.22",
  port: "3308",
  user: "apma",
  password: "This123kw",
  database: "game",
})

const rsaKey = (dc) => {
  const result = connection.query(
    `SELECT 
PublicKey, PrivateKey
FROM
game.dc_rsa_key
WHERE
DC = "${dc}"
LIMIT 1;`
  )
  return result
}

const secureKey = (dc) => {
  const result = connection.query(
    `SELECT 
    C.DC, H.SecureKey
FROM
    game.customer C
        INNER JOIN
    game.hall H ON C.HallId = H.HallId
WHERE
    C.DC = "${dc}" AND C.IsAg = 3
LIMIT 1;`
  )
  return result
}

module.exports = { rsaKey, secureKey }
