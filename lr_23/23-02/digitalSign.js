const crypto = require("crypto");

module.exports.ServerSign = (rs, cb) => {
  const { privateKey, publicKey } = crypto.generateKeyPairSync("rsa", {
    modulusLength: 2048,
    publicKeyEncoding: {
      type: "pkcs1",
      format: "pem",
    },
    privateKeyEncoding: { type: "pkcs1", format: "pem" },
  });
  let s = crypto.createSign("SHA256");
  rs.pipe(s);
  rs.on("end", () => {
    cb({
      signature: s.sign(privateKey).toString("hex"),
      publicKey: publicKey.toString("hex"),
    });
  });
};

module.exports.ClientVerify = (SignContext, rs, cb) => {
  const v = crypto.createVerify("SHA256");
  rs.pipe(v);
  rs.on("end", () => {
    cb(v.verify(SignContext.publicKey, SignContext.signature, "hex"));
  });
};
