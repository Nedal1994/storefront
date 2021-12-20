import React, { useState, useEffect } from "react";
import './Cart.scss'

import { connect } from "react-redux";

import CartItem from "./CartItem/CartItem";

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import SendIcon from '@mui/icons-material/Send';
import { Button, CardActionArea, CardActions } from '@mui/material';


const Cart = ({ cart }) => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    let items = 0;
    let price = 0;

    cart.forEach((item) => {
      items += item.qty;
      price += item.qty * item.price;
    });

    setTotalItems(items);
    setTotalPrice(price);
  }, [cart, totalPrice, totalItems, setTotalPrice, setTotalItems]);

  return (
    <div className="main">

{cart.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}

      <Card sx={{ maxWidth: 500 }} className='cart'>
        <CardActionArea>
          <h4>Cart summary</h4>
          <CardContent>
            <span>TOTAL: ({totalItems} items)</span><br /><br />
            <span>$ {totalPrice}</span>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button variant="contained" endIcon={<SendIcon />}>
            Proceed to checkout
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.shop.cart,
  };
};

export default connect(mapStateToProps)(Cart);
