import { Box, Divider, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import AddProductButton from "../components/AddProductButton";
import HomeNavbar from "../components/HomeNavbar";
import MinViewProduct from "../components/MinViewProduct";
import ProductModal from "../overlays/ProductModal";
import classes from "./farmerListPage.module.css";
import axios from "axios";
import kommunicateChat from "../KommunicateChat";

const fakeData = [
  {
    productTitle: "rice",
    quantity: "10kg",
    productImage:
      "https://media.newyorker.com/photos/5f2c85539a557880d973a759/2:2/w_1592,h_1592,c_limit/Buford-FrenchRice.jpg",
    pricePerKg: "54",
  },

  {
    productTitle: "rice",
    quantity: "10kg",
    productImage:
      "https://media.newyorker.com/photos/5f2c85539a557880d973a759/2:2/w_1592,h_1592,c_limit/Buford-FrenchRice.jpg",
    pricePerKg: "54",
  },

  {
    productTitle: "rice",
    quantity: "10kg",
    productImage:
      "https://media.newyorker.com/photos/5f2c85539a557880d973a759/2:2/w_1592,h_1592,c_limit/Buford-FrenchRice.jpg",
    pricePerKg: "54",
  },

  {
    productTitle: "rice",
    quantity: "10kg",
    productImage:
      "https://media.newyorker.com/photos/5f2c85539a557880d973a759/2:2/w_1592,h_1592,c_limit/Buford-FrenchRice.jpg",
    pricePerKg: "54",
  },
];

const FarmerListPage = () => {
  const [showProductModal, setShowProductModal] = useState(false);
  const [listedProducts, setListedProducts] = useState([]);
  console.log(listedProducts);

  useEffect(() => {
    const fetchListedProducts = async () => {
      const response = await axios.get(
        "http://localhost:8000/elca/items/fetchitems"
      );

      setListedProducts(response.data);
    };

    fetchListedProducts();
  }, []);

  const handleModalClose = () => {
    setShowProductModal(false);
  };

  const handleModalOpen = () => {
    setShowProductModal(true);
  };

  return (
    <Box className={classes.mainListingSection}>
      {!showProductModal && (
        <>
          <HomeNavbar isFarm={true} />
          <AddProductButton />
          <Divider />
          <Typography
            variant="h4"
            component="h3"
            textAlign="center"
            color="gray"
            mt="10px"
          >
            LISTED PRODUCTS BY FARMERS
          </Typography>

          <Box className={classes.listSection}>
            {listedProducts.map((data) => {
              return (
                <MinViewProduct
                  boolProductView={true}
                  handleOpen={handleModalOpen}
                  title={data.name}
                  quantity={data.quantity}
                  price={data.price}
                  image="https://media.newyorker.com/photos/5f2c85539a557880d973a759/2:2/w_1592,h_1592,c_limit/Buford-FrenchRice.jpg"
                  tempImage={data.img}
                />
              );
            })}
          </Box>
          <kommunicateChat />
        </>
      )}
      {showProductModal && <ProductModal handleClose={handleModalClose} />}
    </Box>
  );
};

export default FarmerListPage;
