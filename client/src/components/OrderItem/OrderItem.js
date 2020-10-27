import React from 'react';

import './OrderItem.css';

const OrderItem = (props) => (
  <div className="OrderItem" onClick={props.clicked}>
    {props.label}
  </div>
);

export default OrderItem;