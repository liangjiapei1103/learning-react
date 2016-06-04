import React, { Component, PropTypes } from 'react';
import {render} from 'react-dom';
import bankStore from './bankStore';
import constants from './constants';
import bankActionCreators from './bankActionCreators';
import { connect, Provider } from 'react-redux';

class BankApp extends Component {
    handleDeposit() {
        this.props.onDeposit(this.refs.amount.value);
        this.refs.amount.value = '';
    }

    handleWithdraw() {
        this.props.onWithdraw(this.refs.amount.value);
        this.refs.amount.value = '';
    }

    render() {
        return (
            <div>
                <header>
                    <img src="//www.pro-react.com/logos/redux-bank.svg" width="150" />Redux Bank
                </header>
                <h1>Your balance is ${(this.props.balance).toFixed(2)}</h1>
                <div className="atm">
                    <input type="text" placeholder="Enter Amount" ref="amount" />
                    <button onClick={this.handleWithdraw.bind(this)}>Withdraw</button>
                    <button onClick={this.handleDeposit.bind(this)}>Deposit</button>
                </div>

                <div className="info" onClick={this.props.onToggle}>
                     <strong>Additional Info:</strong>
                     <div className={this.props.showExchange? 'info--visible' : 'info--closed'}>
                       <p><strong>Your account Manager:</strong> C. F. Frost </p>
                       <p><strong>Pre approved credit limit:</strong> $500,000.00 </p>
                     </div>
               </div>

            </div>



        );
    }
}

BankApp.propTypes = {
    balance: PropTypes.number,
    onDeposit: PropTypes.func,
    onWithdraw: PropTypes.func,
    onToggle: PropTypes.func,
    showExchange: PropTypes.bool
}

// class BankAppContainer extends Component {
//     componentDidMount() {
//         this.unsubscribe = bankStore.subscribe(() =>
//             this.setState({balance: bankStore.getState().balance})
//         );
//     }
//
//     componentWillUnmount() {
//         this.unsubscribe();
//     }
//
//     render() {
//         return (
//             <BankApp
//                 balance= {bankStore.getState().balance }
//                 onDeposit={ (amount) => bankStore.dispatch(
//                     bankActionCreators.depositIntoAccount(amount)
//                 )}
//                 onWithdraw={ (amount) => bankStore.dispatch(
//                     bankActionCreators.withdrawFromAccount(amount)
//                 )}
//             />
//         );
//     }
// }

// Generate a container app by Mapping state and dispatch to props
const mapStateToProps = (state) => {
    return {
        balance: state.balance,
        showExchange: state.ui.showExchange
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onDeposit: (amount) => dispatch(bankActionCreators.depositIntoAccount(amount)),
        onWithdraw: (amount) => dispatch(bankActionCreators.withdrawFromAccount(amount)),
        onToggle: () => dispatch(bankActionCreators.toggleExchange())
    }
}

const BankAppContainer = connect(mapStateToProps, mapDispatchToProps)(BankApp);

render(
    <Provider store={bankStore}>
        <BankAppContainer />
    </Provider>,
    document.getElementById('root')
);
