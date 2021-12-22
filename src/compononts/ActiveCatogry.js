import React from "react";

function ActiveCatogry(props) {
  return <div>{props.catogries}</div>;
}

const mapStateToProps = (state) => ({
  catogries: state.catogries.activeCatogry,
});

export default connect(mapStateToProps)(ActiveCatogry);
