import React, { useEffect } from "react";
import { display } from "../store/actions/action";
import { Breadcrumbs, Link } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

export default function Catogries() {
  const dispatch = useDispatch();


  function displayed(name) {
    dispatch(display(name));
  }
  return (
    <section>
      <Breadcrumbs>
        <Link onClick={() => displayed("E")}>Electronics</Link>
        <Link onClick={() => displayed("F")}>Food</Link>
      </Breadcrumbs>

    </section>

  );
}

