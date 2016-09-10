var merchants = require('./merchant-codes');

function mcc (code){
  return merchants.find(function(merchant){
    return merchant.mcc == code;
  });
}


module.exports = mcc;
