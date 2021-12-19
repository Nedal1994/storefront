import React from "react";
import { connect } from "react-redux";
import { display } from "../store/catogry";
import { Breadcrumbs, Link } from "@mui/material";

function Catogries(props) {
  console.log(props.catogries);
  return (
    <section>
      <Breadcrumbs>
        <Link onClick={() => props.display("E")}>
         Electronics
        </Link>
        <Link onClick={() => props.display("A")}>
         Acceccories
        </Link>
      </Breadcrumbs>
    </section>
    // <ul>
    //   {props.catogries.catogries.map((catogry) => {
    //     return (
    //       <li onClick={() => props.display(catogry.normalizedName)} key={catogry.normalizedName}>
    //         {catogry.displaynName}
    //       </li>
    //     );
    //   })}
    // </ul>
  );
}

const mapStateToProps = (state) => ({
  catogries: state.catogries,
});
const mapDispatchToProps = { display };

export default connect(mapStateToProps, mapDispatchToProps)(Catogries);
