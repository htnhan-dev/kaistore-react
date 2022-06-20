import React, { useEffect, useState, useRef } from "react";
import Helmet from "../components/Helmet";
import { useSelector } from "react-redux";
import productData from "../assets/fake-data/products";
import numberWithCommas from "../utils/numberWithCommas";
import Breadcrumb from "../components/Breadcrumb";
import { Link } from "react-router-dom";
import CheckoutCart from "../components/CheckoutCart";
import { toast } from "react-toastify";
import { deleteAll } from "../redux/shopping-cart/cartItemsSlide";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Checkout = () => {

  const path = useNavigate();

  const dispatch = useDispatch();
  
  const cartItems = useSelector((state) => state.cartItems.value);

  const [checkOut, setCheckOut] = useState(
    productData.getCartItemsInfo(cartItems)
  );

  const deleteCart = () => {
    dispatch(deleteAll());
    window.location.reload();
    path("/catalog")
  };

  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    setCheckOut(productData.getCartItemsInfo(cartItems));
    setTotalPrice(
      cartItems.reduce(
        (total, item) => total + Number(item.quantity) * Number(item.price),
        0
      )
    );
    // setTotalProducts(
    //   cartItems.reduce((total, item) => total + Number(item.quantity), 0)
    // );
  }, [cartItems]);

  console.log(cartItems);


  return (
    <Helmet title="CheckOut">
      <Breadcrumb title="Check Out" link="Check Out" slug="/checkout" />
      <div className="checkout">
        <div className="checkout__left">
          <h2>Billing Details</h2>
          <form className="checkout__left__form">
            <div className="checkout__left__form__group">
              <div className="first">
                <label>First Name</label>
                <input type="text" min={1}/>
              </div>
              <div className="second">
                <label>Last Name</label>
                <input type="text" min={1}/>
              </div>
            </div>
            <div className="checkout__left__form__group">
              <div className="first">
                <label>Phone</label>
                <input type="text" min={1}/>
              </div>
              <div className="second">
                <label>Email</label>
                <input type="text" min={1}/>
              </div>
            </div>
            <div className="checkout__left__form__done">
              <label>Address</label>
              <input type="text" min={1}/>
            </div>
          </form>
        </div>
        <div className="checkour__right">
          <div className="checkout__total">
            <div className="checkout__total__content">
              <div className="checkout__total__content__title">
                <h3>Cart Total</h3>
                <h3>Price</h3>
              </div>

              {checkOut.map((item, index) => {
                return (
                   <CheckoutCart item={item} index={index}/>
                );
              })}
              <div className="checkout__total__content__grand">
                <h2>Grand Total</h2>
                <h2>{numberWithCommas(totalPrice)}</h2>
              </div>
              {/* <Link to="/thankyou"> */}
                <button onClick={() => deleteCart()}>Place Order</button>
              {/* </Link> */}
            </div>
          </div>
        </div>
      </div>
    </Helmet>
  );
};

export default Checkout;
