import React from 'react';
import { useDispatch } from 'react-redux';
import { setShippingMethod } from '../../redux/actions/shippingActions';

const ShippingMethod = () => {
  const dispatch = useDispatch();

  // Dispatch the selected shipping method to Redux
  const handleSelect = (method) => {
    dispatch(setShippingMethod(method));
  };

  return (
    <div>
      <h3>Select Shipping Method</h3>
      {/* Buttons to select Standard or Express shipping */}
      <button onClick={() => handleSelect('Standard')}>Standard</button>
      <button onClick={() => handleSelect('Express')}>Express</button>
    </div>
  );
};

export default ShippingMethod;
