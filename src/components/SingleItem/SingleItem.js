import React from "react";
// import styles from "./SingleItem.module.css";

import { connect } from "react-redux";
import { addToCart } from "../../redux/Shopping/shopping-actions";
import './SingleItem.scss'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const SingleItem = ({ current, addToCart }) => {
  return (
    <div>
      <Card sx={{ maxWidth: 500 }} className='card2'>
        <CardMedia
          component="img"
          height="300"
          image={current.image}
          alt={current.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {current.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {current.description}
          </Typography>
          <Typography mt={2}>
            ${current.price}
          </Typography>
        </CardContent>
        <CardActions>
          <Button variant="contained" size="large" onClick={() => addToCart(current.id)}>
            Add to cart
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    current: state.shop.currentItem,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => dispatch(addToCart(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleItem);
