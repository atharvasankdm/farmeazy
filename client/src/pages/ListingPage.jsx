import {
  Box,
  Divider,
  FormControlLabel,
  FormGroup,
  IconButton,
  Input,
  Paper,
  Switch,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import HomeNavbar from "../components/HomeNavbar";
import classes from "./listingPage.module.css";
import SearchIcon from "@mui/icons-material/Search";
import MinViewProduct from "../components/MinViewProduct";
import ProductBidderModal from "../overlays/ProductBidderModal";
import { useEffect } from "react";
import axios from "axios";

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

const ListingPage = () => {
  const [showBidderModal, setShowBidderModal] = useState(false);
  const [products, setProducts] = useState([]);
  const [sorted, setSorted] = useState(false);

  const handleSortChange = (e) => {
    setSorted(e.target.checked);
  };

  const fetchItems = async () => {
    if (!sorted) {
      const res = fetch("http://localhost:8000/elca/items/fetchitems/all", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((data) => setProducts(data));
    } else {
      const res = fetch(
        "http://localhost:8000/elca/items/fetchitems/all/sorteda",
        {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      )
        .then((response) => response.json())
        .then((data) => setProducts(data));
    }
  };

  useEffect(() => {
    fetchItems();
  }, [sorted]);

  const [modalProductName, setModalProductName] = useState("");
  const [modalProductPrice, setModalProductPrice] = useState(0);
  const [modalProductQuantity, setModalQuantity] = useState(0);
  const [modalItemId, setModalItemId] = useState("");
  const [modalFarmerDetails, setModalFarmerDetails] = useState({});

  const handleModalOpen = (data) => {
    setShowBidderModal(true);
    setModalProductName(data.name);
    setModalProductPrice(data.price);
    setModalQuantity(data.quantity);
    setModalItemId(data._id);
    setModalFarmerDetails(data.farmer);
  };

  const handleModalClose = () => {
    setShowBidderModal(false);
  };
  return (
    <Box>
      {!showBidderModal && (
        <>
          <HomeNavbar />
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
            }}
          >
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <h1
                style={{
                  color: "gray",
                  fontSize: "20px",
                  fontWeight: "500",
                  margin: "10px",
                }}
              >
                Listed Products:
                <span style={{ color: "black" }}>
                  {products.length} products currently listed
                </span>
              </h1>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <TextField
                  id="outlined-basic"
                  label=" search     for specific products"
                  variant="outlined"
                  color="success"
                  sx={{ marginLeft: "10px" }}
                />
                <IconButton
                  type="button"
                  sx={{ p: "10px" }}
                  aria-label="search"
                >
                  <SearchIcon />
                </IconButton>
              </Box>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <h2
                style={{
                  color: "gray",
                  fontSize: "16px",
                  fontWeight: "500",
                  margin: "10px",
                }}
              >
                filters:
              </h2>
              <FormGroup sx={{ display: "flex" }}>
                <FormControlLabel
                  control={
                    <Switch checked={sorted} onChange={handleSortChange} />
                  }
                  label="sort by price"
                />
                <FormControlLabel
                  control={<Switch />}
                  label="sort by location"
                />
              </FormGroup>
            </Box>
          </Box>

          <Divider />
          <Box className={classes.ListingPageLists}>
            {products.map((data) => {
              return (
                <MinViewProduct
                  farmerDetails={modalFarmerDetails}
                  data={data}
                  boolBidder={true}
                  handleBidderOpen={handleModalOpen}
                  title={data.name}
                  quantity={data.quantity}
                  price={data.price}
                  image="https://media.newyorker.com/photos/5f2c85539a557880d973a759/2:2/w_1592,h_1592,c_limit/Buford-FrenchRice.jpg"
                  // image={data.productImage}
                />
              );
            })}
          </Box>
        </>
      )}

      {showBidderModal && (
        <ProductBidderModal
          image="http://localhost:8000/elca/items/fetchitems/all/sorteda"
          name={modalProductName}
          price={modalProductPrice}
          quantity={modalProductQuantity}
          productId={modalItemId}
          handleBidderClose={handleModalClose}
          farmerDetails={modalFarmerDetails}
        />
      )}
    </Box>
  );
};

export default ListingPage;
