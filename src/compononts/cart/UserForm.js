import React from "react";
import { Box, TextField, Grid, Card, Button } from "@mui/material";
import { useSelector } from "react-redux";

export default function UserForm() {
  const { AddedProducts } = useSelector((state) => state.cart);
  console.log(AddedProducts);
  let total = 0;

  return (
    <>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <form>
          <h3>Order Summary</h3>

          <ul>
            {AddedProducts.map((product) => {
              total += Number(product.price);
              return <li>{product.name}</li>;
            })}
            <li>Total{total}$ </li>
          </ul>
          <Grid
            container
            direction="row"
            justifyContent="space-evenly"
            alignItems="center"
          >
            <h3>Billing Address</h3>
            <Card>
              <TextField
                id="standard-basic"
                label="Full Name"
                variant="standard"
              />
              <TextField
                id="standard-basic"
                label="Address"
                variant="standard"
              />
              <TextField id="standard-basic" label="City" variant="standard" />
              <TextField id="standard-basic" label="State" variant="standard" />
              <TextField id="standard-basic" label="Zip" variant="standard" />
            </Card>

            <div style={{ position: "absolute", left: "20%", height: "300px" }}>
              <h3>Payment Mathod</h3>
              <Card>
                <TextField
                  id="standard-basic"
                  label="Full Name"
                  variant="standard"
                />
                <TextField
                  id="standard-basic"
                  label="Address"
                  variant="standard"
                />
                <TextField
                  id="standard-basic"
                  label="City"
                  variant="standard"
                />
                <TextField
                  id="standard-basic"
                  label="State"
                  variant="standard"
                />
                <TextField id="standard-basic" label="Zip" variant="standard" />
              </Card>
            </div>
            <Button onClick={() => alert("Thank you for your purchase")}>
              {" "}
              Place Your Order
            </Button>
          </Grid>
        </form>
      </Box>
    </>
  );
}