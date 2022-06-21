import React, { useEffect, useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import CartItem from "../components/CartItem";
import { toast } from "react-toastify";
import Button from "../components/Button";
import Helmet from "../components/Helmet";
import { deleteAll } from "../redux/shopping-cart/cartItemsSlide";
import productData from "../assets/fake-data/products";
import numberWithCommas from "../utils/numberWithCommas";
import Breadcrumb from "../components/Breadcrumb";

const Cart = () => {

  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cartItems.value);

  const [cartProducts, setCartProducts] = useState(
    productData.getCartItemsInfo(cartItems)
  );

  const [totalProducts, setTotalProducts] = useState(0);

  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    setCartProducts(productData.getCartItemsInfo(cartItems));
    setTotalPrice(
      cartItems.reduce(
        (total, item) => total + Number(item.quantity) * Number(item.price),
        0
      )
    );
    setTotalProducts(
      cartItems.reduce((total, item) => total + Number(item.quantity), 0)
    );
  }, [cartItems]);

  const deleteCart = () => {
    dispatch(deleteAll());
    // window.location.reload();
  };
  return (
    <Helmet title="Cart">
      <Breadcrumb title="Cart" link="Cart" slug="/cart" />
      <div className="cart">
        <div className="cart__number">
          <p>
            Cart currently available <span>{totalProducts}</span> products.
          </p>
        </div>
        <div className="cart__list">
          <div className="cart__list__title">
            <div className="cart__list__title__item">Image</div>
            <div className="cart__list__title__item">Name</div>
            <div className="cart__list__title__item">Options</div>
            <div className="cart__list__title__item">Price</div>
            <div className="cart__list__title__item">QTY</div>
            <div className="cart__list__title__item">Action</div>
          </div>
          {cartProducts.map((item, index) => (
            <>
              <CartItem item={item} key={index} />
            </>
          ))}
        </div>
        <div className="cart__btn">
          <div className="cart__btn__item">
            {(() => {
              if (totalProducts === 0) {
                return (
                  <Link to="/catalog">
                    <button className="continue">Continue Shopping</button>
                  </Link>
                );
              } else {
                return (
                  <>
                    <button className="removecart" onClick={() => deleteCart()}>
                      Remove Cart
                    </button>
                    <Link to="/catalog">
                      <button className="continue">Continue Shopping</button>
                    </Link>
                  </>
                );
              }
            })()}
          </div>
        </div>
        {(() => {
          if (totalProducts === 0) {
            return null;
          } else {
            return (
              <>
                <div className="cart__total">
                    <div className="cart__total__content">
                      <div className="cart__total__content__title">
                        <h3>Cart Total</h3>
                        <h3>Price</h3>
                      </div>
                      <div className="cart__total__content__product">
                        <span>Total Products</span>
                        <span>{numberWithCommas(totalPrice)}</span>
                      </div>
                      <div className="cart__total__content__shipping">
                        <div className="cart__total__content__shipping__item">
                          <div className="left">
                            <input type="checkbox" /> Standard
                          </div>
                          <div className="right">
                            Free Ship
                          </div> 
                        </div>
                        <div className="cart__total__content__shipping__item">
                          <div className="left">
                            <input type="checkbox" /> Express
                          </div>
                          <div className="right">
                            Free Ship
                          </div> 
                        </div>
                      </div>
                      <div className="cart__total__content__grand">
                        <h2>Grand Total</h2>
                        <h2>{numberWithCommas(totalPrice)}</h2>
                      </div>
                      <Link to="/checkout">
                          <button>Check Out</button>
                      </Link>
                    </div>
                </div>
              </>
            );
          }
        })()}
      </div>
    </Helmet>
  );
};

export default Cart;
