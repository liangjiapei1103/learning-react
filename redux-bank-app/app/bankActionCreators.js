import constants from './constants';

const bankActionCreators = {
    /**
    *   @param {number} amount to deposit
    */
    depositIntoAccount(amount) {
        return {
            type: constants.DEPOSIT_INTO_ACCOUNT,
            amount: amount
        };
    },

    /**
    *   @param {number} amount to withdraw
    */
    withdrawFromAccount(amount) {
        return {
            type: constants.WITHDRAW_FROM_ACCOUNT,
            amount: amount
        };
    },

    /**
      * Toggle the visibility of the exchange rate
      */
      toggleExchange() {
        return {
          type: constants.TOGGLE_EXCHANGE
        };
      }
    };

export default bankActionCreators;
