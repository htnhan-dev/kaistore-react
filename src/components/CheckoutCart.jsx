import React, { useEffect, useState, useRef } from "react";
import PropTypes from "prop-types";

import numberWithCommas from "../utils/numberWithCommas";



const CheckoutCart = props => {

  const itemRef = useRef(null);

  const [item, setItem] = useState(props.item);

  useEffect(() => {
    setItem(props.item);
  }, [props.item]);

  console.log(item)
  return (
    <div className="checkout__total__content__product" ref={itemRef}>
      <span>{item.product.title} <strong>x</strong> {item.quantity}</span>
      <span>{numberWithCommas(item.price)}</span>
    </div>
  );
};

CheckoutCart.propTypes = {};

export default CheckoutCart;
