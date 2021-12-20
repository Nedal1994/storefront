import React, { useState } from "react";
import './CartItem.scss'

import { connect } from "react-redux";
import {
  adjustItemQty,
  removeFromCart,
} from "../../../redux/Shopping/shopping-actions";

import DeleteIcon from '@mui/icons-material/Delete';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { IconButton, CardActionArea, CardActions } from '@mui/material';


const CartItem = ({ item, adjustQty, removeFromCart }) => {
  const [input, setInput] = useState(item.qty);

  const onChangeHandler = (e) => {
    setInput(e.target.value);
    adjustQty(item.id, e.target.value);
  };

  return (
<div>
      <Card sx={{ maxWidth: 345 }}  className='car' >
      <CardActionArea>
        <CardMedia
          component="img"
          height="250"
          image={item.image}
          alt={item.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {item.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {item.description}
          </Typography>
          <Typography mt={2}>
            ${item.price}
          </Typography>
          <Typography mt={2}>
            Quantity
          </Typography>
          <input
            min="1"
            type="number"
            id="qty"
            name="qty"
            className="qty"
            value={input}
            onChange={onChangeHandler}
          />
        </CardContent>
      </CardActionArea>
      <CardActions>
      <IconButton aria-label="delete" size="large" onClick={() => removeFromCart(item.id)}>
        <DeleteIcon fontSize="inherit" />
      </IconButton>
      </CardActions>
    </Card>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    adjustQty: (id, value) => dispatch(adjustItemQty(id, value)),
    removeFromCart: (id) => dispatch(removeFromCart(id)),
  };
};

export default connect(null, mapDispatchToProps)(CartItem);
