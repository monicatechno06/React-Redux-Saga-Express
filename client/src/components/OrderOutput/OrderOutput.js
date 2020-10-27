import React from 'react';

import './OrderOutput.css';

const OrderOutput = (props) => (
  <div className="OrderOutput">
    Order Total: {props.value}
  </div>
);

export default OrderOutput;