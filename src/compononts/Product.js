import React, { useEffect } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  Button,
} from "@mui/material";

import { useDispatch, useSelector } from "react-redux";
import { get, updateStock, deleteItem,added } from "../store/actions/action";
import './Product.scss'


export default function Product() {


  // how to use hooks instead of mapStateToProps:
  const { products } = useSelector((state) => state.product); 
  const { activeCatogry } = useSelector((state) => state.catogries);// to get the active catogry

  // hook dispatch()
  const dispatch = useDispatch();

  function getQuote() {
    dispatch(get());
  }
  function update(id, payload) {
    dispatch(updateStock(id, payload));
  }
  function deleteproduct(id) {
    dispatch(deleteItem(id));
  }

  useEffect(() => {
    getQuote();
  }, [products]);

  function addedToCart(payload) {
    dispatch(added(payload));
  }

  return (
    <Grid
      container
      direction="row"
      justifyContent="space-evenly"
      alignItems="center"
    >
      {products.map((product) => {
        if (product.categoryAssociation == activeCatogry) {
          return (
            <>
              <Card
                sx={{ maxWidth: 345 }}
                className="container"
                key={product.name}
              >
                <CardMedia
                  component="img"
                  height="140"
                  image={product.img}
                  alt="I phone"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {product.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {product.description}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {product.inventoryCount}
                  </Typography>
                </CardContent>
               
           
             

                <Button className='addBtn' variant="contained" onClick={() => {
                    if (product.inventoryCount > 0) {
                      addedToCart(product);
                      update(product.id, product);
                    } else {
                      alert('This Item will be deleted')
                      deleteproduct(product.id);
                    }
                  }}
                >Add to cart</Button>
              </Card>
            </>
          );
        }
      })}
    </Grid>
  );
}
