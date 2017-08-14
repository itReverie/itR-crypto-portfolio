import expect from 'expect';
import currenciesReducer from './currenciesReducer';
import * as actions from '../actions/currenciesActions';

describe('Portfolio Reducer', () => {
  it('should return a portfolio when LOAD_PORTFOLIO_SUCCESS', () => {

    // arrange
    const initialState = [];
    const currencies = [{name:'BTC', amount:3},
                        {name:'ETH', amount:20},
                        {name:'LTC', amount:6}];

    const action = actions.loadCurrenciesSuccess(currencies);


    // act
    const newState = currenciesReducer(initialState, action);


    // assert
    expect(newState[0].name).toEqual('BTC');
    expect(newState[1].name).toEqual('ETH');
    expect(newState[2].name).toEqual('LTC');
  });


});
