import * as React from "react";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import { Paper } from '@mui/material';
import MenuItem from "@material-ui/core/MenuItem";
import { connect } from "react-redux";

function Header(props) {

  return (
    <Paper elevation={3} >
      
        <Toolbar>
          <IconButton/>

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Our store
          </Typography>
          <MenuItem>
            <IconButton color="inherit">
            </IconButton>
            <p>Cart</p>
          </MenuItem>
        </Toolbar>
      
    </Paper>
  );
}
const mapStateToProps = (state) => ({
  counter: state.cart.counter
});
export default connect(mapStateToProps)(Header);
