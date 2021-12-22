import React from "react";
import { connect } from "react-redux";
import "../index.css";
import { display,deleteProduct } from "../store/actions/action";

function SimpleCart(props) {
  return (
    <>
      <div className="simple-cart">
        <ul>
          {props.cart.map((product) => {
            return (
              <>
                <li key={product.name} onClick={() => props.display(product)}>
                  {product.name}
                  <button onClick={() => props.deleteProduct(product)}>
                    Delete
                  </button>{" "}
                </li>
              </>
            );
          })}
        </ul>
      </div>
    </>
  );
}

const mapStateToProps = (state) => ({
  cart: state.cart.AddedProducts,
});
const mapDispatchToProps = { display, deleteProduct };

export default connect(mapStateToProps, mapDispatchToProps)(SimpleCart);
