import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Container,
} from "@mui/material";
import "../index.css";

import { connect } from "react-redux";

function Product(props) {
  return (
    <section>
      {props.products.map((product) => {
        if (product.categoryAssociation == props.catogries) {
          return (
            <>
              <h2 style={{textAlign:"center"}}> {product.name}</h2>
              <Container >
                <Card sx={{ maxWidth: 345 }}className="container">
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
                  <CardActions></CardActions>
                </Card>
              </Container>
            </>
          );
        }
      })}
    </section>
  );
}

const mapStateToProps = (state) => ({
  catogries: state.catogries.active,
  products: state.product.products,
});

export default connect(mapStateToProps)(Product);
