import { Button, Input } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useState } from "react";
import classes from "./addProductPage.module.css";
import axios from "axios";

const AddProductPage = () => {
  const [itemName, setItemName] = useState("");
  const [itemCost, setItemCost] = useState(0);
  const [itemQty, setItemQty] = useState(0);
  const [itemImage, setItemImage] = useState({});

  const handleAddProduct = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", itemName);
    formData.append("price", itemCost);
    formData.append("quantity", itemQty);
    formData.append("testImage", itemImage);

    // const addItemObject = {
    //   name: itemName,
    //   price: itemCost,
    //   quantity: itemQty,
    //   testImage: itemImage,
    // };

    // // console.log(addItemObject);

    const response = await axios.post(
      "http://localhost:8000/elca/items/additems",
      formData,
      {
        headers: { "Content-Type": "multipart/form-data" },
      }
    );

    document.location.replace("farmer-home");
  };

  return (
    <Box className={classes.mainContainer}>
      <form
        action=""
        onSubmit={handleAddProduct}
        className={classes.formContainer}
      >
        <Input
          type="text"
          placeholder="enter name of item"
          onChange={(e) => {
            setItemName(e.target.value);
          }}
        />
        <Box sx={{ display: "flex" }}>
          <Input
            sx={{ margin: "5px" }}
            type="number"
            placeholder="enter cost of item"
            onChange={(e) => {
              setItemCost(e.target.value);
            }}
          />
          <Input
            sx={{ margin: "5px" }}
            type="number"
            placeholder="enter qty of item"
            onChange={(e) => {
              setItemQty(e.target.value);
            }}
          />
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <label htmlFor="" style={{ color: "gray" }}>
            Please upload image of the item
          </label>
          <Input
            type="file"
            accept="image/*"
            name="testImage"
            onChange={(e) => {
              setItemImage(e.target.files[0]);
            }}
          />
        </Box>

        <Button
          sx={{
            color: "black",
            fontWeight: "semibold",
            backgroundColor: "lightgray",
          }}
          type="submit"
        >
          SUBMIT
        </Button>
      </form>
    </Box>
  );
};

export default AddProductPage;
