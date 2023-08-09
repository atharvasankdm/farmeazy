import { Box, Button, Input, InputAdornment, TextField } from "@mui/material";
import React, { useState } from "react";
import MinViewProduct from "../components/MinViewProduct";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { useCountdown } from "react-countdown-circle-timer";
import CloseIcon from "@mui/icons-material/Close";

const ProductBidderModal = ({
  farmerDetails,
  handleBidderClose,
  image,
  name,
  price,
  quantity,
  productId,
}) => {
  const {
    path,
    pathLength,
    stroke,
    strokeDashoffset,
    remainingTime,
    elapsedTime,
    size,
    strokeWidth,
  } = useCountdown({
    isPlaying: true,
    duration: 7,
    colors: "#abc",
  });

  console.log(productId);
  const [bidAmount, setBidAmount] = useState(0);

  const handlePlaceBid = () => {
    const updateBid = async () => {
      try {
        await fetch(
          `http://localhost:8000/elca/items/updateitem/ws/${productId}`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
              "Access-Control-Allow-Origin": "*",
            },
            body: JSON.stringify({
              price: bidAmount,
            }),
          }
        );

        document.location.reload();
      } catch (err) {
        console.log(err);
      }
    };

    updateBid();
  };

  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        top: "0px",
        position: "absolute",
        zIndex: "10",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "black",
        opacity: "0.9",
      }}
    >
      <Box
        sx={{
          height: "600px",
          width: "500px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "5px",
          paddingTop: "20px",
          backgroundColor: "white",
          boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
          position: "relative",
          opacity: "1",
          zindex: "10",
          padding: "20px",
        }}
      >
        <Button
          sx={{ position: "absolute", top: "0px", right: "0px" }}
          onClick={() => {
            handleBidderClose();
          }}
        >
          <CloseIcon />
        </Button>

        <MinViewProduct
          title={name}
          quantity={quantity}
          price={price}
          image={
            "https://media.newyorker.com/photos/5f2c85539a557880d973a759/2:2/w_1592,h_1592,c_limit/Buford-FrenchRice.jpg"
          }
          farmerDetails={farmerDetails}
        />

        <span style={{ color: "green", fontWeight: "300", fontSize: "12px" }}>
          bid amout should be atleast 10% more than current bid
        </span>

        <span
          style={{
            width: "100%",
            textAlign: "center",
            marginTop: "10px",
            fontSize: "24px",
            color: "gray",
          }}
        >
          Current Max Bid : ₹{price}.
        </span>

        <TextField
          type="number"
          id="outlined-basic"
          label="please enter your bid"
          variant="outlined"
          onChange={(e) => {
            setBidAmount(e.target.value);
          }}
          sx={{
            marginTop: "20px",
          }}
          InputProps={{
            startAdornment: <InputAdornment position="start">₹</InputAdornment>,
          }}
        />

        <Button
          sx={{
            width: "100%",
            backgroundColor: "green",
            color: "white",
            height: "50px",
            marginTop: "15px",
            marginBottom: "10px",
            "&:hover": {
              color: "grey",
              backgroundColor: "white",
              border: "2px solid lightGreen",
              transition: "0.2s easein",
            },
          }}
          onClick={handlePlaceBid}
        >
          PLACE BID
        </Button>

        <span>Time Remaining: </span>
        <CountdownCircleTimer
          size="100"
          isPlaying
          duration={100}
          colors={["green"]}
        >
          {({ remainingTime }) => remainingTime}
        </CountdownCircleTimer>
      </Box>
    </Box>
  );
};

export default ProductBidderModal;
