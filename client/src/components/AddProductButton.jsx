import React from "react";
import classes from "./addProductButton.module.css";
import AddIcon from "@mui/icons-material/Add";
import { Link } from "react-router-dom";

const AddProductButton = () => {
  return (
    <div className={classes.mainProductDiv}>
      <Link style={{ textDecoration: "none" }} to="/addProduct">
        <button className={classes.mainButton}>
          <AddIcon />
          ADD ITEM
        </button>
      </Link>
    </div>
  );
};

export default AddProductButton;
