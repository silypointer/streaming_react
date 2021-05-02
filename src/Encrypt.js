import CryptoAES from "crypto-js/aes";
import CryptoENC from "crypto-js/enc-utf8";

// var ciphertext = CryptoAES.encrypt("my message", "secret key 123");
// var _ciphertext = CryptoAES.decrypt(ciphertext.toString(), "secret key 123");

export const encryption = (message) => {
  var ciphertext = CryptoAES.encrypt(message, "secret");
  console.log(ciphertext.toString(CryptoENC));
};

export const decryption = (message) => {
  return CryptoAES.decrypt(message.toString(), "secret key 123");
};
