"use client";
import React from "react";
// import styles from "./AddToCard.module.css";
const AddToCart = () => {
  //   return <div className={styles.card}>AddToCart</div>;
  return (
    <button onClick={() => console.log("clicked")} className="btn btn-primary">
      Add to Cart
    </button>
  );
};

export default AddToCart;
