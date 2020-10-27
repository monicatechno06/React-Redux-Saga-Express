import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../../store/actions/actions';

import OrderItem from '../../components/OrderItem/OrderItem';
import OrderOutput from '../../components/OrderOutput/OrderOutput';

class Order extends Component {
  render() {
    return (
      <div>
        <OrderOutput value={this.props.total} />
        <OrderItem label="Add One Pizza" clicked={this.props.onAddItem} />
        <OrderItem label="Subtract One Pizza" clicked={this.props.onSubtractItem} />
        <OrderItem label="Apply Coupons (saga call)" clicked={this.props.onGetCoupons} />
        <hr />
        <button className="OrderItem" onClick={() => this.props.onStoreResult(this.props.total)}>Store Last Order Total</button>
        <ul>
          {this.props.storedResults.map(strResult => (
            <li key={strResult.id}>{strResult.value}</li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    total: state.total.total,
    storedResults: state.res.results
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onAddItem: () => dispatch(actionCreators.add(100)),
    onSubtractItem: () => dispatch(actionCreators.subtract(100)),
    onStoreResult: (result) => dispatch(actionCreators.storeResult(result)),
    onGetCoupons: () => dispatch(actionCreators.getCoupons()),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Order);