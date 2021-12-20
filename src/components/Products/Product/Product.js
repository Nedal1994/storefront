import React from "react";
import { Link } from "react-router-dom";
import  "./Product.scss";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

// Redux
import { connect } from "react-redux";
import {
  loadCurrentItem,
  addToCart,
} from "../../../redux/Shopping/shopping-actions";

const Product = ({ product, addToCart, loadCurrentItem }) => {
  return (
    <div className='card'>
   
      <Card sx={{ maxWidth: 345 }}  >
      <CardMedia
        component="img"
        alt={product.title}
        height="140"
        image={product.image}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {product.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {product.description}
        </Typography>
        <Typography mt={2}>
          ${product.price}
        </Typography>
      </CardContent>
      <CardActions>
      <Button variant="contained" size="medium" onClick={() => addToCart(product.id)}>
          Add to cart
        </Button>
        <Link to={`/product/${product.id}`}>
        <Button size="small" onClick={() => loadCurrentItem(product)}>
          View product
          </Button>
          </Link>
      </CardActions>
    </Card>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => dispatch(addToCart(id)),
    loadCurrentItem: (item) => dispatch(loadCurrentItem(item)),
  };
};

export default connect(null, mapDispatchToProps)(Product);
