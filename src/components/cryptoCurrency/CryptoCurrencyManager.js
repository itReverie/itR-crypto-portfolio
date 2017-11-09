import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as currenciesActions from '../../actions/currenciesActions';
import CryptoCurrencyRow from './CryptoCurrencyRow';
import PropTypes from 'prop-types';

class CryptoCurrencyManager extends React.PureComponent {

  constructor(props) {
    super(props);
     this.state ={
       cryptoCurrency: Object.assign({},this.props.cryptoCurrency),
       errors: {}
     };
  }

  updateCurrencyAmount(event)
  {
    let currentCryptoCurrency = Object.assign({},this.props.cryptoCurrency);
    currentCryptoCurrency.amount = event.target.value;
    this.props.actions.updateCurrencyAmount(currentCryptoCurrency);
  }


  componentWillMount()
  {
    this.updateCurrencyAmount = this.updateCurrencyAmount.bind(this);
  }

  render(){
    return (
      <CryptoCurrencyRow key={this.props.cryptoCurrency.id}
                         cryptoCurrency={this.props.cryptoCurrency}
                         onChange={this.updateCurrencyAmount}
                         errors={this.props.errors} />
    );
  }
}


CryptoCurrencyManager.propTypes={
  cryptoCurrency: PropTypes.object.isRequired,
  actions:  PropTypes.object.isRequired,
  errors :  PropTypes.object
};


//-------------------------------------------------------------------
//Redux connect section
//-------------------------------------------------------------------
function mapStateToProps(state) {
  return {currency: state.cryptoCurrency};
}


function mapDispatchToProps (dispatch)
{
  return {
    actions: bindActionCreators(currenciesActions,dispatch)
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(CryptoCurrencyManager);


