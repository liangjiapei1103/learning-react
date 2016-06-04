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
    *   @oaram {number} amount to withdraw
    */
    withdrawFromAccount(amount) {
        return {
            type: constants.WITHDRAW_FROM_ACCOUNT,
            amount: amount
        };
    }
};

export default bankActionCreators;
