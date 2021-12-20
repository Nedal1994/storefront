import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import './Navbar.scss'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { connect } from "react-redux";
import Paper from '@mui/material/Paper'

const Navbar = ({ cart }) => {
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    let count = 0;
    cart.forEach((item) => {
      count += item.qty;
    });

    setCartCount(count);
  }, [cart, cartCount]);

  return (
    <div>
      <Paper elevation={3} className="paper">
      <Link to="/">
        <h2>OUR STORE</h2>
      </Link>
      <Link to="/cart">
        <div className="cart2">
          <h3>Cart</h3>
            <ShoppingCartIcon/>
        {cartCount}
        </div>
      </Link>
      </Paper>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.shop.cart,
  };
};

export default connect(mapStateToProps)(Navbar);
