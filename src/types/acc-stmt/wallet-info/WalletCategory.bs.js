// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';

var ErrorUtils = require("../../../utils/ErrorUtils.bs.js");

function fromString(wallet_type) {
  switch (wallet_type) {
    case "advance_account_wallet_usage" :
        return /* Advance_Account_Wallet_Usage */1;
    case "credit_account_wallet_usage" :
        return /* Credit_Account_Wallet_Usage */0;
    default:
      return ErrorUtils.raiseError("WalletCategory.re", "invalid wallet category for account statement", wallet_type);
  }
}

exports.fromString = fromString;
/* No side effect */
